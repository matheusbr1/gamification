
import styled, { css } from 'styled-components'

export const Container = styled.div`
   padding:3%;

   ${(props) => props.status === 'open' ? css`
         background: #F0B41A;
    ` : css`
        background: #7DE829;
    `}

    opacity: 0.7;
    border-radius: 10px;
    position: relative;

    span.close-open {
        position: absolute;
        top: 5px;
        right: 10px;
        cursor: pointer;
    }

    span.status {
        position: absolute;
        bottom: 5px;
        right: 10px;
    }

    span.creation {
        position: absolute;
        bottom: 5px;
        left: 10px;
        font-size: 0.8em;
    }

    span.deadline {
        position: absolute;
        bottom: 25px;
        left: 10px;
        font-size: 0.8em;
    }

    p.title {
        font-size: 25px;

        @media(max-width: 768px) {
            font-size: 20px;
        }
    }

    p.description {
        font-size: 15px;
        margin: 6px 0px;
        max-height: 65px;
        overflow:auto;

        @media(max-width: 768px) {
            margin: 6px 0px;
            max-height: 48px;
        }
    }
 `