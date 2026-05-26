# Feature Name: Deka Box

## Navigation Path
`Dashboard -> Deka-Box`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `create-box.vue`
  1. Fill input related to `sizeVolume` with dynamic data.
  2. Fill input related to `ChooseUniqueName` with dynamic data.
  3. Click button with selector: `text "Cancel
        
  "`.
  - **Via component:** `dialogAddBucket.vue`
  4. Fill input related to `name` with dynamic data.
  5. Fill input related to `selectedRegion` with dynamic data.
  6. Click button with selector: `text "Cancel"`.
  7. Click button with selector: `text "Confirm"`.
  - **Via component:** `dialogCreateAccessKey.vue`
  8. Fill input related to `accessKeyName` with dynamic data.
  9. Fill input related to `expiresDate` with dynamic data.
  10. Fill input related to `expiresTime` with dynamic data.
  11. Click button with selector: `text "Cancel"`.
  12. Click button with selector: `text "Confirm"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `listBox.vue`
  1. Click button with selector: `text "{
                /"`.
  - **Via component:** `page.vue`
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: read-success.png`).

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `box-detail.vue`
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogDeleteBucket.vue`
  1. Fill input related to `deleteType` with dynamic data.
  2. Click button with selector: `text "mdi-close"`.
  3. Click button with selector: `text "I understand the con"`.
  - **Via component:** `dialogDeleteAccessKey.vue`
  4. Click button with selector: `text "Cancel"`.
  5. Click button with selector: `text "Delete"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

