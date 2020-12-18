const path = require('path')
const fs = require('fs')
const bundle = require('./bundle.js')

const entryPath = path.join(__dirname, '../functions/api/')
const entry = path.join(entryPath, 'index.js')
const entryTOML = path.join(entryPath, 'wrangler.toml')
const entryPkg = path.join(entryPath, 'package.json')

const dist = path.join(process.cwd(), 'dist/functions/api')
const output = path.join(dist, 'index.js')
const outputTOML = path.join(dist, 'wrangler.toml')
const outputPkg = path.join(dist, 'package.json')

const runBundle = async () => {
  let response = false
  try {
    fs.mkdirSync(dist, { recursive: true })
    fs.copyFileSync(entryTOML, outputTOML)
    fs.copyFileSync(entryPkg, outputPkg)

    response = await bundle(entry, output)
  } catch (error) {
    console.error(`bundle: ${error}`)
  }
  if (!response) {
    throw new Error('Bundle aborted')
  } else {
    console.log('Bundle completed')
  }
}

runBundle()
