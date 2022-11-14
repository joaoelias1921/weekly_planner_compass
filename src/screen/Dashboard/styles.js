import styled from 'styled-components';
import mainDash from '../../assets/logoUolNew.png'

export const PlannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1.5rem;
  background: url('${mainDash}');
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 30%;
`
