# Feature Name: Profile

## Navigation Path
`Dashboard -> Profile`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `create-ssh.vue`
  1. Fill input related to `name` with dynamic data.
  2. Click button with selector: `text "Cancel"`.
  3. Click button with selector: `text "Add"`.
  - **Via component:** `dialogCreateSsh.vue`
  4. Fill input related to `inputName` with dynamic data.
  5. Click button with selector: `text "Cancel"`.
  6. Click button with selector: `text "Submit"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `listSshUser.vue`
  1. Click button with selector: `text "Add SSH Key"`.
  2. Click button with selector: `text "{
                 "`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: read-success.png`).

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `edit-profile.vue`
  1. Fill input related to `fullnameProfile` with dynamic data.
  2. Fill input related to `phoneNumberProfile` with dynamic data.
  3. Fill input related to `emailProfile` with dynamic data.
  4. Click button with selector: `text "Cancel"`.
  5. Click button with selector: `text "Update Profile"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogDeleteSsh.vue`
  1. Fill input related to `inputName` with dynamic data.
  2. Click button with selector: `text "mdi-close"`.
  3. Click button with selector: `text "I understand the con"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

