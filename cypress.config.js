

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: 'https://selector-practice-itak.vercel.app/Selector_Practice'
   
  },
})