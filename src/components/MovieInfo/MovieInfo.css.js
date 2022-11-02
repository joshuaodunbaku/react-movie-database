import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
    background: ${({ backdrop, poster, browserWidth }) => backdrop
        ? `url("${IMAGE_BASE_URL}${BACKDROP_SIZE}${(browserWidth > 768) ? backdrop : poster}")`
        : "#000000"};
    background-size: cover;
    background-position: center;
    animation: animateMovieInfo 1s;
    padding: 0 20px;

    @keyframes animateMovieInfo {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.7);
    padding: 20px;
    border-radius: 30px;

    @media (max-width: 768px) {
        display: block;
        max-height: none;
        padding: 10px
    }
`;

export const Text = styled.div`
    width: 100%;
    padding: 20px 40px;
    color: var(--white);
    z-index: 1;

    .movie-info {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .rating-directors {
        display: flex;
    }
    .released {
        margin-top: 20px;
    }
    .score {
        /* width: 35px; */
        /* background-color: #fff; */
        color: #000;
        /* font-weight: bold; */
        padding: 5px;
        color: white;
        font-family: elephant, 'Arial Narrow Bold', sans-serif;
        /* border-radius: 50%;
        border: #333 1px solid;
        box-shadow: 0px 0px 5px white; */
    }
    .director {
        margin: 0 0 0 40px;
    }
    h1 {
    @media (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }

`;