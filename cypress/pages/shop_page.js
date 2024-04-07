export class ShopPage {
    elements ={
        shopLink : () => cy.get('.c-buvHyO-igXgZdb-css > .c-glDvHT > [href="https://shop.telnyx.com"]'),
        addToCartBtn : () => cy.get('#quick-add-template--14828910772302__featured-collection-06960027533390'),
        shoppingCartCounter : () => cy.get('.cart-count-bubble'),
        cookiesClose : ()=>cy.get('#onetrust-accept-btn-handler'),
        cartIsEmpty : () => cy.contains('h2', 'Your cart is empty'),
        shoppingCartIcon : () => cy.get('#cart-icon-bubble'),
        firstCartItem : () => cy.get('tr.cart-item').eq(0),
        removeItemBtn : () => cy.get('#CartDrawer-Remove-1'),
        scrollToItems : () => cy.get('#Slider-template--14828910772302__featured-collection-0'),
       searchBtn : () => cy.get('.modal__toggle-open.icon.icon-search'),
       searchInputField : () => cy.get('.search__input.field__input'),
       searchResults : () => cy.get('.template-search__results.collection.page-width'),
       clickSearch : () => cy.get('.search__button.field__button'),
       clearSearchField : () => cy.get('[aria-label="Clear search term"]')
    }
        searchItem = {
        a : 'Hoodie',
        b : 'Hat',
        c : 'SIM Card'
    }
            
            addToCart(){
                this.elements.scrollToItems().scrollIntoView()
                this.elements.addToCartBtn().click()
            }
            checkIfEmpty(){
                this.elements.cartIsEmpty().should('contain', 'Your cart is empty')
            }
            clickOnCartIcon(){
                this.elements.shoppingCartIcon().click()
            }
            checkIfItemAdded(){
                cy.get('tr.cart-item').eq(0).should('be.visible')
            }
            removeItemFromCart(){
                this.elements.removeItemBtn().click()
            }
            searchForItem(item){
                this.elements.searchBtn().click()
                this.elements.searchInputField().type(item)
                this.elements.clickSearch().click()
                this.elements.searchResults().contains(item)
            }
            resetSearchField(){
                this.elements.clearSearchField().click()
            }

}
export default ShopPage;