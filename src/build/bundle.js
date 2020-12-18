const bundler = require('esbuild')

const bundle = async (entry, output) => {
  let response = false
  try {
    const buildResponse = await bundler.build({
      entryPoints: [entry],
      bundle: true,
      platform: 'node',
      define: {
        'process.env.NODE_ENV': '"production"'
      },
      outfile: output
    })
    console.log(buildResponse)
    response = true
  } catch (error) {
    console.error(`esbuild: ${error}`)
  }
  return response
}

module.exports = bundle
