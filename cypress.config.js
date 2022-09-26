const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ez4oxm",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      hideXHR: true
    },
  },
});
