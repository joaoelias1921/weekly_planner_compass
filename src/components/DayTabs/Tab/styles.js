import styled  from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    width: 14%;
    height: 33px;
    border-radius: 9px 9px 0px 0px;
    padding-left: 6px;
    cursor: pointer;
    transition: 240ms ease-in-out;
    box-shadow: ${props => (props.selected ? "gray 0px 4px 4px" : "unset")}
`;