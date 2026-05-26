# Feature Name: Superadmin Manage Package

## Navigation Path
`Dashboard -> Superadmin-Manage-Package`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `addOns.vue`
  1. Fill input related to `search` with dynamic data.
  2. Click button with selector: `text "{
                 "`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogDetail.vue`
  1. Click button with selector: `text "Close"`.
  - **Via component:** `dialogEditDefaultPackage.vue`
  2. Fill input related to `packageName` with dynamic data.
  3. Fill input related to `quotaDefault` with dynamic data.
  4. Fill input related to `priceDefault` with dynamic data.
  5. Click button with selector: `text "Cancel"`.
  6. Click button with selector: `text "Confirm"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogDeletePackage.vue`
  1. Click button with selector: `text "Cancel"`.
  2. Click button with selector: `text "Yes"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

