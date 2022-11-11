import * as S from './styles';
import React, { useState } from 'react';
import { DayTabs } from '../../components/DayTabs';
import { Tasks } from '../../components/Tasks';

export function Dashboard() {
  
  const WEEKDAY_JSON_MODEL = [
    {
      time: '07h30m',
      tasks: [
        {description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      ]
    },
    {
      time: '09h30m',
      tasks: [
        {description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      ]
    },
    {
      time: '09h45m',
      tasks: [
        {description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      ]
    },
    {
      time: '09h45m',
      tasks: [
        {description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      ]
    },
    {
      time: '09h45m',
      tasks: [
        {description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      ]
    }
  ]
  


  console.log(JSON.stringify(WEEKDAY_JSON_MODEL));
  const [weekDayTasks, setWeekDayTasks] = useState([]);

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
