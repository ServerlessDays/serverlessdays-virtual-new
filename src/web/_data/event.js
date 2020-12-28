const fetch = require('node-fetch')

const apiUrl = process.env['API_URL']

const fetchEvent = async () => {
  const body = JSON.stringify({
    query:
      'query getEvent ($eventId: String, $siteId: String) { event (eventId: $eventId, siteId: $siteId) { date startTimes live current timeline { milestone date } sponsors { name url logo { src alt } } } }',
    variables: {
      siteId: 'ServerlessDaysVirtual',
      eventId: '4'
    }
  })

  const headers = {
    'Content-Type': 'application/json'
  }

  const response = await fetch(apiUrl, { method: 'POST', body, headers })

  if (response.ok) {
    const responseBody = await response.json()
    const { event } = responseBody.data
    if (event.current && event.live) {
      return event
    } else {
      return {}
    }
  } else {
    return null
  }
}

module.exports = fetchEvent
