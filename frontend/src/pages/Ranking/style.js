import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;

    div.rankingCardsContainer {
        display: flex;
        flex-wrap: wrap;
        margin: 20px 0;
        justify-content: space-evenly;
        width: 660px;
        height: 430px;
    }

    @media(max-width:768px) {
        div.rankingCardsContainer {
            display: flex;
            width: 95%;
        }
    }
`

export const Avatar = styled.img`
    position: absolute;
    left: 5px;
    top: 8px;
    width: 100px;

    @media(max-width:768px) {
        width: 80px;
    }
`