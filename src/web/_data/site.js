const fetch = require('node-fetch')

const apiUrl = process.env['API_URL']

const fetchSite = async () => {
  const body = JSON.stringify({
    query:
      'query getSite ($siteId: String) { site (siteId: $siteId) { title url description twitter image { src alt } } }',
    variables: {
      siteId: 'ServerlessDaysVirtual'
    }
  })

  const headers = {
    'Content-Type': 'application/json'
  }

  const response = await fetch(apiUrl, { method: 'POST', body, headers })

  if (response.ok) {
    const responseBody = await response.json()
    const { site } = responseBody.data
    // console.log(site)
    return site
  } else {
    return null
  }
}

module.exports = fetchSite
