import { faker } from '@faker-js/faker';
class SignUpPage {
    elements ={
        signUpLink : () => cy.get('#header-sign-up'),
        emailField : () => cy.get('#email') ,
        firstName : () => cy.get('#first_name'),
        lastName : () => cy.get('#last_name'),
        password : ()=> cy.get('[data-testid="password"]'),
        termsAndCondtions : ()=>cy.get('#terms_and_conditions'),
        subscriptionOption : ()=>cy.get('#subscription_opt_in'),
        signUpBtn : ()=>cy.get('.c-gJSRkV > .c-kDQqQr'),
        cookiesClose : ()=>cy.get('#onetrust-accept-btn-handler')
           }
              
          acceptCookies(){
          this.elements.cookiesClose().click()
               }

          registerNewUser(userData){
          this.elements.emailField().type(userData.email)
          this.elements.firstName().type(userData.firstName)
          this.elements.lastName().type(userData.lastName)
          this.elements.password().type(userData.password)
          }
          termsAndConditionsClick(){
            this.elements.termsAndCondtions().click()
            this.elements.subscriptionOption().click()
            this.elements.signUpBtn().click()
          }
          confirmUserData(){
            this.elements.signUpBtn().click()
          }
         checkResultRegistration() {
         cy.get('.c-buvHyO-ijVfhdt-css > .c-PJLV').should('include.text', 'please confirm your email')
            }



}

export default SignUpPage;