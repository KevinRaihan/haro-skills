# Feature Name: Backup

## Navigation Path
`Dashboard -> Backup`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `createBackup.vue`
  1. Fill input related to `inputBackupName` with dynamic data.
  2. Fill input related to `inputRetention` with dynamic data.
  3. Click button with selector: `text "Cancel"`.
  4. Click button with selector: `text "Submit"`.
  - **Via component:** `createRestore.vue`
  5. Click button with selector: `text "Cancel"`.
  6. Click button with selector: `text "Submit"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `listBackup.vue`
  1. Click button with selector: `text "{
                /"`.
  2. Click button with selector: `text "{
                 "`.
  - **Via component:** `listLocation.vue`
  - **Via component:** `listRestore.vue`
  3. Click button with selector: `text "{
                /"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: read-success.png`).

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `detailBackup.vue`
  1. Click button with selector: `text "Close"`.
  - **Via component:** `detailOfBackup.vue`
  2. Click button with selector: `text "Cancel"`.
  3. Click button with selector: `text "Yes"`.
  - **Via component:** `details.vue`
  - **Via component:** `dialogDetail.vue`
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

