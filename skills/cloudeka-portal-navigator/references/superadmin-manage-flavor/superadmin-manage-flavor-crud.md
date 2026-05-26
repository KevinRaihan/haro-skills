# Feature Name: Superadmin Manage Flavor

## Navigation Path
`Dashboard -> Superadmin-Manage-Flavor`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `create.vue`
  1. Fill input related to `inputName` with dynamic data.
  2. Fill input related to `inputVcpu` with dynamic data.
  3. Fill input related to `inputRam` with dynamic data.
  4. Fill input related to `inputGpu` with dynamic data.
  5. Click button with selector: `text "Cancel"`.
  6. Click button with selector: `text "Create"`.
  - **Via component:** `dialogCreate.vue`
  7. Fill input related to `inputName` with dynamic data.
  8. Click button with selector: `text "Cancel"`.
  9. Click button with selector: `text "Confirm"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogDetail.vue`
  1. Click button with selector: `text "Cancel"`.
  - **Via component:** `dialogEdit.vue`
  2. Fill input related to `inputName` with dynamic data.
  3. Fill input related to `inputVcpu` with dynamic data.
  4. Fill input related to `inputRam` with dynamic data.
  5. Fill input related to `inputGpu` with dynamic data.
  6. Click button with selector: `text "Cancel"`.
  7. Click button with selector: `text "Edit"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogDelete.vue`
  1. Fill input related to `inputName` with dynamic data.
  2. Click button with selector: `text "mdi-close"`.
  3. Click button with selector: `text "I understand the con"`.
  - **Via component:** `dialogDelete.vue`
  4. Fill input related to `inputName` with dynamic data.
  5. Click button with selector: `text "mdi-close"`.
  6. Click button with selector: `text "I understand the con"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

