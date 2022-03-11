import React from 'react'

// Styles
import { Wrapper } from './Button.css'

const Button = ({text, callback}) => {
  return (
    <Wrapper type="button" onClick={callback}>
        {text}
    </Wrapper>
  )
}

export default Button;