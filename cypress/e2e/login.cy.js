import LoginPage  from "../pages/login_page";
describe('Login funcionality test', () => {
  beforeEach('test', () => {
  cy.visit('https://portal.telnyx.com')
  cy.wait(5000)
   })
  it('login to the website with empty email', () => {
    const login = new LoginPage()
    login.fillNoEmail()
    login.checkForEmptyEmail()
  })
  it('login to the website with empty email', () => {
    const login = new LoginPage()
    login.fillNoPassword()
    login.checkForEmptyPassword()
  })
})