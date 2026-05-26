# Feature Name: Superadmin Manage Org

## Navigation Path
`Dashboard -> Superadmin-Manage-Org`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogAddOrg.vue`
  1. Fill input related to `nameOrg` with dynamic data.
  2. Fill input related to `city` with dynamic data.
  3. Fill input related to `region` with dynamic data.
  4. Fill input related to `zip` with dynamic data.
  5. Fill input related to `bussinessphone` with dynamic data.
  6. Fill input related to `fullname` with dynamic data.
  7. Fill input related to `personalphone` with dynamic data.
  8. Fill input related to `email` with dynamic data.
  9. Fill input related to `noNpwpOrg` with dynamic data.
  10. Fill input related to `nameNpwpOrg` with dynamic data.
  11. Fill input related to `nitkuOrg` with dynamic data.
  - **Via component:** `dialogCreateRafayCluster.vue`
  12. Click button with selector: `text "Cancel"`.
  13. Click button with selector: `text "Confirm"`.
  - **Via component:** `dialogCreateWaiver.vue`
  14. Click button with selector: `text "Close"`.
  15. Click button with selector: `text "Create Waiver"`.
  - **Via component:** `addProject.vue`
  16. Fill input related to `projectname` with dynamic data.
  17. Fill input related to `fixed_billing_price_per_month` with dynamic data.
  18. Fill input related to `networkNumber` with dynamic data.
  19. Fill input related to `vatid` with dynamic data.
  20. Fill input related to `vatname` with dynamic data.
  21. Fill input related to `vataddress` with dynamic data.
  22. Fill input related to `invoice_due_periode_per_day` with dynamic data.
  23. Click button with selector: `text "mdi-plus"`.
  24. Click button with selector: `text "{
                 "`.
  25. Click button with selector: `text "Cancel"`.
  26. Click button with selector: `text "{{
              ro"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `page.vue`
  - **Via component:** `listProject.vue`
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: read-success.png`).

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `detail.vue`
  - **Via component:** `detailOrg.vue`
  1. Fill input related to `tagKeyword` with dynamic data.
  2. Click button with selector: `text "{}">
              "`.
  3. Click button with selector: `text "{
                 "`.
  4. Click button with selector: `text "mdi-tag-plus"`.
  5. Click button with selector: `text "{{
                "`.
  6. Click button with selector: `text "Edit tags"`.
  7. Click button with selector: `text "{

               "`.
  - **Via component:** `dialogEditOrgQuotas.vue`
  8. Fill input related to `limits_cpu` with dynamic data.
  9. Fill input related to `limits_memory` with dynamic data.
  10. Fill input related to `nvidia_com_gpu` with dynamic data.
  11. Fill input related to `limits_storage` with dynamic data.
  12. Fill input related to `requests_storage` with dynamic data.
  - **Via component:** `dialogEditQuotas.vue`
  13. Click button with selector: `text "0"  
          colo"`.
  14. Click button with selector: `text "{
                 "`.
  - **Via component:** `infoDetailOrg.vue`
  - **Via component:** `dialogDetail.vue`
  15. Fill input related to `tagKeyword` with dynamic data.
  16. Click button with selector: `text "mdi-tag-plus"`.
  17. Click button with selector: `text "{{
                "`.
  18. Click button with selector: `text "Edit tags"`.
  19. Click button with selector: `text "Back"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogDeleteOrg.vue`
  1. Click button with selector: `text "Cancel"`.
  2. Click button with selector: `text "Delete Organization"`.
  - **Via component:** `dialogErrorDelete.vue`
  3. Click button with selector: `text "Ok"`.
  - **Via component:** `dialogDeleteProj.vue`
  4. Click button with selector: `text "{
                 "`.
  - **Via component:** `dialogErrorDelete.vue`
  5. Click button with selector: `text "{
                 "`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

