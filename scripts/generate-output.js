const fs = require('fs')
const path = require('path')
const variables = require('../variables.js')

const sassFilePath = path.resolve(__dirname, '../variables.scss')

const generatedContent = Object.keys(variables).map(key => {
  return `$${key}: ${variables[key]};`
}).join('\n')

const sassFileContent = fs.readFileSync(sassFilePath, { encoding: 'utf8' }).split('\n')
const startLine = sassFileContent.findIndex(line => line === '// start generate-output')
const endLine = sassFileContent.findIndex(line => line === '// end generate-output')
sassFileContent.splice(startLine+1, endLine - startLine - 1, generatedContent)
const sassFileContentString = sassFileContent.join('\n')

fs.writeFileSync(sassFilePath, sassFileContentString)
