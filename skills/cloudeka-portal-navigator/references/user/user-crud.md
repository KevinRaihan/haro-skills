# Feature Name: User

## Navigation Path
`Dashboard -> User`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogAddUser.vue`
  1. Fill input related to `fullnameUser` with dynamic data.
  2. Fill input related to `emailUser` with dynamic data.
  3. Fill input related to `phoneNumberUser` with dynamic data.
  4. Click button with selector: `text "{
                 "`.
  5. Click button with selector: `text "{{ header == 'Add' ?"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `page.vue`
  1. Click button with selector: `text "{
                i"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: read-success.png`).

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogDetail.vue`
  1. Click button with selector: `text "Close"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

