# Feature Name: Organization

## Navigation Path
`Dashboard -> Organization`

## User Journeys (CRUD)

### 1. Create Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 2. Read / View Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogEditOrg.vue`
  1. Fill input related to `nameOrg` with dynamic data.
  2. Fill input related to `bussinessphone` with dynamic data.
  3. Fill input related to `city` with dynamic data.
  4. Fill input related to `region` with dynamic data.
  5. Fill input related to `zip` with dynamic data.
  6. Fill input related to `npwpNameOrg` with dynamic data.
  7. Fill input related to `npwpNumberOrg` with dynamic data.
  8. Fill input related to `nitkuOrg` with dynamic data.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

