export class Categories_Page {
  constructor(page) {
    this.page = page;
  }

  // -Verify user can navigate to each product category
  // Navigate to Books Category

  async navigateToTheProductviaCategories() {
    await this.page.getByRole("link", { name: "Books" }).first().click();
  }
}
