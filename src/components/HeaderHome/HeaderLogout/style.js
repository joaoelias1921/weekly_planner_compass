import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    padding-right: 1.5rem;
    height: 4.25rem;

    @media screen and (max-width: 768px) {
        width: 100%;
        flex-direction: row;
        justify-content: space-evenly;
        padding: 0;
    }
`

export const StyledImage = styled.img`
    height: 1.5rem;

    @media screen and (max-width: 425px) {
        display: none;
    }
`