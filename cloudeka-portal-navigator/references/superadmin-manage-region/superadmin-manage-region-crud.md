# Feature Name: Superadmin Manage Region

## Navigation Path
`Dashboard -> Superadmin-Manage-Region`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogCreateBox.vue`
  1. Fill input related to `nameBox` with dynamic data.
  2. Fill input related to `volumeBox` with dynamic data.
  3. Fill input related to `apiUrlBox` with dynamic data.
  4. Fill input related to `usernameBox` with dynamic data.
  5. Fill input related to `passwordUserBox` with dynamic data.
  6. Click button with selector: `text "Cancel
          
"`.
  - **Via component:** `dialogCreateSite.vue`
  7. Fill input related to `nameSite` with dynamic data.
  8. Fill input related to `s3UrlSite` with dynamic data.
  9. Fill input related to `typeSite` with dynamic data.
  - **Via component:** `dialogAddRegion.vue`
  10. Fill input related to ``input-${field.key}`` with dynamic data.
  11. Click button with selector: `text "Cancel
          
"`.
  - **Via component:** `dialogAddZone.vue`
  12. Fill input related to `nameZone` with dynamic data.
  13. Click button with selector: `text "Cancel
          
"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `listBox.vue`
  1. Click button with selector: `text "{
                i"`.
  - **Via component:** `listManagementSite.vue`
  2. Click button with selector: `text "{
                i"`.
  - **Via component:** `listFlexi.vue`
  3. Click button with selector: `text "{
                i"`.
  - **Via component:** `list-zone.vue`
  4. Click button with selector: `text "{
                i"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: read-success.png`).

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogDetailBox.vue`
  1. Fill input related to `nameBox` with dynamic data.
  2. Fill input related to `volumeBox` with dynamic data.
  3. Fill input related to `apiUrl` with dynamic data.
  4. Fill input related to `fullnameUser` with dynamic data.
  - **Via component:** `dialogDetailRegion.vue`
  5. Click button with selector: `text "Close"`.
  - **Via component:** `dialogDetail.vue`
  6. Click button with selector: `text "Close"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

