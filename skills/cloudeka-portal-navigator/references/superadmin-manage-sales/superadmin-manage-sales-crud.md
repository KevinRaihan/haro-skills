# Feature Name: Superadmin Manage Sales

## Navigation Path
`Dashboard -> Superadmin-Manage-Sales`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogCreate.vue`
  1. Fill input related to `fullnameSales` with dynamic data.
  2. Fill input related to `phoneNumberSales` with dynamic data.
  3. Fill input related to `emailSales` with dynamic data.
  4. Click button with selector: `text "Cancel"`.
  5. Click button with selector: `text "{{ header == "Create"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogDetail.vue`
  1. Click button with selector: `text "Close"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

