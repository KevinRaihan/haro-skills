# Feature Name: Superadmin Manage User

## Navigation Path
`Dashboard -> Superadmin-Manage-User`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogAddUser.vue`
  1. Fill input related to `fullnameUser` with dynamic data.
  2. Fill input related to `phoneNumberUser` with dynamic data.
  3. Fill input related to `emailUser` with dynamic data.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogDetailUser.vue`
  1. Click button with selector: `text "Close"`.
  - **Via component:** `dialogEditMfa.vue`
  - **Via component:** `dialogEditUser.vue`
  2. Fill input related to `fullname` with dynamic data.
  3. Fill input related to `phone` with dynamic data.
  4. Fill input related to `email` with dynamic data.
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

