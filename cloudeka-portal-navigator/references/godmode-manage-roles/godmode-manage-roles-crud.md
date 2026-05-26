# Feature Name: Godmode Manage Roles

## Navigation Path
`Dashboard -> Godmode-Manage-Roles`

## User Journeys (CRUD)

### 1. Create Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 2. Read / View Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `detail.vue`
  1. Fill input related to `name` with dynamic data.
  2. Fill input related to `admin_member_search` with dynamic data.
  3. Click button with selector: `text "Cancel
            "`.
  4. Click button with selector: `text "mdi-plus"`.
  5. Click button with selector: `text "remove"`.
  6. Click button with selector: `text "mdi-close"`.
  7. Click button with selector: `text "Assign"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

