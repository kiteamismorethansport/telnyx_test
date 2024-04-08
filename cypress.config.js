const { defineConfig } = require("cypress")

module.exports = defineConfig({
  projectId: "zokmzd",
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  e2e: {
    //baseUrl: 'https://telnyx.com/',
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});
