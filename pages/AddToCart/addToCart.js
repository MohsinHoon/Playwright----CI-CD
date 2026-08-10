export class Add_To_Cart {
    constructor(page) {
        this.page = page; 
    }
    async addProductsToCartViaSearching (itemsearch){
        await this.page.locator('#small-searchterms').pressSequentially(itemsearch)
        await this.page.getByRole('button', { name: 'Search' }).click()
        await this.page.getByRole('button', { name: 'Add to cart' }).click()
    }
}