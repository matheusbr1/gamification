import React from 'react'
import { Ring } from 'react-awesome-spinners'
import { Container } from './style'

const SpinnerLoading = () => {
    return (
        <Container>
            <Ring size={60} />
        </Container>
    )
}

export default SpinnerLoading