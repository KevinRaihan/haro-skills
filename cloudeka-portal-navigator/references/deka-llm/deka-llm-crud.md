# Feature Name: Deka Llm

## Navigation Path
`Dashboard -> Deka-Llm`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `createDekaLLM.vue`
  1. Fill input related to `inputTeam` with dynamic data.
  2. Fill input related to `searchQuery` with dynamic data.
  3. Fill input related to `currentCoins` with dynamic data.
  4. Fill input related to `inputAmount` with dynamic data.
  5. Fill input related to `voucherCode` with dynamic data.
  6. Click button with selector: `text "0 && models[0]?.reso"`.
  7. Click button with selector: `text "{{ isModelSelected(m"`.
  8. Click button with selector: `text "Clear Filters"`.
  9. Click button with selector: `text "Cancel"`.
  10. Click button with selector: `text "{{ !route.params.id_"`.
  - **Via component:** `createKey.vue`
  11. Fill input related to `inputKeyName` with dynamic data.
  12. Fill input related to `inputMaxCoins` with dynamic data.
  13. Click button with selector: `text "Cancel"`.
  14. Click button with selector: `text "{{ action == "create"`.
  - **Via component:** `dialogSecretKeyAfterCreate.vue`
  15. Fill input related to `revealedSecretKey` with dynamic data.
  16. Click button with selector: `text "Copy"`.
  17. Click button with selector: `text "Close"`.
  - **Via component:** `create.vue`
  18. Fill input related to `inputName` with dynamic data.
  19. Fill input related to `inputThreshold` with dynamic data.
  20. Fill input related to `inputEmail` with dynamic data.
  21. Fill input related to `inputPeriod` with dynamic data.
  22. Click button with selector: `text "mdi-plus
          "`.
  23. Click button with selector: `text "Submit"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `details.vue`
  1. Click button with selector: `text "{}"
               "`.
  2. Click button with selector: `text "{
                 "`.
  - **Via component:** `dialogDetailKey.vue`
  3. Click button with selector: `text "Close"`.
  - **Via component:** `updateAlert.vue`
  4. Fill input related to `inputName` with dynamic data.
  5. Fill input related to `inputThreshold` with dynamic data.
  6. Fill input related to `inputEmail` with dynamic data.
  7. Fill input related to `inputPeriod` with dynamic data.
  8. Click button with selector: `text "mdi-plus
          "`.
  9. Click button with selector: `text "Submit"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `deleteConfirmDekaLLM.vue`
  1. Fill input related to `inputName` with dynamic data.
  2. Click button with selector: `text "mdi-close"`.
  3. Click button with selector: `text "I understand the con"`.
  - **Via component:** `deleteDekaLLM.vue`
  4. Click button with selector: `text "Cancel"`.
  5. Click button with selector: `text "Yes"`.
  - **Via component:** `deleteConfirmLlmAlert.vue`
  6. Fill input related to `inputName` with dynamic data.
  7. Click button with selector: `text "mdi-close"`.
  8. Click button with selector: `text "I understand the con"`.
  - **Via component:** `deleteLlmAlert.vue`
  9. Click button with selector: `text "Cancel"`.
  10. Click button with selector: `text "Yes"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

