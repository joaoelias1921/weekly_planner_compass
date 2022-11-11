import { useEffect, useState } from 'react';
import * as S from './styles';
import { Tab } from './Tab';

export function DayTabs({setWeekDayTasks}) {
  const [selectedWeekDay, setSelectedWeekDay] = useState("Monday");

  const weekDays = [
    { weekDay: "Monday", color: "#FF0024" },
    { weekDay: "Tuesday", color: "#FF8000" },
    { weekDay: "Wednesday", color: "#FFCE00" },
    { weekDay: "Thursday", color: "#FF0024B3" },
    { weekDay: "Friday", color: "#FF8000B3" },
    { weekDay: "Saturday", color: "#FFCE00B3" },
    { weekDay: "Sunday", color: "#FF002480" }
  ];

  useEffect(() => {
    setWeekDayTasks({
      color:  weekDays.filter(day => day.weekDay == selectedWeekDay)[0].color,
      allTasks: [...JSON.parse(localStorage.getItem(selectedWeekDay)) || []]
  })
  }, [selectedWeekDay])

  return (
    <S.Container>
      {console.log(weekDays.filter(day => day.weekDay == selectedWeekDay))}
      {
        weekDays.map((day) => (
          <Tab
            color={day.color}
            weekDays={weekDays}
            onClick={() => {
              setSelectedWeekDay(day.weekDay)
            }}
            selected={selectedWeekDay === day.weekDay}
          >
            {day.weekDay}
          </Tab>
        ))
      }
    </S.Container>
  );
}
