import ShopPage  from "../pages/shop_page";

describe('Shop funcionality test', () => {
  beforeEach('test', () => {
    cy.visit('https://shop.telnyx.com/')
      })
  it('Check if shopping cart is empty when start shopping', () => {
    const shop = new ShopPage()
    shop.clickOnCartIcon()
    shop.checkIfEmpty()
  })
  it('Add Item to Shopping cart', () => {
    const shop = new ShopPage()
    shop.addToCart()
    shop.checkIfItemAdded()
  })
  it('Remove Item from Shopping cart', () => {
    const shop = new ShopPage()
    shop.addToCart()
    shop.checkIfItemAdded()
    shop.removeItemFromCart()
    shop.checkIfEmpty()
  })
})