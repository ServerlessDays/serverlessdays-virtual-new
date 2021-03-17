# serverlessdays-virtual-new
New ServerlessDays Virtual website. Built with Gatsby and GraphCMS. Based on the [Gatsby Strapi boilerplate](https://github.com/jeremylynch/gatsby-strapi-starter).

## Run locally

1. clone the repo
2. hit `npm i`
3. set up `GraphCMS` and `gatsby-config.js`. [Documentation](https://github.com/zilahir/react-landing-page/wiki/GraphCMS)
4. start local development environment by `gatsby develop`

## Hooks

Since `hooks` has been introduced to `react`, let's aim to use them.

For example:

```
import React, { useState } from 'react'

const [isVisible, setIsVisible] = useState(false)
```

and when you need to set its value

```
setIsVisible(true)
```

Read more about `react-hooks` in its [documentation](https://reactjs.org/docs/hooks-overview.html)

For `hooks` follow the naming conventions, as in the example above. If a variable needs to be set to a specific value, use the `set` in the naming, so it will be consequent, and readable.

## Project structure

Each component have to be in `components` folder.

1. in `src/components/<component-name>`, if it's a _core_ component.

2. in `pages/<page-name>`, if it's a page.

## Naming conventions

We are using `camelCase` naming conventions for both variable names, and `classNames`, for example:

`TopHeader`, `isVisible`, etc.

`styled-component` are part if this repository also, use it if a component requires styles related props, such as `color`, `width`, etc.

Example:

```
import styled from 'styled-components`

const DemoStyledComponent = styled.span`
    display: flex;
    &:before {
        content: '';
        width: ${props =>  props.width}px;
        ...
        ...
        ...
    }
`
```

And then referencing them as the following:

`<DemoStyledComponent width={200} />`

## Dependencies

Here's a list of _important_ dependencies we are using in this project:

* [`gatsbyJS`](https://www.gatsbyjs.org/)
* [Bootstrap](https://getbootstrap.com/)
* [Reactstrap](https://reactstrap.github.io/)
* [Reactstrap-form-fields](https://github.com/jeremylynch/reactstrap-form-fields)
* [React Icons](https://github.com/react-icons/react-icons)
* [Google Tag Manager](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-tagmanager)
* [gatsby-plugin-netlify](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-netlify)
* [gatsby-plugin-google-tagmanager](https://www.gatsbyjs.org/packages/gatsby-plugin-google-tagmanager/)
* [gatsby-plugin-facebook-pixel](https://www.gatsbyjs.org/packages/gatsby-plugin-facebook-pixel)
* [gatsby-plugin-manifest](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/)
* [gatsby-plugin-styled-components](https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/)

Please read the documentation of these packages if you are not familiar with them.
