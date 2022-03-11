import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all 1s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumb 400ms;
    :hover{
        opacity: 0.8;
    }

    @keyframes animateThumb {
        from {
            opacity: 0;
            border-radius: 50px;
        }
        to {
            opacity: 1;
        }
    }

`;