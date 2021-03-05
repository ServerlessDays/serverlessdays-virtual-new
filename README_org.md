# serverlessdays-virtual-new
New ServerlessDays Virtual website. Built with Gatsby and GraphCMS. Based on the [react-landing-page starter](https://github.com/zilahir/react-landing-page).

## Run locally

1. clone the repo
2. hit `npm i`
3. set up `GraphCMS` and `gatsby-config.js`. [Documentation](https://github.com/zilahir/react-landing-page/wiki/GraphCMS)
4. start local development environment by `gatsby develop`

## List of components

| task                | status             | props                                                                                                                       |
| ------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `<HeaderH1>`        | :white_check_mark: | `text:string`, `className:string`                                                                                           |
| `<HeaderH2>`        | :white_check_mark: | `text:string`, `className:string`                                                                                           |
| `<Button>`          | :white_check_mark: | `bgColor: string`, `className: string`, `onClick: func`, `children: React.node`, `isAnimation: boolean`                     |
| `<Paragraph>`       | :white_check_mark: | `text: String`, `className: String`                                                                                         |
| `<TestimonialItem>` | :white_check_mark: | `index: Number`, `src: String`, `alt: String`, `className: String`                                                          |
| `<Map />`           | :white_check_mark: | _TODO:_ `graphql`                                                                                                           |
| `<Team>`            | :white_check_mark: | _TODO:_ `graphql`                                                                                                           |
| `<Phone />`         | :white_check_mark: | `children: React.node`, `className: String`, `animationEnd: String`, `secondaryImage: String`, `secondaryImageZoom: Number` |
| `<Macbook />`       | :white_check_mark: | `children: React.node`, `barTitle: String`, `frameUrl: String`                                                              |

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

1. in `common/<component-name>`, if it's a _common_ component.

2. in `pages/<page-name>`, if it's a page.

## Folder structure

The structure of the folders tried to be kept as consistent and self explanary explanatory as possible. Everything goes where it belongs.

```markdown
├── App.js
├── App.test.js
├── actions
│ ├── actionTypes.js
│ └── test.js
├── assets
│ └── img
├── components
│ ├── Footer
│ │ ├── Footer.module.scss
│ │ └── index.js
│ └── common
│ ├── Button
│ │ ├── Button.module.scss
│ │ └── index.js
├── reducers
│ └── test.js
├── pages
│ ├── Home
│ │ ├── Home.module.scss
│ │ └── index.js
└── styles
├── mixins
│ ├── Button.scss
└── variables.scss
```

The `filenames` and `foldernames` should be in the following format:

`<SomeComponent>` / `index.js` / `SomeComponent.module.scss`

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

1. [`gatsbyJS`](https://www.gatsbyjs.org/)
1. [`framer-motion`](https://github.com/framer/motion)
1. [`react-waypoint`](https://github.com/civiccc/react-waypoint)
1. [`redux`](https://github.com/reduxjs/redux)
1. [`redux-thunk`](https://github.com/reduxjs/redux-thunk) (_not in use currently_)
1. [`styled-components`](https://github.com/styled-components/styled-components)
1. [`react-parallax`](https://github.com/RRutsche/react-parallax)
1. [`react-responsive`](https://github.com/contra/react-responsive)
1. [`react-map-gl`](https://github.com/uber/react-map-gl#readme)

Please read the documentation of these packages if you are not familiar with them.
