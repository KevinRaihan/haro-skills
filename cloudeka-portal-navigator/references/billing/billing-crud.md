# Feature Name: Billing

## Navigation Path
`Dashboard -> Billing`

## User Journeys (CRUD)

### 1. Create Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 2. Read / View Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `TablePostpaid.vue`
  - **Via component:** `TablePrepaid.vue`
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: read-success.png`).

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogDetail.vue`
  1. Click button with selector: `text "mdi-close"`.
  - **Via component:** `PostpaidDetail.vue`
  - **Via component:** `PrepaidDetail.vue`
  - **Via component:** `BillingDetailType.vue`
  - **Via component:** `BillingHistoryDetail.vue`
  - **Via component:** `BillingHistoryDetailSummary.vue`
  - **Via component:** `SummaryMonthlyDetail.vue`
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

