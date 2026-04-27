---
name: outlook-playwright
description: >
  Automate Microsoft Outlook Web (outlook.office.com) using playwright-cli.
  Use when asked to send emails, read inbox, attach files, or interact with Outlook
  via browser automation. Covers login (including MFA), email composition, HTML body
  injection, file attachment, and sending. Handles Outlook-specific quirks like
  contenteditable body fields and the file chooser dialog.
  Triggers on: "send email via outlook", "automate outlook", "compose email playwright",
  "attach file outlook", "send sprint digest", "email via browser".
allowed-tools: Bash(playwright-cli:*) Bash(python3:*) Bash(clip.exe:*) Bash(cat:*) Bash(sleep:*)
---

# Outlook Web Automation via playwright-cli

Structured playbook for interacting with Microsoft Outlook Web. Always follow the
login flow first, handle MFA before proceeding, then compose or read.

---

## Architecture Notes

Outlook Web uses a React-based SPA. Key quirks:
- **Message body** is a `contenteditable` div, not a `<textarea>` — `playwright-cli type` does not work reliably for long/Unicode text. Use JS injection instead.
- **File chooser** opens as a modal state after clicking "Browse this computer" — handle it with `playwright-cli upload`, not `run-code`.
- **To / Subject** fields are standard inputs; click by `aria-label` then type.
- **MFA** shows a number on screen — the user must match it in their Authenticator app. Always pause and ask for confirmation before proceeding.

---

## Mandatory Workflows

### Workflow A — Login with MFA

```bash
playwright-cli open https://outlook.office.com
playwright-cli snapshot
# → wait for "Sign in" page

playwright-cli fill e<N> "user@domain.com" --submit
# → fills email textbox (placeholder: "Enter your email, phone, or Skype.")

sleep 2 && playwright-cli snapshot
# → wait for password screen

playwright-cli fill e<N> "PASSWORD" --submit
# → fills password textbox (aria-label contains "Enter the password for")

sleep 3 && playwright-cli snapshot
# → MFA screen appears: heading "Approve sign in request"
# → Read the number shown on screen (e.g. ref=e51, innerText = "94")
# → PAUSE. Tell the user: "Enter [NUMBER] in your Authenticator app, then confirm."
# → Wait for user confirmation before continuing.

sleep 2 && playwright-cli snapshot
# → Should now show Outlook inbox (Page Title: "Mail - ... - Outlook")
```

**Key selectors:**
| Element | Selector strategy |
|---|---|
| Email input | `[placeholder="Email, phone, or Skype"]` or `e<ref>` from snapshot |
| Password input | `[aria-label*="Enter the password"]` |
| MFA number | Read snapshot: `generic "... [NUMBER]"` element |
| Inbox confirmation | `Page Title: Mail - <Name> - Outlook` |

---

### Workflow B — Compose and Send Email

```bash
# 1. Open compose window
playwright-cli click "getByRole('button', { name: 'New', exact: true })"
sleep 1

# 2. Fill To field
playwright-cli click "[aria-label='To']"
playwright-cli type "recipient@domain.com"
playwright-cli press Tab          # confirms the recipient token

# 3. Fill Subject
playwright-cli click "[aria-label='Subject']"
playwright-cli type "Your Subject Here"

# 4. Fill Message Body  ← see Workflow C for HTML bodies
playwright-cli click "[aria-label='Message body']"
# For plain text (short, ASCII-only):
playwright-cli type "Your message here"

# 5. Send
playwright-cli click "[aria-label='Send']"
sleep 2
# Verify: compose window gone → eval returns null
playwright-cli eval "document.querySelector('[aria-label=\"Message body\"]') === null"
```

---

### Workflow C — Inject HTML or Rich Body Content

The message body is a `contenteditable` div. For any of these cases, use JS injection:
- Long text with Unicode, emojis, or box-drawing characters
- HTML-formatted email body (tables, colors, inline CSS)
- Content copied from a file

**Option 1 — Plain text from a file (via Windows clipboard):**
```bash
cat /path/to/body.txt | clip.exe          # copies to Windows clipboard
playwright-cli click "[aria-label='Message body']"
playwright-cli press "Control+v"          # paste
# Verify:
playwright-cli eval "document.querySelector('[aria-label=\"Message body\"]')?.textContent?.slice(0,80)"
```

