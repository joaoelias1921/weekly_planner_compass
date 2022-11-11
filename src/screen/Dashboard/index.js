import React, { useState } from "react";
import { Tasks } from '../../components/Tasks';
import { Container } from "./styles";

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
        <Container>
            {/* Header Component */}
            {/* Form Component */}
            {/* Tabs Component */}
            <Tasks tasks={weekDayTasks} />
        </Container>
    )
}