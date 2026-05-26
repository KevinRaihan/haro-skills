# Video Recording

Capture browser automation sessions as video for debugging, documentation, or verification. Produces WebM (VP8/VP9 codec).

## Basic Recording

```bash
# Open browser first
playwright-cli open

# Start recording
playwright-cli video-start demo.webm

# Add a chapter marker for section transitions
playwright-cli video-chapter "Getting Started" --description="Opening the homepage" --duration=2000

# Navigate and perform actions
playwright-cli goto https://example.com
playwright-cli snapshot
playwright-cli click e1

# Add another chapter
playwright-cli video-chapter "Filling Form" --description="Entering test data" --duration=2000
playwright-cli fill e2 "test input"

# Stop and save
playwright-cli video-stop
```

## Best Practices

### 1. Use Descriptive Filenames

```bash
# Include context in filename
playwright-cli video-start recordings/login-flow-2024-01-15.webm
playwright-cli video-start recordings/checkout-test-run-42.webm
```

### 2. Record Entire Hero Scripts

When recording a video for the user or as a proof of work, it is best to create a code snippet and execute it with run-code. It allows pulling appropriate pauses between the actions and annotating the video.

1. Perform scenario using CLI and take note of all locators and actions.
2. Create a file with the intended script for video (below). Use `pressSequentially` with delay for nice typing, make reasonable pauses.
3. Use `playwright-cli run-code --filename your-script.js`

**Important**: Overlays are `pointer-events: none` — they do not interfere with page interactions. You can safely keep sticky overlays visible while clicking, filling, or performing any actions on the page.

```js
async page => {
  await page.screencast.start({ path: 'video.webm', size: { width: 1280, height: 800 } });
  await page.goto('https://demo.playwright.dev/todomvc');

  // Show a chapter card — blurs the page and shows a dialog.
  // Blocks until duration expires, then auto-removes.
  await page.screencast.showChapter('Getting Started', {
    description: 'Opening the app',
    duration: 2000
  });

  // Perform actions with nice pacing
  await page.getByPlaceholder('What needs to be done?').pressSequentially('Buy milk', { delay: 80 });
  await page.keyboard.press('Enter');

  await page.screencast.stop();
}
```
