# Request Mocking

Intercept, mock, modify, and block network requests.

## CLI Route Commands

```bash
# Mock with custom status
playwright-cli route "**/*.jpg" --status=404

# Mock with JSON body
playwright-cli route "**/api/users" --body='[{"id":1,"name":"Alice"}]' --content-type=application/json

# Mock with custom headers
playwright-cli route "**/api/data" --body='{"ok":true}' --header="X-Custom: value"

# Remove headers from requests
playwright-cli route "**/*" --remove-header=cookie,authorization

# List active routes
playwright-cli route-list

# Remove a route or all routes
playwright-cli unroute "**/*.jpg"
playwright-cli unroute
```

## URL Patterns

```
**/api/users           - Exact path match
**/api/*/details       - Wildcard in path
**/*.{png,jpg,jpeg}    - Match file extensions
**/search?q=*          - Match query parameters
```

## Advanced Mocking with run-code

For conditional routing logic, use `run-code`:

```bash
playwright-cli run-code "async page => {
  await page.route('**/api/users', route => {
    const request = route.request();
    if (request.method() === 'POST') {
      route.fulfill({ status: 201, body: JSON.stringify({ id: 99 }) });
    } else {
      route.continue();
    }
  });
}"
```
