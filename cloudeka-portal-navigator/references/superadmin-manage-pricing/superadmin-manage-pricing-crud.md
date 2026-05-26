# Feature Name: Superadmin Manage Pricing

## Navigation Path
`Dashboard -> Superadmin-Manage-Pricing`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `create.vue`
  1. Fill input related to `nameItem` with dynamic data.
  2. Fill input related to `descriptionItem` with dynamic data.
  3. Fill input related to `sizeItem` with dynamic data.
  4. Fill input related to `pricePerMonthItem` with dynamic data.
  5. Fill input related to `pricePerHourItem` with dynamic data.
  6. Click button with selector: `text "Add
            
 "`.
  - **Via component:** `add.vue`
  7. Fill input related to `nameProduct` with dynamic data.
  8. Fill input related to `productCode` with dynamic data.
  9. Click button with selector: `text "Cancel"`.
  10. Click button with selector: `text "{{ props.header == '"`.
  - **Via component:** `addTagsService.vue`
  11. Fill input related to `pricePerMonthTags` with dynamic data.
  12. Fill input related to `pricePerHourTags` with dynamic data.
  13. Click button with selector: `text "Cancel"`.
  14. Click button with selector: `text "Create"`.
  - **Via component:** `create.vue`
  15. Fill input related to `nameService` with dynamic data.
  16. Fill input related to `descriptionService` with dynamic data.
  17. Click button with selector: `text "{
                 "`.
  - **Via component:** `add.vue`
  18. Fill input related to `nameTags` with dynamic data.
  19. Fill input related to `unitTags` with dynamic data.
  20. Click button with selector: `text "Cancel"`.
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
  - **Via component:** `dialog-detail.vue`
  1. Click button with selector: `text "Close"`.
  - **Via component:** `edit.vue`
  2. Fill input related to `name` with dynamic data.
  3. Fill input related to `size` with dynamic data.
  4. Fill input related to `pricePerMonth` with dynamic data.
  5. Fill input related to `pricePerHour` with dynamic data.
  6. Click button with selector: `text "Add
            
 "`.
  - **Via component:** `detail.vue`
  7. Click button with selector: `text "{
                 "`.
  - **Via component:** `detailService.vue`
  8. Click button with selector: `text "Back"`.
  - **Via component:** `edit.vue`
  9. Fill input related to `nameService` with dynamic data.
  10. Fill input related to `descriptionService` with dynamic data.
  11. Click button with selector: `text "{
                 "`.
  - **Via component:** `editTagsService.vue`
  12. Fill input related to `pricePerMonthTags` with dynamic data.
  13. Fill input related to `pricePerHourTags` with dynamic data.
  14. Click button with selector: `text "Cancel"`.
  15. Click button with selector: `text "Create"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialog-delete.vue`
  1. Fill input related to `inputProduct` with dynamic data.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

