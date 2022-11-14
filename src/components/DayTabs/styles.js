import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  align-self: flex-end;
  justify-content: space-between;
  font-family: "Mulish", sans-serif;
  font-weight: 600;
  
  @media screen and (max-width: 768px) {
    align-self: center;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
