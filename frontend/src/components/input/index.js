import React, { useCallback, useState } from 'react'

import { InputStyle } from './style'

const Input = ({ ...rest }) => {

    const [isFocused, setIsFocused] = useState(false)

    const handleInputFocus = useCallback(() => {
        setIsFocused(true)
    }, [])

    return (
        <InputStyle
            OnFocus={handleInputFocus}
            isFocused={isFocused}
            {...rest} />
    )
}

export default Input