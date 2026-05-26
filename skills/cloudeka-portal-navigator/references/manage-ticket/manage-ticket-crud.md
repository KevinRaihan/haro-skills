# Feature Name: Manage Ticket

## Navigation Path
`Dashboard -> Manage-Ticket`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `createComment.vue`
  1. Click button with selector: `text "Cancel"`.
  2. Click button with selector: `text "Submit"`.
  - **Via component:** `createTicket.vue`
  3. Fill input related to `subjectTicketName` with dynamic data.
  4. Fill input related to `projectNameTicket` with dynamic data.
  5. Fill input related to `categoryTicketName` with dynamic data.
  6. Click button with selector: `text "Cancel"`.
  7. Click button with selector: `text "Submit"`.
  - **Via component:** `dialogAddAttachment.vue`
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `page.vue`
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: read-success.png`).

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `detailTicket.vue`
  1. Click button with selector: `text "Escalation
       -"`.
  2. Click button with selector: `text "{
                 "`.
  - **Via component:** `dialogDetailWorklogs.vue`
  3. Click button with selector: `text "Close"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

