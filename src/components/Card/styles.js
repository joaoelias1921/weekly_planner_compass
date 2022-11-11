import styled from 'styled-components';

//Task card
export const Card = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    min-width: 512px;
    max-width: 512px;
    background: linear-gradient(112.83deg, rgba(228, 240, 248, 0.42) 0%, rgba(255, 255, 255, 0.336) 110.84%);
    border: 1px solid #FFFFFF;
    box-shadow: 0px 2px 5.5px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.5px);
    border-radius: 15px;
    margin: 0 16px;
`

export const CardTag = styled.div`
    border-radius: 15px 0 0 15px;
    min-width: 14px;
    background-color: ${props => props.color};
`

export const Description = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    margin: 12px 42px 12px 12px;
`

export const DeleteBtn = styled.button`
    position: absolute;
    right: 7px;
    top: 7px;
    font-weight: 800;
    color: #FFFFFF;
    background: #FF3D1F;
    border-radius: 4px;
    font-family: "Mulish";
    border: none;
    padding: 2.5px 6.5px;
    cursor: pointer;
`