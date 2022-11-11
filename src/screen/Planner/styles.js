import styled from 'styled-components';
import mainDash from '../../assets/logoUolNew.png'
export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;


export const Container = styled.main`
display: flex;
flex-direction: column;
height: 100vh;
padding: 1.5rem;
background: url('${mainDash}');
background-repeat: no-repeat;
background-position: bottom right;
background-size: 40%;
`