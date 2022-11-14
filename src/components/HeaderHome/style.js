import styled from 'styled-components';

export const StyledContainer = styled.header`
    width: 100%;
    height: 8.125rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);

    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 80vh;
        justify-content: flex-start;
        padding-bottom: 10%;
    }
`