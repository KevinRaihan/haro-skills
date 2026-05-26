---
name: cloudeka-portal-navigator
description: An automated browser-automation instruction manual for a downstream Playwright web-crawler agent through the Cloudeka staging portal.
---

# SKILL: Cloudeka Portal Navigator

This skill guides a downstream Playwright web-crawler agent through the Cloudeka staging portal (`https://staging.ai.cloudeka.id`) to automatically interact with elements, execute CRUD operations for every feature, and capture precise screenshots for technical documentation.

## 1. Global Execution Flow

### Authentication
* **Initial State:** The agent must navigate to the login page.
* **Credentials:** Fetch appropriate credentials from the environment or secret manager.
* **Execution:**
  1. Fill `input[name="username"]` or `input[name="email"]`.
  2. Fill `input[name="password"]`.
  3. Click `button[type="submit"]` or text `Login`.
  4. Wait for network idle and navigation to the Dashboard.

### Global Loading Spinners
* The portal may use global loading spinners during API calls (e.g., `.v-progress-circular` or similar overlays).
* **Instruction:** Before attempting to interact with any element or capture a screenshot, the agent **MUST** wait for any loading overlays to disappear. Use Playwright's `.waitForSelector('.loading-overlay', { state: 'hidden' })` (adjust selector to match portal's exact implementation).

### Error Recovery
* **Quota Limits / Validation Errors:** If a resource creation fails due to quota limits or validation (e.g., a toast notification appears with "Error" or "Failed"), the agent should capture the error screenshot (`filename: error-<action>.png`), then attempt to click a "Cancel" or "Close" button to return to a neutral state (the list view).
* **Retry Strategy:** If an element is not found within the timeout (e.g., 5000ms), log the failure, capture a fallback screenshot, and proceed to the next module.

## 2. Screenshot Standards

To ensure consistent and professional documentation, the following standards must be applied to all screenshot captures:

* **Viewport Size:** Ensure the browser viewport is strictly set to **1440x900** before capturing.
* **Animation Settle Time:** Wait exactly **500ms** after any click, hover, or form submission before snapping the screenshot to allow CSS transitions, modals, and toasts to settle.
* **Masking Sensitive Data:** Mask or hide any visible API tokens, sensitive user details, or passwords before capturing. (e.g., `page.addStyleTag({ content: '.sensitive-data { display: none !important; }' });`)
* **Naming Convention:** Use the specific filenames dictated in the references (e.g., `create-success.png`).
* **Full Page vs Element:** Capture full page screenshots unless specifically instructed to capture an element or modal bounding box.

## 3. Index of Capabilities

The following references map out the specific user journeys and element selectors for every discovered product and feature in the Cloudeka portal. The Playwright agent should iterate through these flows.

