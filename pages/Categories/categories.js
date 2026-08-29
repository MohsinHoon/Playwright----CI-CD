export class Categories_Page {
  constructor(page) {
    this.page = page;
  }

  // -Verify user can navigate to each product category
  // Navigate to Books Category

  async navigateToTheProductviaCategories() {
    await this.page.getByRole("link", { name: "Books" }).first().click();
  }

  // -Verify user can navigate to a subcategory
  // Navigate to Computer -> Desktops

  async navigateToProductSubCategory() {
    await this.page.getByRole("link", { name: "Computers" }).first().hover();
    await this.page.getByRole("link", { name: "Desktops" }).click();
  }

  // -Verify products are displayed for the selected category
  // Navigate to Computer -> Desktops -> Products Displayed for sub category

  async displayingOfSubCategoryProducts() {
    await this.page.getByRole("link", { name: "Computers" }).first().hover();
    await this.page.getByRole("link", { name: "Desktops" }).click();
    await expect(
      this.page.getByRole("link", {
        name: "Build your own cheap computer",
        exact: true,
      }),
    );
  }
}
