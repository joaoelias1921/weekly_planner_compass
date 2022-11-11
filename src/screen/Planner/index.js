import * as S from './styles';
import React, { useState } from 'react';
import { DayTabs } from '../../components/DayTabs';
import { Tasks } from '../../components/Tasks';

export function Dashboard() {
  
  const WEEKDAY_JSON_MODEL = [
    {
      time: '10h30m',
      color: 'red',
      tasks: [
        {description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      ]
    },
    {
      time: '09h30m',
      color: 'red',
      tasks: [
        {description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      ]
    },
    {
      time: '09h45m',
      color: 'red',
      tasks: [
        {description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      ]
    }
  ]   

  const [weekDayTasks, setWeekDayTasks] = useState(WEEKDAY_JSON_MODEL);

  return (
    <S.Container>
      {/* Header Component */}
      {/* Form Component */}
      
      <S.TabContainer>
        <DayTabs setWeekDayTasks={setWeekDayTasks} />
      </S.TabContainer>

      <Tasks tasks={weekDayTasks} />
    </S.Container>
  );
}
