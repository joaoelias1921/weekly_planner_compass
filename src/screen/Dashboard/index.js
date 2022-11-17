import * as S from './styles';
import React, { useState } from 'react';
import { DayTabs } from '../../components/DayTabs';
import { Tasks } from '../../components/Tasks';
import { Header } from '../../components/HeaderHome'
import FormBooking from '../../components/FormBooking';

export function Dashboard() {
  
  const [weekDayTasks, setWeekDayTasks] = useState([]);

  return (
    <S.PlannerContainer>
      <Header />
      <S.Container>

        <FormBooking />
        <DayTabs setWeekDayTasks={setWeekDayTasks} />

        <Tasks tasks={weekDayTasks} />
      </S.Container>
    </S.PlannerContainer>

  );
}
