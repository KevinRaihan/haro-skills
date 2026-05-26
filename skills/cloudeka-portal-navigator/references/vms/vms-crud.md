# Feature Name: Vms

## Navigation Path
`Dashboard -> Vms`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `createVM.vue`
  - **Via component:** `createWithYaml.vue`
  1. Click button with selector: `text "Create"`.
  - **Via component:** `dialogDeniedCreate.vue`
  2. Click button with selector: `text "{
                 "`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `listVm.vue`
  1. Click button with selector: `text "{
                 "`.
  - **Via component:** `page.vue`
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: read-success.png`).

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `detailVM.vue`
  1. Click button with selector: `text "{
                 "`.
  - **Via component:** `dialogConfirmUpdate.vue`
  2. Fill input related to `inputName` with dynamic data.
  3. Click button with selector: `text "mdi-close"`.
  4. Click button with selector: `text "Confirm"`.
  - **Via component:** `dialogUpdateVmYaml.vue`
  5. Click button with selector: `text "Update"`.
  - **Via component:** `details.vue`
  6. Fill input related to `nameVM` with dynamic data.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogDelete.vue`
  1. Click button with selector: `text "Cancel"`.
  2. Click button with selector: `text "Yes"`.
  - **Via component:** `dialogDeleteConfirm.vue`
  3. Fill input related to `inputName` with dynamic data.
  4. Click button with selector: `text "mdi-close"`.
  5. Click button with selector: `text "I understand the con"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

