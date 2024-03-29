import styled from "styled-components";

export const Wrapper = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0)41%, rgba(0, 0, 0, 0.65)100%), url(${({image}) => image});
    background-size: 100%, cover;
    background-position: top center;
    height: 100vh;
    position: relative;
    animation: animateHeroImage ease 1s;

    @keyframes animateHeroImage {
        from {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;
`;

export const Text = styled.div`
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 60px;
    margin-right: 20px;
    min-height: 100px;
    color: var(--white);

    h1 {
        font-size: var(--fontSuperBig);

        @media (max-width: 720px) {
            font-size: var(--fontBig);
        }
    }
    p {
        font-size: var(--fontMed);
        
        @media (max-width: 720px) {
            font-size: var(--fontSmall);
        }
    }

    @media (max-width: 720px) {
        max-width: 100%;
    }
`;