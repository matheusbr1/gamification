import React from 'react'

import { ButtonStyle } from './style'

const Button = ({ children, ...rest }) => {
    return (
        <ButtonStyle
            type='button'
            {...rest}
        >
            {children}
        </ButtonStyle>
    )
}

export default Button