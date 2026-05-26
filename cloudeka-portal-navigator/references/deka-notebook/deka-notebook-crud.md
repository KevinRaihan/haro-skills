# Feature Name: Deka Notebook

## Navigation Path
`Dashboard -> Deka-Notebook`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `createDekaNotebook.vue`
  1. Fill input related to `inputName` with dynamic data.
  2. Fill input related to `inputNumberCpu` with dynamic data.
  3. Fill input related to `memorySize` with dynamic data.
  4. Fill input related to `storageSize` with dynamic data.
  5. Fill input related to `inputNumberGpu` with dynamic data.
  6. Click button with selector: `text "Cancel"`.
  7. Click button with selector: `text "Submit"`.
  - **Via component:** `newCreateNB.vue`
  8. Fill input related to `inputName` with dynamic data.
  9. Fill input related to `noGpu` with dynamic data.
  10. Fill input related to `inputNumberGpu` with dynamic data.
  11. Fill input related to `inputCpu` with dynamic data.
  12. Fill input related to `inputMemory` with dynamic data.
  13. Fill input related to `memory_size` with dynamic data.
  14. Fill input related to `inputStorageSize` with dynamic data.
  15. Fill input related to `storage_size` with dynamic data.
  16. Fill input related to `inputCustomName` with dynamic data.
  17. Click button with selector: `text "{{ item }}"`.
  18. Click button with selector: `text "Cancel"`.
  19. Click button with selector: `text "Create"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `listNotebook.vue`
  - **Via component:** `newListNotebook.vue`
  1. Fill input related to `search` with dynamic data.
  2. Click button with selector: `text "{{ tab.label }}"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: read-success.png`).

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogErrorDetail.vue`
  1. Click button with selector: `text "Close"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `deleteConfirmDekaNotebook.vue`
  1. Fill input related to `inputName` with dynamic data.
  2. Click button with selector: `text "mdi-close"`.
  3. Click button with selector: `text "I understand the con"`.
  - **Via component:** `deleteDekaNotebook.vue`
  4. Click button with selector: `text "Cancel"`.
  5. Click button with selector: `text "Yes"`.
  - **Via component:** `dialogConfirmDeleteNB.vue`
  6. Fill input related to `inputName` with dynamic data.
  7. Click button with selector: `text "mdi-close"`.
  8. Click button with selector: `text "Cancel"`.
  9. Click button with selector: `text "Delete"`.
  - **Via component:** `dialogDeleteNB.vue`
  10. Click button with selector: `text "-->
        
     "`.
  11. Click button with selector: `text "Yes, I want delete t"`.
  12. Click button with selector: `text "No, I'm not sure"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

