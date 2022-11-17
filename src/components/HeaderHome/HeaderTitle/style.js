import styled from 'styled-components';

export const StyledContainer = styled.div`
    padding-left: 1.5rem;
    background-color: #000;
    border-radius: 0 1rem 1rem 0;
    width: 30%;
    height: 65%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-size: 1.3rem;
        color: #FFF;
    }

    p {
        color: #FFF;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 16vh;
        border-radius: 0px;
        margin-bottom: 5%;
    }
`