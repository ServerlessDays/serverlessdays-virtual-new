const event = async (args, context) => {
  let eventData = {}
  try {
    const { eventId, siteId } = args
    const eventKey = `${siteId}-event-${eventId}`
    const eventDataString = await SITEKV.get(eventKey)
    eventData = JSON.parse(eventDataString)
  } catch (error) {
    console.error(error)
    eventData[error] = error
  }

  return eventData
}
export { event }
