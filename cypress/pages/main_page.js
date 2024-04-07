
class MainPage{
elements ={
menuBar : () => cy.get('.c-gMsfuT') ,
shopLink : () => cy.get('.c-buvHyO-igXgZdb-css > .c-glDvHT > [href="https://shop.telnyx.com"]'),
loginLink : () => cy.get('.c-buvHyO-igXgZdb-css > .c-glDvHT > [href="https://portal.telnyx.com/"]'),
signUpLink : ()=> cy.get('#header-sign-up > .c-hakyQ'),
cookiesClose : ()=>cy.get('#onetrust-close-btn-container > .onetrust-close-btn-handler')
    }
navigate(){
    this.elements.cookiesClose().click();
    this.elements.menuBar().click();
    this.elements.shopLink().click();
}

}

export default MainPage;