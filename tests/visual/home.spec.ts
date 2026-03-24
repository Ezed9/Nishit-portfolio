import { expect, test, type Page } from "@playwright/test";

async function openCapturePage(page: Page, hash = "") {
  await page.goto(`/?capture=1${hash}`);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(300);
}

test.describe("portfolio visuals", () => {
  test("home page baseline", async ({ page }) => {
    await openCapturePage(page);

    await expect(page).toHaveScreenshot("home-page.png", {
      animations: "disabled",
      fullPage: true,
      maxDiffPixelRatio: 0.02
    });
  });

  test("hero baseline", async ({ page }) => {
    await openCapturePage(page);

    await expect(page.getByTestId("hero-section")).toHaveScreenshot("hero-section.png", {
      animations: "disabled",
      maxDiffPixels: 100
    });
  });

  test("dispatch terminal baseline", async ({ page }) => {
    await openCapturePage(page, "#contact");

    await expect(page.getByTestId("dispatch-terminal")).toHaveScreenshot("dispatch-terminal.png", {
      animations: "disabled"
    });
  });

  test("mission board with link selected", async ({ page }) => {
    await openCapturePage(page, "#projects");

    await page.locator("button", { hasText: "LINK" }).first().click();

    await expect(page.getByTestId("mission-board")).toHaveScreenshot("mission-board-link.png", {
      animations: "disabled"
    });
  });
});
