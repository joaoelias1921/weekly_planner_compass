import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 1px solid ${(props) => (props.error ? ' #E9B425' : '#E0E0E0')};
  padding: 5px;
  border-radius: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  input {
    border: 0;
    background-color: transparent;
    padding: 10px 15px;
    width: 85%;
    color: #e0e0e0;
    font-size: 1rem;
    outline: none;
    :-webkit-autofill {
      background-color: #ffffff;
      -webkit-text-fill-color: #ffffff;
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  transition: 0.5s transform;

  @media (max-width: 375px) {
    transform: translate(0);
  }

  ${(props) =>
    props.focused ? 'transform: translate(0)' : 'transform: translate(50px, 0)'}
`;
