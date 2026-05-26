# Feature Name: Kubernetes

## Navigation Path
`Dashboard -> Kubernetes`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogCreateMoreResource.vue`
  1. Click button with selector: `text "Submit"`.
  - **Via component:** `dialogCreate.vue`
  2. Click button with selector: `text "Submit"`.
  - **Via component:** `createService.vue`
  3. Fill input related to `nameCreateService` with dynamic data.
  4. Fill input related to `portsCreateService` with dynamic data.
  5. Click button with selector: `text "Cancel"`.
  6. Click button with selector: `text "Save"`.
  - **Via component:** `dialogCreateYaml.vue`
  7. Click button with selector: `text "Create"`.
  - **Via component:** `dialogCreate.vue`
  8. Click button with selector: `text "Submit"`.
  - **Via component:** `createStorage.vue`
  9. Fill input related to `nameCreateStorage` with dynamic data.
  10. Fill input related to `portsCreateStorage` with dynamic data.
  11. Click button with selector: `text "Cancel"`.
  12. Click button with selector: `text "Save"`.
  - **Via component:** `dialogCreateYaml.vue`
  13. Click button with selector: `text "Create"`.
  - **Via component:** `createDaemonSets.vue`
  14. Fill input related to `nameCreateDaemonSets` with dynamic data.
  15. Fill input related to `esiredCreateDaemonSets` with dynamic data.
  16. Fill input related to `currentCreateDaemonSets` with dynamic data.
  17. Fill input related to `ready` with dynamic data.
  18. Fill input related to `available` with dynamic data.
  19. Fill input related to `uptodateCreateDaemonSets` with dynamic data.
  20. Fill input related to `container` with dynamic data.
  21. Fill input related to `images` with dynamic data.
  22. Click button with selector: `text "Cancel"`.
  23. Click button with selector: `text "Save"`.
  - **Via component:** `createDeployments.vue`
  - **Via component:** `createPods.vue`
  - **Via component:** `createStatefulSets.vue`
  24. Fill input related to `nameCreateStatefulSets` with dynamic data.
  25. Fill input related to `readyCreateStatefulSets` with dynamic data.
  26. Fill input related to `containerCreateStatefulSets` with dynamic data.
  27. Fill input related to `imagesCreateStatefulSets` with dynamic data.
  28. Click button with selector: `text "Cancel"`.
  29. Click button with selector: `text "Save"`.
  - **Via component:** `dialogCreateYaml.vue`
  30. Click button with selector: `text "Create"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogErrorDetail.vue`
  1. Click button with selector: `text "Close"`.
  - **Via component:** `dialogUpdateYamlMoreResource.vue`
  2. Click button with selector: `text "Update"`.
  - **Via component:** `dialogErrorDetail.vue`
  3. Click button with selector: `text "Close"`.
  - **Via component:** `dialogUpdateYaml.vue`
  4. Click button with selector: `text "Update"`.
  - **Via component:** `dialogErrorDetail.vue`
  5. Click button with selector: `text "Close"`.
  - **Via component:** `dialogUpdateYaml.vue`
  6. Click button with selector: `text "Update"`.
  - **Via component:** `dialogUpdateYamlCluster.vue`
  7. Click button with selector: `text "Update"`.
  - **Via component:** `detailPv.vue`
  - **Via component:** `detailPvc.vue`
  - **Via component:** `dialogErrorDetail.vue`
  8. Click button with selector: `text "Close"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `deleteMoreResource.vue`
  1. Click button with selector: `text "Cancel"`.
  2. Click button with selector: `text "Yes"`.
  - **Via component:** `dialogDeleteConfirmMore.vue`
  3. Fill input related to `inputName` with dynamic data.
  4. Click button with selector: `text "mdi-close"`.
  5. Click button with selector: `text "I understand the con"`.
  - **Via component:** `deleteResource.vue`
  6. Click button with selector: `text "Cancel"`.
  7. Click button with selector: `text "Yes"`.
  - **Via component:** `dialogDeleteConfirm.vue`
  8. Fill input related to `inputName` with dynamic data.
  9. Click button with selector: `text "mdi-close"`.
  10. Click button with selector: `text "I understand the con"`.
  - **Via component:** `deleteService.vue`
  11. Click button with selector: `text "Cancel"`.
  12. Click button with selector: `text "Yes"`.
  - **Via component:** `deleteServices.vue`
  13. Click button with selector: `text "Cancel"`.
  14. Click button with selector: `text "Yes"`.
  - **Via component:** `dialogDeleteConfirm.vue`
  15. Fill input related to `inputName` with dynamic data.
  16. Click button with selector: `text "mdi-close"`.
  17. Click button with selector: `text "Delete this {{ modul"`.
  - **Via component:** `dialogDeleteConfirmCluster.vue`
  18. Fill input related to `inputName` with dynamic data.
  19. Click button with selector: `text "mdi-close"`.
  20. Click button with selector: `text "Delete this {{ modul"`.
  - **Via component:** `deleteStorage.vue`
  21. Click button with selector: `text "Cancel"`.
  22. Click button with selector: `text "Yes"`.
  - **Via component:** `deleteConfirmDaemonSets.vue`
  23. Fill input related to `inputName` with dynamic data.
  24. Click button with selector: `text "mdi-close"`.
  25. Click button with selector: `text "I understand the con"`.
  - **Via component:** `deleteConfirmDeployments.vue`
  26. Fill input related to `inputName` with dynamic data.
  27. Click button with selector: `text "mdi-close"`.
  28. Click button with selector: `text "I understand the con"`.
  - **Via component:** `deleteConfirmPods.vue`
  29. Fill input related to `inputName` with dynamic data.
  30. Click button with selector: `text "mdi-close"`.
  31. Click button with selector: `text "I understand the con"`.
  - **Via component:** `deleteConfirmStatefulSets.vue`
  32. Fill input related to `inputName` with dynamic data.
  33. Click button with selector: `text "mdi-close"`.
  34. Click button with selector: `text "I understand the con"`.
  - **Via component:** `deleteDaemonSets.vue`
  35. Click button with selector: `text "Cancel"`.
  36. Click button with selector: `text "Yes"`.
  - **Via component:** `deleteDeployments.vue`
  37. Click button with selector: `text "Cancel"`.
  38. Click button with selector: `text "Yes"`.
  - **Via component:** `deletePods.vue`
  39. Click button with selector: `text "Cancel"`.
  40. Click button with selector: `text "Yes"`.
  - **Via component:** `deleteStatefulSets.vue`
  41. Click button with selector: `text "Cancel"`.
  42. Click button with selector: `text "Yes"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

