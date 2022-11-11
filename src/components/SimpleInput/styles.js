import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  border: 1px solid #ffffff;
  padding: 5px;
  border: 1px solid ${(props) => (props.error ? ' #E9B425' : '#E0E0E0')};
  border-radius: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 25px;

  input {
    border: 0;
    background-color: transparent;
    padding: 10px 15px;
    width: 100%;
    color: #e0e0e0;
    font-size: 12px;
    outline: none;
    :-webkit-autofill {
      background-color: #ffffff;
      -webkit-text-fill-color: #ffffff;
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`;

export const ContainerInput = styled.div`
  width: 471px;
  display: flex;
  align-items: center;
`;
export const Labels = styled.p`
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  padding-top: 11px;
  width: 100px;
  height: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;
