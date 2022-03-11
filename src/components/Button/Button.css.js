import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    background-color: var(--darkGrey);
    width: 20%;
    min-width: 200px;
    height: 50px;
    margin: 0 auto;
    color: var(--white);
    font-size: 1.4rem;
    border-radius: 30px;
    border: none;
    transition: all 1s ease-out;
    cursor: pointer;
    :hover {
        background-color: grey;
        font-weight: bold;
    }
`;