
import styled, { css } from 'styled-components'

export const Container = styled.div`
   /* border: solid 2px; */
   padding:2%;

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
    }

    p.title {
        font-size: 25px;
    }

    p.description {
        font-size: 15px;
        margin: 10px 0px;

        max-height: 50px;

        overflow:auto;
    }
 `