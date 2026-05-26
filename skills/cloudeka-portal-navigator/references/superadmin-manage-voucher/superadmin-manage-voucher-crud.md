# Feature Name: Superadmin Manage Voucher

## Navigation Path
`Dashboard -> Superadmin-Manage-Voucher`

## User Journeys (CRUD)

### 1. Create Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `create.vue`
  1. Fill input related to `nameVoucher` with dynamic data.
  2. Fill input related to `balanceExpireWeekdayVoucher` with dynamic data.
  3. Fill input related to `quotaVoucher` with dynamic data.
  4. Fill input related to `creditAmountVoucher` with dynamic data.
  5. Fill input related to `prefixCodeVoucher` with dynamic data.
  6. Fill input related to `'email-' + index` with dynamic data.
  7. Click button with selector: `text "Cancel"`.
  8. Click button with selector: `text "Create"`.
  - **Via component:** `create.vue`
  9. Fill input related to `inputName` with dynamic data.
  10. Fill input related to `inputQuotaValue` with dynamic data.
  11. Fill input related to `inputCode` with dynamic data.
  12. Fill input related to `inputDiscountLLMValue` with dynamic data.
  13. Fill input related to `inputDiscountRegistryValue` with dynamic data.
  14. Fill input related to `inputDiscountCdnValue` with dynamic data.
  15. Fill input related to ``inputDiscountCdn-${item.key}`` with dynamic data.
  16. Fill input related to ``inputDiscountDns-${item.key}`` with dynamic data.
  17. Fill input related to ``inputDiscountBox-${region.key}`` with dynamic data.
  18. Fill input related to ``inputGpuDiscount-${item.key}`` with dynamic data.
  19. Fill input related to ``inputFlexyDiscount-${item.key}`` with dynamic data.
  20. Click button with selector: `text "Cancel"`.
  21. Click button with selector: `text "{{ isEdit ? 'Update'"`.
  - **Via component:** `create.vue`
  22. Fill input related to `nameVoucher` with dynamic data.
  23. Fill input related to `durationManual` with dynamic data.
  24. Fill input related to `quotaVoucher` with dynamic data.
  25. Fill input related to `prefixCodeVoucher` with dynamic data.
  26. Fill input related to `llmCoins` with dynamic data.
  27. Click button with selector: `text "mdi-close"`.
  28. Click button with selector: `text "Add Model"`.
  29. Click button with selector: `text "Cancel"`.
  30. Click button with selector: `text "Create"`.
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
  - **Via component:** `detailCredit.vue`
  1. Click button with selector: `text "{
                o"`.
  - **Via component:** `dialogClaimVoucherCredit.vue`
  2. Fill input related to `inputName` with dynamic data.
  3. Click button with selector: `text "Claim"`.
  - **Via component:** `dialogDeleteVoucherCredit.vue`
  4. Click button with selector: `text "Cancel"`.
  5. Click button with selector: `text "Yes"`.
  - **Via component:** `dialogRevokeVoucherCreditDetail.vue`
  6. Click button with selector: `text "Cancel"`.
  7. Click button with selector: `text "Confirm"`.
  - **Via component:** `dialogVoucherCreditDetail.vue`
  8. Click button with selector: `text "mdi-download
      "`.
  9. Click button with selector: `text "{
                 "`.
  10. Click button with selector: `text "Close"`.
  - **Via component:** `detail.vue`
  11. Click button with selector: `text "{
                i"`.
  - **Via component:** `dialogUpdateVoucherProject.vue`
  12. Fill input related to `inputLimitDiscountValue` with dynamic data.
  13. Click button with selector: `text "Update"`.
  - **Via component:** `DialogEditProjectVoucher.vue`
  14. Fill input related to ``inputDiscount-${p.product}`` with dynamic data.
  15. Fill input related to ``inputDiscount-${it.item_slug}`` with dynamic data.
  16. Click button with selector: `text "Cancel"`.
  17. Click button with selector: `text "Update"`.
  - **Via component:** `editCredit.vue`
  18. Fill input related to `nameVoucher` with dynamic data.
  19. Fill input related to `balanceExpireWeekday` with dynamic data.
  20. Fill input related to `quotaVoucher` with dynamic data.
  21. Fill input related to `codeVoucher` with dynamic data.
  22. Fill input related to `amountVoucher` with dynamic data.
  23. Click button with selector: `text "Cancel"`.
  24. Click button with selector: `text "Update"`.
  - **Via component:** `detailVoucher.vue`
  - **Via component:** `edit.vue`
  25. Fill input related to `nameVoucher` with dynamic data.
  26. Fill input related to `durationManual` with dynamic data.
  27. Fill input related to `quotaVoucher` with dynamic data.
  28. Fill input related to `prefixCodeVoucher` with dynamic data.
  29. Fill input related to `llmCoins` with dynamic data.
  30. Click button with selector: `text "mdi-close"`.
  31. Click button with selector: `text "Cancel"`.
  32. Click button with selector: `text "Update"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: update-success.png`).

### 4. Delete Resource
* **Prerequisites:** User must be on the relevant list page.
* **Execution Steps:**
  - **Via component:** `delete.vue`
  1. Fill input related to `inputNameDelete` with dynamic data.
  2. Click button with selector: `text "mdi-close"`.
  3. Click button with selector: `text "I understand the con"`.
  - **Via component:** `dialogConfirmDelete.vue`
  4. Click button with selector: `text "Cancel"`.
  5. Click button with selector: `text "Yes"`.
* **Screenshot Triggers:**
  - Capture screenshot immediately *after* completing form/action (`filename: delete-success.png`).

