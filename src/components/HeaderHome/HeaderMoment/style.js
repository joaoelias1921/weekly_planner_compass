import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 3.75;
    color: #3B3E45;
`

export const StyledClock = styled.p`
    font-size: 3rem;
    font-weight: 700;
`

export const StyledDate = styled.p`
    font-size: 1.3rem;
    font-weight: 400;

    @media screen and (max-width: 768px){
        margin-bottom: 30%;
    }
`