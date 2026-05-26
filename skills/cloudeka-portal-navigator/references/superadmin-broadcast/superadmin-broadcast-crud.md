# Feature Name: Superadmin Broadcast

## Navigation Path
`Dashboard -> Superadmin-Broadcast`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `addBroadcast.vue`
  1. Fill input related to `titleBroadcast` with dynamic data.
  2. Click button with selector: `text "Cancel"`.
  3. Click button with selector: `text "{{ route.name == "Ed"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `detailBroadcast.vue`
  1. Click button with selector: `text "Back"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogDelete.vue`
  1. Click button with selector: `text "Cancel"`.
  2. Click button with selector: `text "Yes"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

