import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    height: 2.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    border 1px solid transparent;
    border-radius: 0.13rem;
    padding: 0.13rem;

    &:hover {
        cursor: pointer;
        border 1px solid #000;
    }
`

export const StyledIcon = styled.img`
    position: absolute;
    width: 1.3rem;
    height: 1.3rem;
    top: -0.13rem;
    right: 50%;
    transform: translate(50%,-50%);
`

export const StyledParagraph = styled.p`
    position: relative;
    font-size: 1.063rem;
    display: flex;
`