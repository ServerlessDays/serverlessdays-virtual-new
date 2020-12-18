import { parse, execute, buildSchema } from 'graphql'
import resolvers from './resolvers/index.js'
import rawSchema from './schema.js'

const schema = buildSchema(rawSchema)

const getQueryVariables = async request => {
  let response = {}
  try {
    // console.log(JSON.stringify(request))
    if (request.method === 'GET') {
      const requestParams = new URL(request.url).searchParams
      response.query = requestParams.get('query')
      response.variables = requestParams.get('variables')
    } else {
      if (request.method === 'POST') {
        const contentType = request.headers.get('content-type') || ''

        if (contentType.includes('application/json')) {
          const json = await request.json()
          response = json
        }
      }
    }
    if (
      typeof response.query === 'undefined' ||
      response.query === null ||
      response.query === ''
    ) {
      throw new Error('No query specified')
    }
  } catch (error) {
    response['error'] = error
  }
  return response
}

const server = async request => {
  const response = {
    body: false,
    error: false
  }
  try {
    const context = { siteId: 'ServerlessDaysV' }

    const { query, variables, error: requestError } = await getQueryVariables(
      request
    )

    if (requestError) {
      throw new Error(requestError)
    }
    const queryDocument = parse(query)
    if (queryDocument) {
      response.body = await execute(
        schema,
        queryDocument,
        resolvers,
        context,
        variables
      )
      console.log(response.body)
    }
  } catch (error) {
    console.log(error)
    response.error = error
  }
  // console.log(response)
  return response
}

export { server }
