import { expect, test } from "@playwright/test";

test.describe("portfolio visuals", () => {
  test("home page baseline", async ({ page }) => {
    await page.goto("/?capture=1");
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.waitForLoadState("networkidle");

    await expect(page).toHaveScreenshot("home-page.png", {
      animations: "disabled",
      fullPage: true
    });
  });

  test("hero baseline", async ({ page }) => {
    await page.goto("/?capture=1");
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.waitForLoadState("networkidle");

    await expect(page.getByTestId("hero-section")).toHaveScreenshot("hero-section.png", {
      animations: "disabled"
    });
  });
});
