import styled from "styled-components";

export const Wrapper = styled.div `
    background: var(--darkGrey);
    padding: 0 20px;
    /* height: 150px; */
`;

export const Content = styled.div `
    display: flex;
    flex-wrap: wrap;
    // flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: auto;
    @media (max-width: 500px) {
        justify-content: space-around;
    }
`;

export const LogoImg = styled.img `
    max-width: 220px;
    @media (max-width: 500px) {
        width: 100px;
        // margin:auto;
    }
`;

export const TMDBLogoImg = styled.img `
    max-width: 200px;
    @media (max-width: 500px) {
        width: 80px;
    }
`;