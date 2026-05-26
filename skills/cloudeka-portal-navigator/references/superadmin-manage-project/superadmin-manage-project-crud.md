# Feature Name: Superadmin Manage Project

## Navigation Path
`Dashboard -> Superadmin-Manage-Project`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `createProject.vue`
  1. Fill input related to `nameProject` with dynamic data.
  2. Fill input related to `priceFixedPostpaidProject` with dynamic data.
  3. Fill input related to `networkNumber` with dynamic data.
  4. Fill input related to `vatidProject` with dynamic data.
  5. Fill input related to `vatnameProject` with dynamic data.
  6. Fill input related to `vataddressProject` with dynamic data.
  7. Fill input related to `periodeProject` with dynamic data.
  8. Click button with selector: `text "mdi-plus"`.
  9. Click button with selector: `text "{
                 "`.
  10. Click button with selector: `text "Cancel"`.
  11. Click button with selector: `text "{
                i"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `page.vue`
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: read-success.png`).

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `detailProject.vue`
  1. Click button with selector: `text "Setting Project"`.
  - **Via component:** `dialogDetail.vue`
  2. Fill input related to `tagKeyword` with dynamic data.
  3. Click button with selector: `text "mdi-tag-plus"`.
  4. Click button with selector: `text "{{
                "`.
  5. Click button with selector: `text "Edit tags"`.
  6. Click button with selector: `text "Close"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogConfirmDelete.vue`
  1. Fill input related to `inputName` with dynamic data.
  2. Click button with selector: `text "mdi-close"`.
  - **Via component:** `dialogDelete.vue`
  3. Click button with selector: `text "Cancel"`.
  4. Click button with selector: `text "Yes"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

