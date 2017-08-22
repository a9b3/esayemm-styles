const fs = require('fs')
const path = require('path')

const SASS_FILEPATH = path.resolve(__dirname, '../variables.scss')

function extractValues(obj) {
  let generatedContent = ''
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      generatedContent += `$${key}: ${obj[key]};\n`
    } else if (typeof obj[key] === 'object') {
      generatedContent += extractValues(obj[key])
    }
  }
  return generatedContent
}
function generateContent() {
  const variables = require('../variables.js')
  return extractValues(variables)
}

function writeToSassFile(generatedContent) {
  const sassFileContent = fs.readFileSync(SASS_FILEPATH, { encoding: 'utf8' }).split('\n')
  const startLine = sassFileContent.findIndex(line => line === '// start generate-output')
  const endLine = sassFileContent.findIndex(line => line === '// end generate-output')
  sassFileContent.splice(startLine+1, endLine - startLine - 1, generatedContent)
  const sassFileContentString = sassFileContent.join('\n')

  fs.writeFileSync(SASS_FILEPATH, sassFileContentString)
}

writeToSassFile(generateContent())
