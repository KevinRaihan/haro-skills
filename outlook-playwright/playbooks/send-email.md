# Playbook: Send Email via Outlook Web

End-to-end steps to send an email (with optional attachment) through
Microsoft Outlook Web using playwright-cli. Copy and adapt to any send-email task.

---

## Prerequisites

- `playwright-cli` installed and available in PATH
- Credentials: Outlook username + password
- (Optional) File path to attachment
- (Optional) HTML or plain-text body file

---

## Step 1 — Open Outlook

```bash
playwright-cli open https://outlook.office.com
sleep 3 && playwright-cli snapshot
```

Expected: "Sign in to your account" page with email input.

---

## Step 2 — Enter Email

```bash
playwright-cli fill "[placeholder='Email, phone, or Skype']" "USERNAME@DOMAIN.com" --submit
sleep 2 && playwright-cli snapshot
```

Expected: Password screen appears. Username shown above password field.

---

## Step 3 — Enter Password

```bash
playwright-cli fill "[aria-label*='Enter the password']" "PASSWORD" --submit
sleep 3 && playwright-cli snapshot
```

Expected: MFA screen appears with heading "Approve sign in request" and a number.

---

## Step 4 — Handle MFA (Authenticator App)

Read the number from the snapshot. It appears as:

```yaml
- generic "Open your Authenticator app ... [NUMBER]" [active] [ref=eXX]: "[NUMBER]"
```

**Action required:** Tell the user: *"Enter [NUMBER] in your Authenticator app, then confirm here."*

Wait for user confirmation. Then:

```bash
sleep 2 && playwright-cli snapshot
```

Expected: Outlook inbox loads. `Page Title: Mail - <Name> - Outlook`.

---

## Step 5 — Open Compose Window

```bash
playwright-cli click "getByRole('button', { name: 'New', exact: true })"
sleep 1
```

Expected: Compose pane or pop-up opens with To, Cc, Subject, and body fields.

---

## Step 6 — Fill Recipient

```bash
playwright-cli click "[aria-label='To']"
playwright-cli type "RECIPIENT@DOMAIN.com"
playwright-cli press Tab
```

After Tab, Outlook converts the typed address into a confirmed recipient token (blue chip).
Verify:
```bash
playwright-cli eval "document.querySelector('[aria-label=\"To\"]')?.innerHTML?.slice(0,100)"
```
Expected: contains a `<span>` with `_EType_RECIPIENT_ENTITY`.

---

## Step 7 — Fill Subject

```bash
playwright-cli click "[aria-label='Subject']"
playwright-cli type "Your Subject Here"
```

---

## Step 8 — Fill Body

### Plain text (short, ASCII only)
```bash
playwright-cli click "[aria-label='Message body']"
playwright-cli type "Your message here."
```

### Long text or Unicode/emoji content (from a file)
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

### HTML body (for rich, email-client-friendly formatting)
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
```

Verify body content:
```bash
playwright-cli eval "document.querySelector('[aria-label=\"Message body\"]')?.textContent?.slice(0,80)"
```

---

## Step 9 — Attach File (optional)

```bash
playwright-cli click "[aria-label='Attach file']"
sleep 1
# Dropdown opens → click Browse this computer (triggers file chooser modal)
playwright-cli run-code "async page => {
  const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser', { timeout: 10000 }),
    page.getByRole('menuitem', { name: 'Browse this computer' }).click()
  ]);
  await fileChooser.setFiles('/absolute/path/to/attachment.xlsx');
}"
# If run-code cannot handle the modal, the modal stays open — use:
# playwright-cli upload "/absolute/path/to/attachment.xlsx"

sleep 2
playwright-cli eval "document.querySelector('[aria-label=\"file attachments\"]')?.textContent?.slice(0,80)"
```

Expected: Filename and file size appear in the attachment bar.

---

## Step 10 — Send

```bash
playwright-cli click "[aria-label='Send']"
sleep 2
playwright-cli eval "document.querySelector('[aria-label=\"Message body\"]') === null"
```

Expected: `true` — compose window closed. Email sent.

---

## Full Command Sequence (copy-paste template)

```bash
# ── Login ──
playwright-cli open https://outlook.office.com
sleep 3
playwright-cli fill "[placeholder='Email, phone, or Skype']" "USER@DOMAIN" --submit
sleep 2
playwright-cli fill "[aria-label*='Enter the password']" "PASSWORD" --submit
sleep 3 && playwright-cli snapshot
# >>> PAUSE: read MFA number, wait for user confirmation <<<
sleep 2 && playwright-cli snapshot

# ── Compose ──
playwright-cli click "getByRole('button', { name: 'New', exact: true })"
sleep 1
playwright-cli click "[aria-label='To']"
playwright-cli type "RECIPIENT@DOMAIN"
playwright-cli press Tab
playwright-cli click "[aria-label='Subject']"
playwright-cli type "SUBJECT"

# ── Body (HTML file) ──
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

# ── Attach ──
playwright-cli click "[aria-label='Attach file']"
sleep 1
playwright-cli run-code "async page => {
  const [fc] = await Promise.all([
    page.waitForEvent('filechooser', { timeout: 10000 }),
    page.getByRole('menuitem', { name: 'Browse this computer' }).click()
  ]);
  await fc.setFiles('/path/to/attachment.xlsx');
}"
sleep 2

# ── Send ──
playwright-cli click "[aria-label='Send']"
sleep 2
playwright-cli eval "document.querySelector('[aria-label=\"Message body\"]') === null"
```
