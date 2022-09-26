const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ez4oxm",
  e2e: {
    env: {
      hideXHR: true
    },
  },
});
