import styled from "styled-components";

export const Wrapper = styled.footer`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--darkGrey);
    color: var(--white);
    height: 80px;
    p {
        margin: 0;
    }
    a {
        color: var(--white);
    }
    a:hover {
        font-weight: bold;
    }
`;

export const Contacts = styled.div`
    display: flex;
    color: red;
`;