import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    
    @media(max-width: 768px) {
        margin: 5px 0px;
    }
`
export const Bullet = styled.div`
    border-radius: 50%;
    height: 10px;
    width: 10px;
    background-color: black;
    margin-right: 5px;
    cursor: pointer;
`