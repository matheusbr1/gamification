import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 320px;
    min-width: 320px;
    height: 100px;
    border-radius: 25px;
    background: #C4C4c4;
    padding: 10px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));

    img.userIcon{
        width: 80px;
    }

    div.userInfos {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    @media(max-width:768px) {
        margin-bottom: 5px;
        min-width: 250px;
        width:300px;
    }
`