# Feature Name: Cdn

## Navigation Path
`Dashboard -> Cdn`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `CreateCdn.vue`
  1. Fill input related to `inputDomain` with dynamic data.
  2. Fill input related to `inputIpAddress` with dynamic data.
  3. Click button with selector: `text "Cancel"`.
  4. Click button with selector: `text "Submit"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `DetailCdn.vue`
  - **Via component:** `editor.vue`
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `deleteCdn.vue`
  1. Fill input related to `inputDomain` with dynamic data.
  2. Click button with selector: `text "mdi-close"`.
  3. Click button with selector: `text "I understand the con"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

