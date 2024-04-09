
=======
# Telnyx.com tests  
The set of e2e tests for the telnyx.com website written on Cypress js framework. It consists of 12 functional tests that include: login tests, registration tests, search tests, shop tests.  
  
## Getting Started  
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.  

## Prerequisites  
What things you need to install the software and how to install them:  
  
node -v // Ensure Node.js is installed  
npm -v // Ensure npm is installed  

## Installing  
A step-by-step series of examples that tell you how to get a development environment running:  
  
Clone the repository:  
Copy code  
git clone https://github.com/kiteamismorethansport/telnyx_test.git  
  
Install NPM packages:  
Copy code  
npm install  

Install Cypress:  
Copy code  
npm install cypress --save-dev  
  
## Running the tests  
After installing all packages, and cypress, you can run test either in headless mode or in the Cypress test Runner.  
  
To run all tests in headless mode you need to type this command:  
Copy code  
npx cypress run  
  
To run tests in the Cypress Test Runner type:  
Copy code  
npx cypress open  
This command opens the Cypress Test Runner, from which you can run individual tests interactively.  
  
## Built With  
Visual Studio Code  
Cypress - The testing framework used  
Node.js - Runtime environment  

