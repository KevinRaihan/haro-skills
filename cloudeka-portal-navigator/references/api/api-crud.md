# Feature Name: Api

## Navigation Path
`Dashboard -> Api`

## User Journeys (CRUD)

### 1. Create Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 2. Read / View Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `index.vue`
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: read-success.png`).

### 3. Update / Edit Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `deleteToken.vue`
  1. Fill input related to `passwordMember` with dynamic data.
  2. Click button with selector: `text "Cancel"`.
  3. Click button with selector: `text "Yes"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

