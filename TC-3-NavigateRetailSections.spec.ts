import { leapwork } from "./leapwork";

import { LoginToRetailDemo } from "@assets/TestCases/Regression/LoginToRetailDemo";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: pw1ylq0u80
await leapwork.step("Use test case: LoginToRetailDemo", async () => {
    return await LoginToRetailDemo();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: sSWMVo8i
await leapwork.step("Open https://demoapps.leapwork.ai/retail/", async () => {
    await page.goto("https://demoapps.leapwork.ai/retail/", { waitUntil: 'load' });
}, { action: "navigate" });

// ai-studio-step-id: 3uSh7yqo
await leapwork.step("Click the Products link in the primary navigation", async () => {
    // Click link "Products"
    await page.getByRole('link', { name: 'Products', exact: true }).click();
}, { action: "click", relativeXpath: ".//body/header/div/nav[@aria-label=\"Primary navigation\"]/a[1]" });

// ai-studio-step-id: QN2wCMbE
await leapwork.step("Validate the product card shows “Leap & Leash Chicken Kibble” on Leap & Leash Pet Market", async () => {
    // Assert button "View details for Leap & Leash Chicken Kibble, $28.00" contains "Leap & Leash Chicken Kibble Chicken and sweet potato recipe, 4 lb $28.00"
    await expect(page.getByRole('button', { name: 'View details for Leap & Leash' })).toContainText("Leap & Leash Chicken Kibble\n              Chicken and sweet potato recipe, 4 lb\n            \n            \n              $28.00");
}, { action: "validate", relativeXpath: "//*[@id=\"productGrid\"]/article[@aria-label=\"View details for Leap & Leash Chicken Kibble, $28.00\"]" });

// ai-studio-step-id: m1nelBGG
await leapwork.step("Click the New link in the Primary navigation.", async () => {
    // Click link "New"
    await page.getByRole('link', { name: 'New' }).click();
}, { action: "click", relativeXpath: ".//body/header/div/nav[@aria-label=\"Primary navigation\"]/a[2]" });

// ai-studio-step-id: w7Ilts8x
await leapwork.step("Validate Leap & Leash Pet Market heading shows \"Everything pets need, ready for the week ahead.\"", async () => {
    // Assert heading "Everything pets need, ready for the week ahead." contains "Everything pets need, ready for the week ahead."
    await expect(page.getByRole('heading', { name: 'Everything pets need, ready' })).toContainText("Everything pets need, ready for the week ahead.");
}, { action: "validate", relativeXpath: "//*[@id=\"heroSection\"]/div[2]/div/h1" });

// ai-studio-step-id: CB1reYVj
await leapwork.step("Click the Deals link in the primary navigation", async () => {
    // Click link "Deals"
    await page.getByRole('link', { name: 'Deals' }).click();
}, { action: "click", relativeXpath: ".//body/header/div/nav[@aria-label=\"Primary navigation\"]/a[3]" });

// ai-studio-step-id: SLw1EdT7
await leapwork.step("Validate heading on Leap & Leash Pet Market shows 'Everything pets need, ready for the week ahead.'", async () => {
    // Assert heading "Everything pets need, ready for the week ahead." contains "Everything pets need, ready for the week ahead."
    await expect(page.getByRole('heading', { name: 'Everything pets need, ready' })).toContainText("Everything pets need, ready for the week ahead.");
}, { action: "validate", relativeXpath: "//*[@id=\"heroSection\"]/div[2]/div/h1" });