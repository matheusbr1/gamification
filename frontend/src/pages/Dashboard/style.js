import styled from 'styled-components'
import { IoMdExit, IoIosCreate } from 'react-icons/io'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    max-height: 1000px;

    @media screen and (max-width:768px) {
        height: unset;
        max-height: unset;
        padding: 4% 0;
        overflow-y: auto;
    }
`
export const Challenges = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 480px;

    div.challengeBox {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 50% 50%;
        overflow: hidden;
        grid-gap: 3% 1%;
        width: 768px;
        height: 350px;
        padding: 2%;
    }

    @media(max-width: 768px) {
        
        margin: 15px 0px;
        height: unset;
        width: 100%;

        h2 {
            margin: 10% 0;
        }

        div.challengeBox {
            display: flex;
            flex-direction: column;
            
            width: 100%;
            height: unset;

            div {
                margin-top: 2%;
                min-height: 140px;
            }

            div:nth-child(1) {
                margin-top: 0%;
            }
        } 
    }
    
`

export const RankingIcon = styled.img`
    position: absolute;
    left: 5px;
    top: 8px;
    width: 100px;
    
    @media(max-width: 768px) {
        width: 20%;
    }
`

export const UserDetails = styled.div`

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 768px;

    img {
        max-width: 200px;
        width : 18%
    }

    div {
        width : 60%;
        padding: 20px 50px;
        border-radius:10px;
        
        background: #C4C4C4;

        p {
            font-size: 30px;
        }   

        > span {
            margin-right: 5%;
        }

        span {
            display: inline-block;
            margin-top: 10px;
            font-size: 20px;
        }
    }

     @media screen and (max-width:768px) {
        flex-direction: column;
        width: 100%;

        img {
            width : 30%
        }
        div {
            text-align: center;
            width : 95%;
            
            p, span{
                font-size: 5vw;
            } 
        }
     }

`

export const LogoutIcon = styled(IoMdExit)`
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 50px;
`

export const CreateChallengeIcon = styled(IoIosCreate)`
    position: absolute;
    top: 13px;
    right: 68px;
    font-size: 50px;
`