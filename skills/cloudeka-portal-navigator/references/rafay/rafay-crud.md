# Feature Name: Rafay

## Navigation Path
`Dashboard -> Rafay`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `createBareMetal.vue`
  1. Fill input related to `nameBareMetal` with dynamic data.
  2. Click button with selector: `text "Cancel"`.
  3. Click button with selector: `text "Submit"`.
  - **Via component:** `createCompute.vue`
  4. Fill input related to `inputTeam` with dynamic data.
  5. Click button with selector: `text "Cancel"`.
  6. Click button with selector: `text "Submit"`.
  - **Via component:** `createLlm.vue`
  7. Fill input related to `llmName` with dynamic data.
  8. Fill input related to `cpuLimits` with dynamic data.
  9. Fill input related to `memoryLimits` with dynamic data.
  10. Fill input related to `memoryRequests` with dynamic data.
  11. Click button with selector: `text "Cancel"`.
  12. Click button with selector: `text "Submit"`.
  - **Via component:** `createNotebook.vue`
  13. Fill input related to `notebookName` with dynamic data.
  14. Click button with selector: `text "Cancel"`.
  15. Click button with selector: `text "Submit"`.
  - **Via component:** `createService.vue`
  16. Fill input related to `inputTeam` with dynamic data.
  17. Click button with selector: `text "Cancel"`.
  18. Click button with selector: `text "Submit"`.
  - **Via component:** `createVcluster.vue`
  19. Fill input related to `nameVcluster` with dynamic data.
  20. Fill input related to `vclusterName` with dynamic data.
  21. Fill input related to `namespace` with dynamic data.
  22. Click button with selector: `text "Cancel"`.
  23. Click button with selector: `text "{{ route.params.vclu"`.
  - **Via component:** `createVM.vue`
  24. Fill input related to `inputTeam` with dynamic data.
  25. Fill input related to `inputGPUCount` with dynamic data.
  26. Fill input related to `inputHostNamespace` with dynamic data.
  27. Fill input related to `inputvClusterNamespace` with dynamic data.
  28. Fill input related to `inputvClusterName` with dynamic data.
  29. Fill input related to `inputHostClusterName` with dynamic data.
  30. Fill input related to `inputNodeSelector` with dynamic data.
  31. Fill input related to `inputTargetPort` with dynamic data.
  32. Fill input related to `inputServicePort` with dynamic data.
  33. Fill input related to `inputServiceType` with dynamic data.
  34. Fill input related to `inputVMBootSize` with dynamic data.
  35. Fill input related to `inputVMCpuCount` with dynamic data.
  36. Fill input related to `inputSSHPublicKey` with dynamic data.
  37. Fill input related to `inputVMMemorySize` with dynamic data.
  38. Fill input related to `inputVMPassword` with dynamic data.
  39. Fill input related to `inputVMName` with dynamic data.
  40. Fill input related to `inputVMUser` with dynamic data.
  41. Fill input related to `inputAPIKEY` with dynamic data.
  42. Fill input related to `inputControllerEndpoint` with dynamic data.
  43. Fill input related to `inputusername` with dynamic data.
  44. Click button with selector: `text "Cancel"`.
  45. Click button with selector: `text "Submit"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `listBareMetal.vue`
  1. Fill input related to `searchBareMetal` with dynamic data.
  2. Click button with selector: `text "{
                 "`.
  - **Via component:** `dialogListServices.vue`
  - **Via component:** `listCompute.vue`
  3. Fill input related to `inputTeam` with dynamic data.
  4. Click button with selector: `text "{
                i"`.
  5. Click button with selector: `text "{
                 "`.
  - **Via component:** `listLlm.vue`
  6. Fill input related to `searchName` with dynamic data.
  7. Click button with selector: `text "{
                 "`.
  - **Via component:** `listNotebook.vue`
  8. Fill input related to `searchName` with dynamic data.
  9. Click button with selector: `text "{
                 "`.
  - **Via component:** `listService.vue`
  10. Fill input related to `inputTeam` with dynamic data.
  11. Click button with selector: `text "{
                 "`.
  - **Via component:** `listVcluster.vue`
  12. Fill input related to `searchName` with dynamic data.
  13. Click button with selector: `text "{
                 "`.
  - **Via component:** `listVM.vue`
  14. Fill input related to `searchName` with dynamic data.
  15. Click button with selector: `text "{
                 "`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: read-success.png`).

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `detailBareMetal.vue`
  1. Click button with selector: `text "{
                 "`.
  - **Via component:** `detailCompute.vue`
  2. Click button with selector: `text "{
                 "`.
  - **Via component:** `detailLlm.vue`
  3. Click button with selector: `text "{
                 "`.
  - **Via component:** `detailNotebook.vue`
  4. Click button with selector: `text "{
                 "`.
  - **Via component:** `editNotebook.vue`
  5. Fill input related to `notebookName` with dynamic data.
  6. Fill input related to `ingreesIp` with dynamic data.
  7. Fill input related to `ingreesNamespace` with dynamic data.
  8. Fill input related to `project` with dynamic data.
  9. Fill input related to `hostClusterName` with dynamic data.
  10. Fill input related to `clusterName` with dynamic data.
  11. Click button with selector: `text "Cancel"`.
  12. Click button with selector: `text "Save"`.
  - **Via component:** `detailService.vue`
  13. Click button with selector: `text "{
                 "`.
  - **Via component:** `detailVcluster.vue`
  14. Click button with selector: `text "{
                 "`.
  - **Via component:** `detailVM.vue`
  15. Click button with selector: `text "{
                 "`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

