export class LoginPage{
    elements ={
    emailInput : () => cy.get('.TextField__InputWrapper-sc-r5o2cn-4.flBpW [name="email"]'),
    passwordInput : () => cy.get('.TextField__InputWrapper-sc-r5o2cn-4.flBpW [name="password"]'),
    loginButton : () => cy.get('.Button__StyledDefaultButton-sc-44gl5i-0.gBCTym.LoginForm__LoginButton-fhXOmx.eazkBi'),
    welcomePage : () => cy.get('[data-page-id="Welcome"]'),
    emptyEmailMessage : () => cy.get('.TextField__ErrorMessage-sc-r5o2cn-5.iFEVFt'),
    emptyPassword : () => cy.get('.TextField__ErrorMessage-sc-r5o2cn-5.iFEVFt')
}
goToLogin(){
    this.loginButton().click()
}
fillNoEmail(){
    
    this.elements.passwordInput().type('Testing_Account1!')
    this.elements.loginButton().click()
}
fillNoPassword(){
    
    this.elements.emailInput().type('goodiny@gmail.com')
    this.elements.loginButton().click()
}
checkForEmptyEmail(){
    this.elements.emptyEmailMessage().contains('Required')
}
checkForEmptyPassword(){
this.elements.emptyPassword().contains('Required')
}

}
export default LoginPage;