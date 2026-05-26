# Feature Name: Manage Superadmin

## Navigation Path
`Dashboard -> Manage-Superadmin`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogAddUser.vue`
  1. Fill input related to `name` with dynamic data.
  2. Fill input related to `phone` with dynamic data.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogProjectList.vue`
  1. Click button with selector: `text "{
                 "`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: read-success.png`).

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogDetailUser.vue`
  1. Click button with selector: `text "Close"`.
  - **Via component:** `dialogEditUser.vue`
  2. Fill input related to `name` with dynamic data.
  3. Fill input related to `phone` with dynamic data.
  4. Click button with selector: `text "Cancel"`.
  5. Click button with selector: `text "Update"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogDeleteUser.vue`
  1. Click button with selector: `text "Cancel"`.
  2. Click button with selector: `text "{
                 "`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

