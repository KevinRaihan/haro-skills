# Feature Name: Superadmin Manage Image

## Navigation Path
`Dashboard -> Superadmin-Manage-Image`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogCreateNewType.vue`
  1. Fill input related to `inputName` with dynamic data.
  2. Fill input related to `inputPrice` with dynamic data.
  3. Click button with selector: `text "mdi-close"`.
  4. Click button with selector: `text "Cancel
            "`.
  - **Via component:** `dialogCreateNewVersion.vue`
  5. Fill input related to `inputVersionNumber` with dynamic data.
  6. Fill input related to `inputImportUrl` with dynamic data.
  7. Click button with selector: `text "mdi-close"`.
  8. Click button with selector: `text "{
                 "`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 3. Update / Edit Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogDelete.vue`
  1. Fill input related to `inputName` with dynamic data.
  2. Click button with selector: `text "mdi-close"`.
  3. Click button with selector: `text "I understand the con"`.
  - **Via component:** `dialogDeleteType.vue`
  4. Fill input related to `inputName` with dynamic data.
  5. Click button with selector: `text "mdi-close"`.
  6. Click button with selector: `text "I understand the con"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

