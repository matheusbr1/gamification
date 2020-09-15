import styled from 'styled-components'

export const Container = styled.div`

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;

    h1 {
        margin-bottom: 50px;
    }

    div {
        max-width: 700px;
        max-height: 400px;
        img {
            max-width: calc(100% / 6);
        }
    }

    div.bullets {
        display: flex;
    }

    div.avatars {
        margin-bottom: 50px;
    }
`