import { server } from '../../../src/functions/api/graphqlServer.js'

const testGraphql = async () => {
  try {
    const request = {
      body: {
        query:
          'query getSite ($siteId: String) { site (siteId: $siteId) { title url } }',
        variables: {
          siteId: 'ServerlessDaysVirtual'
        }
      }
    }

    const serverResponse = await server(request)
    console.log(serverResponse)
  } catch (error) {
    console.log(error)
  }
}

testGraphql()
