const schema = `
type Image {
  src: String
  alt: String
}

type Site {
  id: ID
  title: String
  url: String
  description: String
  lang: String
  cover_image: String
  icon: String
  twitter: String
  image: Image
}

type Milestone {
  milestone: String
  date: String
}

type Sponsor {
  name: String
  logo: Image
  url: String
  tier: String
}

type Event {
  id: ID
  date: String
  startTimes: String
  live: Boolean
  current: Boolean
  timeline: [Milestone]
  sponsors: [Sponsor]
}

type Query {
  site(siteId: String): Site
  event(eventId: String, siteId: String): Event
}
`

export default schema
