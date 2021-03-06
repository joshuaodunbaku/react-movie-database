import styled from "styled-components";

export const Wrapper = styled.footer`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--darkGrey);
    min-height: 100px;
    p {
        /* margin: 0; */
        @media (max-width: 400px) {
            font-size: 4vw;
        }
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
    color: white;
    margin: 10px 0;

    i {
        padding: 0 10px;
    }
`;