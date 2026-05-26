# Feature Name: Balance

## Navigation Path
`Dashboard -> Balance`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `ResponseAddPakage.vue`
  1. Click button with selector: `text "Back Home"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `detailProduct.vue`
  1. Fill input related to `'sizeGpu' + i` with dynamic data.
  2. Fill input related to `'sizeStorage' + i` with dynamic data.
  3. Fill input related to `floatingIpInput` with dynamic data.
  4. Fill input related to `inputFlavorDekaFlexi` with dynamic data.
  5. Fill input related to `'sizeStorageDekaFlexi' + i` with dynamic data.
  6. Fill input related to `'sizeFloatingIpDekaFlexi' + i` with dynamic data.
  7. Fill input related to `'sizeSnapshotDekaFlexi' + i` with dynamic data.
  8. Click button with selector: `text "Prev"`.
  9. Click button with selector: `text "Next"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

