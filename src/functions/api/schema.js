const schema = `
  type Site {
    title: String
    url: String
    description: String
    lang: String
    cover_image: String
    icon: String
  }

  type Query {
    site(siteId: String): Site
  }
`

export default schema
