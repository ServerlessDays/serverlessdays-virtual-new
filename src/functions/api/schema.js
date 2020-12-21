const schema = `
  type Image {
    src: String
    alt: String
  }

  type Site {
    title: String
    url: String
    description: String
    lang: String
    cover_image: String
    icon: String
    twitter: String
    image: Image
  }

  type Query {
    site(siteId: String): Site
  }
`

export default schema
