# Feature Name: Guard

## Navigation Path
`Dashboard -> Guard`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `addException.vue`
  1. Fill input related to `inputLabel` with dynamic data.
  2. Click button with selector: `text "Add"`.
  - **Via component:** `addPort.vue`
  3. Fill input related to `inputPort` with dynamic data.
  4. Click button with selector: `text "Add"`.
  - **Via component:** `addSelector.vue`
  5. Fill input related to `inputLabel` with dynamic data.
  6. Click button with selector: `text "Add"`.
  - **Via component:** `addWithYaml.vue`
  7. Click button with selector: `text "Submit"`.
  - **Via component:** `createAllDeny.vue`
  8. Fill input related to `inputEndpointSelector` with dynamic data.
  9. Click button with selector: `text "mdi-plus
          "`.
  - **Via component:** `create.vue`
  10. Fill input related to `inputName` with dynamic data.
  11. Fill input related to `inputEndpointSelector` with dynamic data.
  12. Click button with selector: `text "mdi-plus
          "`.
  13. Click button with selector: `text "Delete"`.
  14. Click button with selector: `text "New Rule"`.
  15. Click button with selector: `text "Cancel"`.
  16. Click button with selector: `text "Submit"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `updateYaml.vue`
  1. Click button with selector: `text "Update"`.
  - **Via component:** `update.vue`
  2. Fill input related to `inputName` with dynamic data.
  3. Fill input related to `inputEndpointSelector` with dynamic data.
  4. Click button with selector: `text "mdi-plus
          "`.
  5. Click button with selector: `text "Delete"`.
  6. Click button with selector: `text "New Rule"`.
  7. Click button with selector: `text "Cancel"`.
  8. Click button with selector: `text "Submit"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `deleteConfirmGuard.vue`
  1. Fill input related to `inputName` with dynamic data.
  2. Click button with selector: `text "mdi-close"`.
  3. Click button with selector: `text "I understand the con"`.
  - **Via component:** `deleteGuard.vue`
  4. Click button with selector: `text "Cancel"`.
  5. Click button with selector: `text "Yes"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

