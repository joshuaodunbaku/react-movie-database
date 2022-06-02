import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #333;
    text-align: center;
    padding: 5px;
    border-radius: 20px;
    color: var(--white);
    p {
        margin: 5px 0;
    }
`;

export const Image = styled.img`
    border-radius: 20px;
    width: 100%;
    @media (max-width: 760px) {
        height: auto;
    }
`;
