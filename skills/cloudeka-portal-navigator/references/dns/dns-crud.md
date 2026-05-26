# Feature Name: Dns

## Navigation Path
`Dashboard -> Dns`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `createDns.vue`
  1. Fill input related to `inputSite` with dynamic data.
  2. Click button with selector: `text "{
              // "`.
  3. Click button with selector: `text "mdi-content-save-out"`.
  - **Via component:** `addRecord.vue`
  4. Fill input related to `nameRecord` with dynamic data.
  5. Fill input related to `contentRecord` with dynamic data.
  6. Fill input related to `ttlRecord` with dynamic data.
  7. Click button with selector: `text "{
              // "`.
  8. Click button with selector: `text "Save"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `listDns.vue`
  1. Fill input related to `searchDns` with dynamic data.
  2. Fill input related to `inputSite` with dynamic data.
  3. Click button with selector: `text "{
                 "`.
  4. Click button with selector: `text "mdi-dots-vertical"`.
  5. Click button with selector: `text "Add Site"`.
  - **Via component:** `table-nameservers.vue`
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: read-success.png`).

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `editRecordMobile.vue`
  1. Fill input related to `dataItem.name` with dynamic data.
  2. Fill input related to `dataItem.content` with dynamic data.
  3. Click button with selector: `text "Delete"`.
  4. Click button with selector: `text "{
                 "`.
  5. Click button with selector: `text "Save"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

