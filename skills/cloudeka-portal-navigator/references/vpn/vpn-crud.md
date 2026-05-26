# Feature Name: Vpn

## Navigation Path
`Dashboard -> Vpn`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `createIpsecPhase2.vue`
  1. Fill input related to `inputRemoteSubnet` with dynamic data.
  2. Click button with selector: `text "Cancel"`.
  3. Click button with selector: `text "Create"`.
  - **Via component:** `createUser.vue`
  4. Fill input related to `inputUsername` with dynamic data.
  5. Fill input related to `newPassword` with dynamic data.
  6. Fill input related to `confirmPassword` with dynamic data.
  7. Click button with selector: `text "Create"`.
  - **Via component:** `createVpn.vue`
  8. Fill input related to `inputName` with dynamic data.
  9. Fill input related to `storageSize` with dynamic data.
  10. Click button with selector: `text "Create"`.
  - **Via component:** `createIpsec.vue`
  11. Fill input related to `inputRemoteVpn` with dynamic data.
  12. Fill input related to `dataGeneratePsk` with dynamic data.
  13. Fill input related to `keyExchangeVersion` with dynamic data.
  14. Fill input related to `lifeTime` with dynamic data.
  15. Fill input related to `protocol` with dynamic data.
  16. Fill input related to `inputRemoteSubnet` with dynamic data.
  17. Fill input related to `lifeTime2` with dynamic data.
  18. Click button with selector: `text "Add Encryption"`.
  19. Click button with selector: `text "Delete"`.
  20. Click button with selector: `text "Generate Pre-Shared "`.
  21. Click button with selector: `text "Create"`.
  - **Via component:** `createOpenVpn.vue`
  22. Fill input related to `inputUsername` with dynamic data.
  23. Fill input related to `inputNewPassword` with dynamic data.
  24. Fill input related to `inputConfirmPassword` with dynamic data.
  25. Fill input related to `inputRemoteSubnet` with dynamic data.
  26. Click button with selector: `text "Cancel"`.
  27. Click button with selector: `text "Create"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: create-success.png`).

### 2. Read / View Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 3. Update / Edit Resource
* No specific UI components found for this action, or it relies on standard list/API flows.

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `dialogDeleteIpsec.vue`
  1. Click button with selector: `text "Confirm"`.
  - **Via component:** `dialogDeleteIpsecPhase.vue`
  2. Click button with selector: `text "Confirm"`.
  - **Via component:** `dialogDeleteOpenVpn.vue`
  3. Click button with selector: `text "Confirm"`.
  - **Via component:** `dialogDeleteUser.vue`
  4. Click button with selector: `text "Confirm"`.
  - **Via component:** `dialogDeleteVpn.vue`
  5. Fill input related to `inputName` with dynamic data.
  6. Click button with selector: `text "mdi-close"`.
  7. Click button with selector: `text "I understand the con"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

