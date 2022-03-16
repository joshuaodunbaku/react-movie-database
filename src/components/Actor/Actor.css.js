import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #333;
    text-align: center;
    padding: 5px;
    border-radius: 20px;
    color: var(--white);

    h3 {
        /* margin: 10px 0 0 0; */
    }
    p {
        margin: 5px 0;
    }
`;

export const Image = styled.img`
    border-radius: 20px;
    /* display: block; */
    width: 100%;
    /* height: 250px; */
    /* object-fit: cover; */
    @media (max-width: 760px) {
        height: 300px;
    }
`;
