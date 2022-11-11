import * as S from './styles';
import React from 'react';
import { DayTabs } from '../../components/DayTabs';

export function Dashboard() {
  return (
    <S.Container>
      <DayTabs />
    </S.Container>
  );
}
