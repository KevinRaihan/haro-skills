# Feature Name: Registry

## Navigation Path
`Dashboard -> Registry`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `create.vue`
  1. Fill input related to `nameRepository` with dynamic data.
  2. Fill input related to `storageSizeRepository` with dynamic data.
  3. Click button with selector: `text "Cancel"`.
  4. Click button with selector: `text "Next"`.
  - **Via component:** `add-user.vue`
  5. Click button with selector: `text "Cancel"`.
  6. Click button with selector: `text "Confirm"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `list.vue`
  1. Click button with selector: `text "{copy(item.pull_comm"`.
  2. Click button with selector: `text "{copy(tag.pull_comma"`.
  3. Click button with selector: `text "Close"`.
  - **Via component:** `index.vue`
  - **Via component:** `list.vue`
  4. Fill input related to `search` with dynamic data.
  - **Via component:** `list.vue`
  5. Fill input related to `searchRegistry` with dynamic data.
  6. Click button with selector: `text "{
                 "`.
  - **Via component:** `index.vue`
  7. Click button with selector: `text "{router.push({
    "`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: read-success.png`).

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `artifactDetail.vue`
  - **Via component:** `helmDetail.vue`
  1. Click button with selector: `text "Download Chart"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

