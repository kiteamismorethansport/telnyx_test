import ShopPage  from "../pages/shop_page";

describe('Search funcionality test', () => {
    beforeEach('test', () => {
        cy.visit('https://shop.telnyx.com/')
          })
    it(' Search for item "a", using searchfield', () => {
    const search = new ShopPage()
    search.searchForItem(search.searchItem.a)
  })
    it('Search for item "b", using searchfield', () => {
const search = new ShopPage()
search.searchForItem(search.searchItem.b)
    })
    it('Search for item "c", using searchfield', () => {
        const search = new ShopPage()
        search.searchForItem(search.searchItem.c)
            })
})