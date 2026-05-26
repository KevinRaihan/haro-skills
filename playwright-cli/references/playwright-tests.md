# Running Playwright Tests

To run Playwright tests, use the `npx playwright test` command, or a package manager script. To avoid opening the interactive html report, use `PLAYWRIGHT_HTML_OPEN=never` environment variable.

```bash
# Run all tests
PLAYWRIGHT_HTML_OPEN=never npx playwright test

# Run all tests through a custom npm script
PLAYWRIGHT_HTML_OPEN=never npm run special-test-command
```

# Debugging Playwright Tests

To debug a failing Playwright test, run it with `--debug=cli` option. This command will pause the test at the start and print the debugging instructions.

**IMPORTANT**: run the command in the background and check the output until "Debugging Instructions" is printed. Make sure to stop the command after you have finished.

Once instructions containing a session name (e.g. `tw-XXXX`) appear, attach to the session:

```bash
# Attach to the paused test session
playwright-cli attach tw-XXXX

# Resume so the test runs to the failure point
playwright-cli resume
```
