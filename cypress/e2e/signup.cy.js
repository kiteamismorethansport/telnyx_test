import { faker } from '@faker-js/faker';
import SignUpPage  from "../pages/signup_page";

describe('Registration functionality test', () => {
  beforeEach('test', () => {
cy.visit('https://telnyx.com/sign-up')
  })
  it('Register new user with short password', () =>{
    cy.wait(3000)
    const signup = new SignUpPage()
    const userData = {
      email: 'whatadayforqa@gmail.com',
      firstName: 'Whatawater',
      lastName: 'Nice',
      password: 'WErdf!1'} 
    signup.acceptCookies()
    signup.registerNewUser(userData)
    signup.termsAndConditionsClick()
    signup.confirmUserData()
    cy.get('#passwordMinLength').should('contain', 'Password must be at least 12 characters')
  })
  it('Register new user with invalid email', () =>{
    cy.wait(3000)
    const signup = new SignUpPage()
    const userData = {
      email: 'whagmail.com',
      firstName: 'Whatawater',
      lastName: 'Nice',
      password: 'Testing_Account1!'} 
    signup.acceptCookies()
    signup.registerNewUser(userData)
    signup.termsAndConditionsClick()
    signup.confirmUserData()
  })
  it('Register new user without ticking conditions and rules', ()=>{
     cy.wait(3000)
    const signup = new SignUpPage()
    const userData = {
      email: 'whatadayforqa@gmail.com',
      firstName: 'Whatawater',
      lastName: 'Nice',
      password: 'Testing_Account1!'} 
    signup.acceptCookies()
    signup.registerNewUser(userData)
    signup.confirmUserData()
    cy.get('#terms_and_conditions_message').should('contain', 'Please accept the terms')
  })
})
  