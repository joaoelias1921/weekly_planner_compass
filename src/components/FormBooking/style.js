import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 20px;
`

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`

export const FormInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50%;

  input {
    width: 20%;
    margin-left: 5px;
    text-indent: 5px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #FECE00;
    outline: none;
  }

  select {
    width: 20%;
    margin-left: 5px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #FECE00;
  }

  .timeInput {
    width: 10%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 5%;
    flex-wrap: wrap;

    input, select {
      width: 100%;
      height: auto;
      margin: 0;
      margin-bottom: 2%;
      padding: 16px 12px;
    }

    .timeInput {
      width: 100%;
    }
  }
`

export const FormBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;

  button {
    border-radius: 10px;
    border: none;
    width: 120px;
    height: 32px;
    margin-left: 10px;
    outline: none;
    :hover{
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    margin-bottom: 5%;
    
    button {
      width: 48%;
      height: 42px;
      margin: 0;
    }
  }
`