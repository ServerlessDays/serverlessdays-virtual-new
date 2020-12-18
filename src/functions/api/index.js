import { server } from './graphqlServer.js'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest (request) {
  const headers = {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*'
  }

  let body = ''
  let status = 400
  if (request.method === 'GET' || request.method === 'POST') {
    const response = await server(request)
    if (response.body) {
      body = response.body
    }

    if (response.error) {
      const errorMessage =
        response.error.name === 'Error'
          ? response.error.message
          : `${response.error.name} - ${response.error.message}`
      console.log(errorMessage)
      body['error'] = errorMessage
      if (!response.body) status = 400
    }
  }

  return new Response(JSON.stringify(body), { headers })
}
