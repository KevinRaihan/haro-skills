# Feature Name: Deka Claw

## Navigation Path
`Dashboard -> Deka-Claw`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `create.vue`
  1. Fill input related to `name` with dynamic data.
  2. Fill input related to `agent_key` with dynamic data.
  3. Fill input related to `model` with dynamic data.
  4. Click button with selector: `text "Check"`.
  5. Click button with selector: `text "Cancel"`.
  6. Click button with selector: `text "Create"`.
  - **Via component:** `create.vue`
  7. Fill input related to `name` with dynamic data.
  8. Fill input related to `display_name` with dynamic data.
  9. Fill input related to `secret_name` with dynamic data.
  10. Fill input related to `secret_key` with dynamic data.
  11. Fill input related to `bot_token` with dynamic data.
  12. Fill input related to `account_id` with dynamic data.
  13. Fill input related to `reply` with dynamic data.
  14. Click button with selector: `text "Cancel"`.
  15. Click button with selector: `text "{{ route.params.id_c"`.
  - **Via component:** `create-instance.vue`
  16. Fill input related to `instanceName` with dynamic data.
  17. Fill input related to `llmApiKey` with dynamic data.
  18. Click button with selector: `text "mdi-dns-outline
   "`.
  19. Click button with selector: `text "Kubernetes
        "`.
  20. Click button with selector: `text "Advanced Settings
 "`.
  21. Click button with selector: `text "Get API Key from Dek"`.
  22. Click button with selector: `text "Advanced Setting
  "`.
  23. Click button with selector: `text "Cancel"`.
  24. Click button with selector: `text "Create Instance"`.
  - **Via component:** `add-provider.vue`
  25. Fill input related to `name` with dynamic data.
  26. Fill input related to `displayName` with dynamic data.
  27. Fill input related to `apiBaseUrl` with dynamic data.
  28. Fill input related to `apiKey` with dynamic data.
  29. Click button with selector: `text "Cancel"`.
  30. Click button with selector: `text "Create"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `list-agent.vue`
  1. Fill input related to `search` with dynamic data.
  2. Click button with selector: `text "mdi-plus
        
"`.
  3. Click button with selector: `text "All Types"`.
  4. Click button with selector: `text "mdi-plus
          "`.
  5. Click button with selector: `text "mdi-delete
        "`.
  - **Via component:** `list-channel.vue`
  6. Fill input related to `search` with dynamic data.
  7. Click button with selector: `text "Create Channel"`.
  8. Click button with selector: `text "All Types"`.
  9. Click button with selector: `text "mdi-plus
          "`.
  10. Click button with selector: `text "mdi-pencil"`.
  11. Click button with selector: `text "mdi-delete"`.
  - **Via component:** `list-provider.vue`
  12. Fill input related to `search` with dynamic data.
  13. Click button with selector: `text "mdi-plus
          "`.
  14. Click button with selector: `text "mdi-square-edit-outl"`.
  15. Click button with selector: `text "mdi-delete"`.
  - **Via component:** `listModelProvider.vue`
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: read-success.png`).

### 3. Update / Edit Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `detail.vue`
  1. Fill input related to `form.displayName` with dynamic data.
  2. Fill input related to `form.agentKey` with dynamic data.
  3. Fill input related to `form.model` with dynamic data.
  4. Fill input related to `form.budget_monthly_cents` with dynamic data.
  5. Fill input related to `form.contextWindow` with dynamic data.
  6. Fill input related to `form.maxToolIterations` with dynamic data.
  7. Fill input related to `form.maxChunkLength` with dynamic data.
  8. Fill input related to `form.chunkOverlap` with dynamic data.
  9. Fill input related to `form.maxResult` with dynamic data.
  10. Fill input related to `form.minScore` with dynamic data.
  11. Fill input related to `form.vectorWeight` with dynamic data.
  12. Fill input related to `form.textWeight` with dynamic data.
  13. Click button with selector: `text "(!isEdit ? onEdit() "`.
  14. Click button with selector: `text "Check"`.
  15. Click button with selector: `text "Cancel"`.
  16. Click button with selector: `text "Save"`.
  - **Via component:** `detail.vue`
  17. Click button with selector: `text "Edit"`.
  18. Click button with selector: `text "Delete"`.
  19. Click button with selector: `text "mdi-content-copy"`.
  - **Via component:** `detail-instance.vue`
  20. Click button with selector: `text "Back"`.
  21. Click button with selector: `text "Edit"`.
  22. Click button with selector: `text "Delete"`.
  23. Click button with selector: `text "Edit Configuration"`.
  24. Click button with selector: `text "{{ showSsh ? "mdi-co"`.
  25. Click button with selector: `text "mdi-eye"`.
  - **Via component:** `edit-instance.vue`
  26. Click button with selector: `text "Back"`.
  27. Click button with selector: `text "Cancel"`.
  28. Click button with selector: `text "Save Changes"`.
  - **Via component:** `detail.vue`
  29. Click button with selector: `text "Edit"`.
  30. Click button with selector: `text "Delete"`.
  - **Via component:** `edit.vue`
  31. Fill input related to `display_name` with dynamic data.
  32. Fill input related to `base_url` with dynamic data.
  33. Fill input related to `provider_type` with dynamic data.
  34. Fill input related to `api_key` with dynamic data.
  35. Fill input related to `model.display_name` with dynamic data.
  36. Fill input related to `model.model` with dynamic data.
  37. Click button with selector: `text "Cancel"`.
  38. Click button with selector: `text "Save Changes"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialog-delete.vue`
  1. Click button with selector: `text "Cancel"`.
  2. Click button with selector: `text "Delete"`.
  - **Via component:** `dialogConfirmDelete.vue`
  3. Fill input related to `inputName` with dynamic data.
  4. Click button with selector: `text "mdi-close"`.
  5. Click button with selector: `text "Cancel"`.
  6. Click button with selector: `text "Delete"`.
  - **Via component:** `dialogDelete.vue`
  7. Click button with selector: `text "-->
         mdi-cl"`.
  8. Click button with selector: `text "Yes, I want delete t"`.
  9. Click button with selector: `text "No, I'm not sure"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

