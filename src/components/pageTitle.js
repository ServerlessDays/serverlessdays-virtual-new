import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  background: ${props => props.theme.lightGradientBackground};
  color: white;
  padding: 8rem 0;
  text-align: center;
`

let PageTitle = ({title}) => (
  <Background>
    <h1>{title}</h1>
  </Background>
)

export default PageTitle
