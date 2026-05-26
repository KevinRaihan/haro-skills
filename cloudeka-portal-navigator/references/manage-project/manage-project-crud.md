# Feature Name: Manage Project

## Navigation Path
`Dashboard -> Manage-Project`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `create-project.vue`
  1. Fill input related to `nameProject` with dynamic data.
  2. Fill input related to `vatidProject` with dynamic data.
  3. Fill input related to `vatnameProject` with dynamic data.
  4. Fill input related to `vataddressProject` with dynamic data.
  5. Click button with selector: `text "Cancel"`.
  6. Click button with selector: `text "Create Project"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `page.vue`
  - **Via component:** `list.vue`
  1. Click button with selector: `text "{
                 "`.
  2. Click button with selector: `text "{{ projectStatus(ite"`.
  3. Click button with selector: `text "{{ item.raw?.vcluste"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: read-success.png`).

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `detail-project.vue`
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `DeleteProjectDialog.vue`
  1. Click button with selector: `text "Cancel"`.
  2. Click button with selector: `text "{
                 "`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