- [Api](./references/api/api-crud.md)
- [Audit Log](./references/audit-log/audit-log-crud.md)
- [Backup](./references/backup/backup-crud.md)
- [Balance](./references/balance/balance-crud.md)
- [Billing](./references/billing/billing-crud.md)
- [Broadcast](./references/broadcast/broadcast-crud.md)
- [Cdn](./references/cdn/cdn-crud.md)
- [Chat Bot](./references/chat-bot/chat-bot-crud.md)
- [Create New Project](./references/create-new-project/create-new-project-crud.md)
- [Create Organization](./references/create-organization/create-organization-crud.md)
- [Dashboard](./references/dashboard/dashboard-crud.md)
- [Deka Box](./references/deka-box/deka-box-crud.md)
- [Deka Claw](./references/deka-claw/deka-claw-crud.md)
- [Deka Flexi](./references/deka-flexi/deka-flexi-crud.md)
- [Deka Llm](./references/deka-llm/deka-llm-crud.md)
- [Deka Notebook](./references/deka-notebook/deka-notebook-crud.md)
- [Dns](./references/dns/dns-crud.md)
- [Eula](./references/eula/eula-crud.md)
- [Forcechangepassword](./references/forcechangepassword/forcechangepassword-crud.md)
- [Godmode Manage Roles](./references/godmode-manage-roles/godmode-manage-roles-crud.md)
- [Guard](./references/guard/guard-crud.md)
- [Kubeapps](./references/kubeapps/kubeapps-crud.md)
- [Kubernetes](./references/Kubernetes/Kubernetes-crud.md)
- [Login](./references/login/login-crud.md)
- [Manage Project](./references/manage-project/manage-project-crud.md)
- [Manage Superadmin](./references/manage-superadmin/manage-superadmin-crud.md)
- [Manage Ticket](./references/manage-ticket/manage-ticket-crud.md)
- [Mlops](./references/mlops/mlops-crud.md)
- [Organization](./references/organization/organization-crud.md)
- [Otp](./references/otp/otp-crud.md)
- [Page Admin](./references/page-admin/page-admin-crud.md)
- [Page Dashboard](./references/page-dashboard/page-dashboard-crud.md)
- [Page Godmode](./references/page-godmode/page-godmode-crud.md)
- [Payment Response](./references/payment-response/payment-response-crud.md)
- [Permission](./references/permission/permission-crud.md)
- [Pods](./references/pods/pods-crud.md)
- [Profile](./references/profile/profile-crud.md)
- [Project](./references/project/project-crud.md)
- [Rafay](./references/rafay/rafay-crud.md)
- [Registry](./references/registry/registry-crud.md)
- [Resetpassword](./references/resetpassword/resetpassword-crud.md)
- [Role Permission](./references/role-permission/role-permission-crud.md)
- [Security](./references/security/security-crud.md)
- [Ssl](./references/ssl/ssl-crud.md)
- [Superadmin Automate Suspension](./references/superadmin-automate-suspension/superadmin-automate-suspension-crud.md)
- [Superadmin Broadcast](./references/superadmin-broadcast/superadmin-broadcast-crud.md)
- [Superadmin Mailboxlog](./references/superadmin-mailboxlog/superadmin-mailboxlog-crud.md)
- [Superadmin Manage Audit](./references/superadmin-manage-audit/superadmin-manage-audit-crud.md)
- [Superadmin Manage Eula](./references/superadmin-manage-eula/superadmin-manage-eula-crud.md)
- [Superadmin Manage Flavor](./references/superadmin-manage-flavor/superadmin-manage-flavor-crud.md)
- [Superadmin Manage Image](./references/superadmin-manage-image/superadmin-manage-image-crud.md)
- [Superadmin Manage Org](./references/superadmin-manage-org/superadmin-manage-org-crud.md)
- [Superadmin Manage Package](./references/superadmin-manage-package/superadmin-manage-package-crud.md)
- [Superadmin Manage Pricing](./references/superadmin-manage-pricing/superadmin-manage-pricing-crud.md)
- [Superadmin Manage Project](./references/superadmin-manage-project/superadmin-manage-project-crud.md)
- [Superadmin Manage Region](./references/superadmin-manage-region/superadmin-manage-region-crud.md)
- [Superadmin Manage Sales](./references/superadmin-manage-sales/superadmin-manage-sales-crud.md)
- [Superadmin Manage Tag](./references/superadmin-manage-tag/superadmin-manage-tag-crud.md)
- [Superadmin Manage User](./references/superadmin-manage-user/superadmin-manage-user-crud.md)
- [Superadmin Manage Vm](./references/superadmin-manage-vm/superadmin-manage-vm-crud.md)
- [Superadmin Manage Voucher](./references/superadmin-manage-voucher/superadmin-manage-voucher-crud.md)
- [Superadmin Manualpayment](./references/superadmin-manualpayment/superadmin-manualpayment-crud.md)
- [User](./references/user/user-crud.md)
- [Vcluster](./references/vcluster/vcluster-crud.md)
- [Vms](./references/vms/vms-crud.md)
- [Voucher](./references/voucher/voucher-crud.md)
- [Vpn](./references/vpn/vpn-crud.md)
