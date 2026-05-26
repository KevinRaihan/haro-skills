# Feature Name: Role Permission

## Navigation Path
`Dashboard -> Role-Permission`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `createEdit.vue`
  1. Fill input related to `nameRole` with dynamic data.
  - **Via component:** `detail_or_create.vue`
  2. Fill input related to `nameRole` with dynamic data.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `list.vue`
  1. Fill input related to `searchRole` with dynamic data.
  2. Click button with selector: `text "{
                 "`.
  - **Via component:** `listRole.vue`
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: read-success.png`).

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `detail.vue`
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

