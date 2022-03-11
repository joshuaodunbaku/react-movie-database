import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--darkGrey);
    padding: 20px;
    height: 100px;
`;

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    height: 55px;
    width: 100%;
    background: #333;
    border-radius: 40px;
    color: var(--white);

    img {
        position: absolute;
        top: 14px;
        left: 15px;
        width: 30px;
    }
    input {
        position: absolute;
        left: 0;
        top: 0;
        height: 40px;
        width: 100%;
        margin: 8px 0;
        padding-left: 50px;
        font-size: var(--fontBig);
        border-radius: 40px;
        color: var(--white);
        background-color: transparent;
        border: none;
        outline: none;
    }
`;