**Option 2 — Direct JS injection (most reliable for long/Unicode text):**
```bash
BODY=$(cat /path/to/body.txt | python3 -c "import sys,json; print(json.dumps(sys.stdin.read()))")
playwright-cli run-code "async page => {
  const body = $BODY;
  await page.locator('[aria-label=\"Message body\"]').click();
  await page.evaluate((text) => {
    const el = document.querySelector('[aria-label=\"Message body\"]');
    el.focus();
    el.innerText = text;
    el.dispatchEvent(new Event('input', { bubbles: true }));
  }, body);
}"
```

**Option 3 — HTML body injection:**
```bash
HTML=$(cat /path/to/body.html | python3 -c "import sys,json; print(json.dumps(sys.stdin.read()))")
playwright-cli run-code "async page => {
  const html = $HTML;
  await page.locator('[aria-label=\"Message body\"]').click();
  await page.evaluate((markup) => {
    const el = document.querySelector('[aria-label=\"Message body\"]');
    el.focus();
    el.innerHTML = markup;
    el.dispatchEvent(new Event('input', { bubbles: true }));
  }, html);
}"
# Verify content was set:
playwright-cli eval "document.querySelector('[aria-label=\"Message body\"]')?.textContent?.slice(0,80)"
```

---

### Workflow D — Attach a File

```bash
# 1. Click Attach file button
playwright-cli click "[aria-label='Attach file']"
sleep 1 && playwright-cli snapshot
# → A dropdown appears with: "Browse this computer", "OneDrive", "Upload and share", "Link"

# 2. Click "Browse this computer" — this opens a file chooser modal
playwright-cli run-code "async page => {
  const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser', { timeout: 10000 }),
    page.getByRole('menuitem', { name: 'Browse this computer' }).click()
  ]);
  await fileChooser.setFiles('/absolute/path/to/file.xlsx');
}"
# If run-code triggers the modal but can't handle it, use:
playwright-cli upload "/absolute/path/to/file.xlsx"

sleep 2
# Verify attachment appeared:
playwright-cli eval "document.querySelector('[aria-label=\"file attachments\"]')?.textContent?.slice(0,80)"
```

---

## Verification Checks

Use these at key steps to confirm state before moving forward:

```bash
# Logged in?
playwright-cli eval "document.title"
# → expect: "Mail - <Name> - Outlook"

# To field set?
playwright-cli eval "document.querySelector('[aria-label=\"To\"]')?.innerHTML?.slice(0,100)"
# → expect: span with recipient name

# Subject set?
playwright-cli eval "document.querySelector('[aria-label=\"Subject\"]')?.value"
# → expect: "Your Subject"

# Body has content?
playwright-cli eval "document.querySelector('[aria-label=\"Message body\"]')?.textContent?.slice(0,80)"
# → expect: first 80 chars of your body

# Attachment present?
playwright-cli eval "document.querySelector('[aria-label=\"file attachments\"]')?.textContent?.slice(0,80)"
# → expect: filename + size

# Email sent? (compose window gone)
playwright-cli eval "document.querySelector('[aria-label=\"Message body\"]') === null"
# → expect: true
```

---

## Common Pitfalls

| Symptom | Cause | Fix |
|---|---|---|
| `type` doesn't insert Unicode/emoji | Keyboard API can't handle multi-byte chars | Use JS injection (Workflow C) |
| Body paste is empty after `Ctrl+v` | Browser sandbox blocks clipboard access | Use JS injection directly |
| `click "New"` hits wrong button | Multiple buttons match "New" | Use `exact: true`: `getByRole('button', { name: 'New', exact: true })` |
| File chooser opens but upload fails | `run-code` can't handle modal state | Use `playwright-cli upload "/path"` after the modal appears |
| Recipient not confirmed as token | Typed email but didn't tab | Always press `Tab` after typing in the To field |
| Page still loading after login | Microsoft auth is slow | Add `sleep 3` before next snapshot after password submit |

---

## Playbooks

- [send-email.md](playbooks/send-email.md) — Full end-to-end: login → compose → attach → send
