const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // const getCompareSnapshotsPlugin = require("cypress-image-diff-js/dist/plugin");
      // getCompareSnapshotsPlugin(on, config);
      
        },

    specPattern: 'cypress/e2e/*.js',
    baseUrl: 'https://automationexercise.com',
    blockHosts: [
      'googleads.g.doubleclick.net',
      'pagead2.googlesyndication.com',
    ],
    
  },
});
