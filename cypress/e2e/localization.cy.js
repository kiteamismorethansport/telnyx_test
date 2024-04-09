import ShopPage  from "../pages/shop_page";

describe('Localization test', () => {
  beforeEach('test', () => {
    cy.visit('https://shop.telnyx.com/')
      })
  it('Change country and currency, and check that the currency symbol changed on the prices of products ', () => {
    const shop = new ShopPage()
    for (const country in shop.currencies) {
        const symbol = shop.currencies[country];
        shop.changeCurrency(symbol);
    }
  })
})