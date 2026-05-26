# Feature Name: Project

## Navigation Path
`Dashboard -> Project`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `add-member.vue`
  1. Click button with selector: `text "Cancel"`.
  2. Click button with selector: `text "Create"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `page.vue`
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: read-success.png`).

### 3. Update / Edit Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 4. Delete Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

