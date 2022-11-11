import styled from "styled-components";

export const Tasks = styled.div`

    min-width: 100%;
    overflow: scroll;
    padding: 1.5rem;
    flex-grow: 1;
`
export const Time = styled.div`
    background-color: ${(props) => props.color};
    box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
    min-width: 85px;
    height: 85px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 18px;
`
export const Title = styled.h2`
    font-weight: 600;
    line-height: 20px;
    font-size: 17px;
`

export const TimeRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 14px;
`
export const TaskContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
`
export const Line = styled.div`
    position: absolute;
    height: 5px;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    &:before{
        content: '';
        display: inline-block;
        min-width: 35px;
        min-height: 35px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
    background: rgba(0, 0, 0, 0.7);

        transform: translate(-60%, -50%);
    }
`