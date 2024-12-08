import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

import ItemPage from "./ItemPage";

dotenv.config();

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.BASE_URL || "http://localhost:5173");
});

test.describe("아이템 리스트", () => {
  test("길이, 너비, 높이 입력 시 1~400 범위를 넘어가면 에러 메세지가 나오고 추가 버튼이 비활성화 되어야 한다.", async ({
    page,
  }) => {
    const itemPage = new ItemPage(page);

    await itemPage.itemList.click();
    await itemPage.fillItemDimensions("401", "0", "-1");

    await expect(itemPage.validationErrorMessage).toHaveText(
      "아이템 크기는 1mm 이상 400mm 이하여야 합니다.",
    );
    await expect(itemPage.addButton).toBeDisabled();
  });

  test("아이템을 추가하면 '내 아이템'에 등록되어야 한다.", async ({ page }) => {
    const itemPage = new ItemPage(page);

    await itemPage.addItem();

    await expect(itemPage.myItemList.nth(0)).toBeVisible();
  });

  test("추가된 아이템의 삭제 버튼을 누르면 아이템 목록에서 삭제되어야 한다.", async ({
    page,
  }) => {
    const itemPage = new ItemPage(page);

    await itemPage.addItem();

    const itemDeleteButton = page.getByTestId("item-delete-button-0");

    await expect(itemDeleteButton).toBeVisible();

    await itemDeleteButton.click();
    const firstChild = itemPage.myItemList.getByTestId("my-item-0");

    await expect(firstChild).toHaveCount(0);
  });

  test("아이템 리스트가 15개 이상일 경우 추가 버튼이 disable 되어야 한다.", async ({
    page,
  }) => {
    const itemPage = new ItemPage(page);

    for (let i = 0; i < 15; i++) {
      await itemPage.addItem();
    }

    await itemPage.itemList.click();

    await expect(itemPage.limitErrorMessage).toHaveText(
      "아이템은 최대 15개까지 추가할 수 있습니다.",
    );
    await expect(itemPage.addButton).toBeDisabled();
  });
});

test.describe("포장 기능", () => {
  test("아이템이 없을 경우 포장하기 버튼을 누르면 에러 토스트 메세지가 나와야 한다.", async ({
    page,
  }) => {
    const itemPage = new ItemPage(page);

    await itemPage.packButton.click();

    const toastMessage = page.locator(".Toastify__toast").first();

    await expect(toastMessage).toHaveText("아이템을 추가해 주세요.");
  });

  test("아이템 포장 후 결과 툴팁과 포장 결과 화면이 표시되어야 한다.", async ({
    page,
  }) => {
    const itemPage = new ItemPage(page);

    await itemPage.addItem();

    await itemPage.packButton.click();

    const resultToolTip = page.getByTestId("result-tool-tip");
    const resultToolTipConfirmButton = page.getByTestId(
      "result-tooltip-confirm-button",
    );

    await expect(resultToolTip).toBeVisible();

    await resultToolTipConfirmButton.click();

    const packingResultCanvas = page.getByTestId("packaging-result-canvas");

    await expect(packingResultCanvas).toBeVisible();
  });
});
