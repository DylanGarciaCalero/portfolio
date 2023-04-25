// next.config.js
const nextTranslate = require('next-translate-plugin')

module.exports = {
  output: 'standalone',
  ...nextTranslate(),
}