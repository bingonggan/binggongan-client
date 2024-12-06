import { type Page, type Locator } from "@playwright/test";

export default class ItemPage {
  readonly inputWidth: Locator;
  readonly inputHeight: Locator;
  readonly inputDepth: Locator;
  readonly addButton: Locator;
  readonly validationErrorMessage: Locator;
  readonly myItemList: Locator;
  readonly itemList: Locator;
  readonly limitErrorMessage: Locator;
  readonly packButton: Locator;

  constructor(page: Page) {
    this.inputWidth = page.getByTestId("item-width");
    this.inputHeight = page.getByTestId("item-height");
    this.inputDepth = page.getByTestId("item-depth");
    this.addButton = page.getByTestId("add-button");
    this.validationErrorMessage = page.getByTestId("validation-error-message");
    this.myItemList = page.getByTestId("my-item-list");
    this.itemList = page.getByTestId("item-list");
    this.limitErrorMessage = page.getByTestId("limit-error-message");
    this.packButton = page.getByTestId("pack-button");
  }

  async fillItemDimensions(
    width: string,
    height: string,
    depth: string,
  ): Promise<void> {
    await this.inputWidth.fill(width);
    await this.inputHeight.fill(height);
    await this.inputDepth.fill(depth);
  }

  async addItem(): Promise<void> {
    await this.itemList.click();
    await this.fillItemDimensions("200", "200", "200");
    await this.addButton.click();
  }
}
