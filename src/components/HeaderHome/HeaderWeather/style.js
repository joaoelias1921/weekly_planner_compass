import styled from 'styled-components';
import cloud from "../../../assets/cloud-icon.svg";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #222222;

    @media screen and (max-width: 768px){
        width: 100%;
        margin-bottom: 5%;
    }
`

export const StyledLocation = styled.p`
    font-size: 0.9rem;
`

export const StyledIconTemperature = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
`

export const StyledCloud = styled.div`
    background-image: url(${cloud});
    background-size: cover;
    background-repeat: no-repeat;
    width: 2.125rem;
    height: 2.125rem;
`

export const StyledTemperature = styled.p`
    font-size: 3rem;
`