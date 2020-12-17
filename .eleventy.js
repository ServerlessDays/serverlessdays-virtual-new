const purgecss = require('@fullhuman/postcss-purgecss')
const tailwindcss = require('tailwindcss')
const tailwindConfig = require('./tailwind.config.js')
const postcss = require('postcss')
const { JSDOM } = require('jsdom')
const fs = require('fs')
const CleanCSS = require('clean-css')
const pluginRSS = require('@11ty/eleventy-plugin-rss')
const ghostContentAPI = require('@tryghost/content-api')

const api = new ghostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: 'v2'
})

// Strip Ghost domain from urls
const stripDomain = url => {
  return url.replace(process.env.GHOST_API_URL, '')
}

const cssFiles = [
  './src/_includes/css/theme.css',
  './src/_includes/css/content.css',
  './src/_includes/css/kg.css'
]

const cleanCSSOptions = {
  level: {
    1: {
      specialComments: '0'
    },
    2: {
      all: true,
      removeDuplicateRules: true
    }
  }
}

const insertCss = async (html, css) => {
  const dom = new JSDOM(html)

  const { document } = dom.window

  let head = document.getElementsByTagName('head')[0]
  let style = document.createElement('style')
  style.innerHTML = css
  head.appendChild(style)

  return dom.serialize()
}

module.exports = function (eleventyConfig) {
  // Copy the `img/` directory

  eleventyConfig.addPassthroughCopy('src/img')
  eleventyConfig.addPassthroughCopy('src/assets')
  eleventyConfig.addPassthroughCopy('src/js')

  eleventyConfig.addTransform('purgeCSS', async (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      const htmlContent = {
        extension: 'html',
        raw: content
      }
      const purgecssConfig = {
        content: [htmlContent],
        defaultExtractor: content => {
          // Capture as liberally as possible, including things like `h-(screen-1.5)`
          const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

          // Capture classes within other delimiters like .block(class="w-1/2") in Pug
          const innerMatches =
            content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

          return broadMatches.concat(innerMatches)
        }
      }

      const cssProcessor = await postcss([
        tailwindcss(tailwindConfig),
        purgecss(purgecssConfig)
      ])

      let cssMerge = ''

      for (let i = 0; i < cssFiles.length; i++) {
        const css = fs.readFileSync(cssFiles[i], 'utf-8')

        const rootCSS = await cssProcessor.process(css, { from: cssFiles[i] })
        cssMerge = cssMerge.concat(rootCSS.css)
      }

      const cssMin = new CleanCSS(cleanCSSOptions).minify(cssMerge).styles
      return await insertCss(content, cssMin)
    } else {
      return content
    }
  })

  eleventyConfig.addPlugin(pluginRSS)

  eleventyConfig.addFilter('getReadingTime', text => {
    const wordsPerMinute = 200
    const numberOfWords = text.split(/\s/g).length
    return Math.ceil(numberOfWords / wordsPerMinute)
  })

  // Date formatting filter
  eleventyConfig.addFilter('htmlDateString', dateObj => {
    return new Date(dateObj).toISOString().split('T')[0]
  })

  eleventyConfig.addCollection('pages', async function (collection) {
    collection = await api.pages
      .browse({
        include: 'authors',
        limit: 'all'
      })
      .catch(err => {
        console.error(err)
      })

    collection.map(page => {
      page.url = stripDomain(page.url)
      page.primary_author.url = stripDomain(page.primary_author.url)
      page.authors = page.authors.map(author => {
        author.url = stripDomain(author.url)
        return author
      })

      // Convert publish date into a Date object
      page.published_at = new Date(page.published_at)
      page.date = new Date(page.published_at)
      return page
    })

    return collection
  })

  // Get all posts
  eleventyConfig.addCollection('posts', async function (collection) {
    collection = await api.posts
      .browse({
        include: 'tags,authors',
        limit: 'all'
      })
      .catch(err => {
        console.error(err)
      })

    collection.forEach(post => {
      post.url = stripDomain(post.url)
      post.primary_author.url = stripDomain(post.primary_author.url)
      post.authors = post.authors.map(author => {
        author.url = stripDomain(author.url)
        return author
      })
      post.tags.map(tag => (tag.url = stripDomain(tag.url)))

      // Convert publish date into a Date object
      post.published_at = new Date(post.published_at)
    })

    // Bring featured post to the top of the list
    collection.sort((post, nextPost) => nextPost.featured - post.featured)

    return collection
  })

  eleventyConfig.addCollection('featured', async function (collection) {
    collection = await api.posts
      .browse({
        include: 'tags,authors',
        limit: 'all',
        featured: true
      })
      .catch(err => {
        console.error(err)
      })

    collection.forEach(post => {
      post.url = stripDomain(post.url)
      post.primary_author.url = stripDomain(post.primary_author.url)
      post.authors = post.authors.map(author => {
        author.url = stripDomain(author.url)
        return author
      })
      post.tags.map(tag => (tag.url = stripDomain(tag.url)))

      // Convert publish date into a Date object
      post.published_at = new Date(post.published_at)
    })

    // Bring featured post to the top of the list
    collection.sort((post, nextPost) => nextPost.featured - post.featured)

    return collection
  })

  // Get all authors
  eleventyConfig.addCollection('authors', async function (collection) {
    collection = await api.authors
      .browse({
        limit: 'all'
      })
      .catch(err => {
        console.error(err)
      })

    // Get all posts with their authors attached
    const posts = await api.posts
      .browse({
        include: 'authors',
        limit: 'all'
      })
      .catch(err => {
        console.error(err)
      })

    // Attach posts to their respective authors
    collection.forEach(async author => {
      const authorsPosts = posts.filter(post => {
        post.url = stripDomain(post.url)
        return post.primary_author.id === author.id
      })
      if (authorsPosts.length) author.posts = authorsPosts

      author.url = stripDomain(author.url)
    })

    return collection
  })

  // Get all tags
  eleventyConfig.addCollection('tags', async function (collection) {
    collection = await api.tags
      .browse({
        include: 'count.posts',
        limit: 'all'
      })
      .catch(err => {
        console.error(err)
      })

    // Get all posts with their tags attached
    const posts = await api.posts
      .browse({
        include: 'tags,authors',
        limit: 'all'
      })
      .catch(err => {
        console.error(err)
      })

    // Attach posts to their respective tags
    collection.forEach(async tag => {
      const taggedPosts = posts.filter(post => {
        post.url = stripDomain(post.url)
        post.primary_author.url = stripDomain(post.primary_author.url)
        if (post.authors) {
          post.authors.forEach(postAuthor => {
            postAuthor.url = stripDomain(postAuthor.url)
          })
        }
        const tagExists = post.tags.filter(tagSlug => {
          return tagSlug.slug === tag.slug
        })
        return tagExists.length ? tagExists.length > 0 : false
      })
      if (taggedPosts.length) tag.posts = taggedPosts

      tag.url = stripDomain(tag.url)
    })

    return collection
  })

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: 'dist'
    },
    markdownTemplateEngine: 'njk'
  }
}
