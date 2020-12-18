const site = async (args, context) => {
  let siteData = {}
  try {
    const { siteId } = args
    const siteDataString = await SITEKV.get(siteId)
    siteData = JSON.parse(siteDataString)
  } catch (error) {
    console.error(error)
  }

  return siteData
}
export { site }
