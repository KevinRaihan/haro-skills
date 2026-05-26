# Feature Name: Deka Flexi

## Navigation Path
`Dashboard -> Deka-Flexi`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `create.vue`
  - **Via component:** `dialogCreateCluster.vue`
  1. Click button with selector: `text "Cancel"`.
  2. Click button with selector: `text "{
                i"`.
  - **Via component:** `dialogCreateSsh.vue`
  3. Fill input related to `inputName` with dynamic data.
  4. Click button with selector: `text "Cancel"`.
  5. Click button with selector: `text "{{ status == "create"`.
  - **Via component:** `dialogIpAddress.vue`
  6. Click button with selector: `text "Close"`.
  - **Via component:** `create-fip.vue`
  7. Click button with selector: `text "Cancel"`.
  8. Click button with selector: `text "Create"`.
  - **Via component:** `create-nat.vue`
  9. Fill input related to `tPort` with dynamic data.
  10. Fill input related to `dPort` with dynamic data.
  11. Fill input related to `ruleDesc` with dynamic data.
  12. Click button with selector: `text "Cancel"`.
  13. Click button with selector: `text "Create"`.
  - **Via component:** `create-sr.vue`
  14. Fill input related to `ip` with dynamic data.
  15. Fill input related to `networkSize` with dynamic data.
  16. Fill input related to `nexthop` with dynamic data.
  17. Click button with selector: `text "Cancel"`.
  18. Click button with selector: `text "Create"`.
  - **Via component:** `create-expert.vue`
  19. Fill input related to `name` with dynamic data.
  20. Fill input related to `ip` with dynamic data.
  21. Fill input related to `prefix` with dynamic data.
  22. Click button with selector: `text "Create NAT Gateway"`.
  - **Via component:** `create-simple.vue`
  23. Fill input related to `inputName` with dynamic data.
  24. Fill input related to `nameEdit` with dynamic data.
  25. Fill input related to `ipPrefix` with dynamic data.
  26. Fill input related to `networkSize` with dynamic data.
  27. Click button with selector: `text "{{ isEdit ? "Cancel""`.
  28. Click button with selector: `text "{{ vpcedit ? "Save" "`.
  - **Via component:** `create.vue`
  - **Via component:** `dialog-add-port.vue`
  29. Fill input related to `inputPortName` with dynamic data.
  30. Fill input related to `inputIpAddress` with dynamic data.
  31. Fill input related to `inputMacAddress` with dynamic data.
  32. Click button with selector: `text "Cancel"`.
  33. Click button with selector: `text "{{ editMode ? "Updat"`.
  - **Via component:** `dialog-add-subnet.vue`
  34. Fill input related to `inputSubnetName` with dynamic data.
  35. Fill input related to `ipAddress` with dynamic data.
  36. Click button with selector: `text "mdi-plus"`.
  37. Click button with selector: `text "Cancel"`.
  38. Click button with selector: `text "{{ editMode ? "Updat"`.
  - **Via component:** `create.vue`
  39. Fill input related to `inputName` with dynamic data.
  40. Fill input related to `item.protocol` with dynamic data.
  41. Fill input related to `item.port_range_min` with dynamic data.
  42. Fill input related to `item.port_range_max` with dynamic data.
  43. Fill input related to `item.sources` with dynamic data.
  44. Fill input related to `item.description` with dynamic data.
  45. Click button with selector: `text "New Rule"`.
  46. Click button with selector: `text "Delete"`.
  47. Click button with selector: `text "Cancel"`.
  48. Click button with selector: `text "Create"`.
  - **Via component:** `create.vue`
  49. Fill input related to `TypeFromSource` with dynamic data.
  50. Fill input related to `sizeVolume` with dynamic data.
  51. Fill input related to `inputNameVolume` with dynamic data.
  52. Click button with selector: `text "Cancel"`.
  53. Click button with selector: `text "Create"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `list-result.vue`
  - **Via component:** `list-scheduler.vue`
  - **Via component:** `list-instance-ss.vue`
  - **Via component:** `list-storage-ss.vue`
  - **Via component:** `list-fip.vue`
  - **Via component:** `list-fip.vue`
  - **Via component:** `list-nat.vue`
  - **Via component:** `list-sr.vue`
  - **Via component:** `list-nat.vue`
  - **Via component:** `list-port.vue`
  1. Click button with selector: `text "{
                 "`.
  - **Via component:** `list-subnet.vue`
  2. Click button with selector: `text "{
                 "`.
  - **Via component:** `list-vpc.vue`
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: read-success.png`).

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `detail-claw.vue`
  - **Via component:** `detail.vue`
  - **Via component:** `details.vue`
  1. Fill input related to `instanceName` with dynamic data.
  2. Click button with selector: `text "Next"`.
  - **Via component:** `detail.vue`
  - **Via component:** `dialogDetail.vue`
  3. Click button with selector: `text "Cancel"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogDelete.vue`
  1. Fill input related to `inputName` with dynamic data.
  2. Click button with selector: `text "mdi-close"`.
  3. Click button with selector: `text "I understand the con"`.
  - **Via component:** `dialogDeleteSsh.vue`
  4. Click button with selector: `text "Cancel
            "`.
  - **Via component:** `delete.vue`
  5. Click button with selector: `text "Delete this Instance"`.
  - **Via component:** `dialogDelete.vue`
  6. Fill input related to `inputName` with dynamic data.
  7. Click button with selector: `text "mdi-close"`.
  8. Click button with selector: `text "I understand the con"`.
  - **Via component:** `dialogDelete.vue`
  9. Fill input related to `inputName` with dynamic data.
  10. Click button with selector: `text "mdi-close"`.
  11. Click button with selector: `text "I understand the con"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

