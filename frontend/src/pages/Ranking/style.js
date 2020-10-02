import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;

    div.rankingCardsContainer {
        margin: 20px 0;
        height: 50%;
        display: grid;
        grid-gap: 2%;
        grid-template-columns: 49% 49%;
        grid-template-rows: repeat(5, 20%)
    }

    @media(max-width:768px) {
        div.rankingCardsContainer {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: unset;
        }
    }
    
`

export const RankingIcon = styled.img`
    width: 100px;
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