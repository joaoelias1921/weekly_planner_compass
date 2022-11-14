import React, {useEffect, useState} from 'react';

import * as s from './styles.js';
import { Card } from '../Card';
import { useListBooking } from '../Context/ListBooking';
import { useSelectWeekDay } from '../Context/SelectWeekDay';
export const Tasks = (props) => {

  const { listBooking } = useListBooking();
  const { selectedWeekDay } = useSelectWeekDay();
  const [ filterList, setFilterList] = useState([])
 
  let {color, allTasks} = props.tasks
 
  function groupBy (array, key) {
    return array.reduce((acc, item) => ({
        ...acc,
        [item[key]]: [...(acc[item[key]] ?? []), item],
      }),
    {})
  }
  useEffect( () => {
    const filter = listBooking.filter(value => value.weekday === selectedWeekDay)
 
    const groupedd = groupBy(filter,'time')
  
    setFilterList(Object.entries(groupedd))

  }, [listBooking, selectedWeekDay])

  return (
    <s.Tasks>
      <s.TimeRow>
        <s.Time color='#FFFFFF'>
          Time
        </s.Time>
      </s.TimeRow>
 
        {allTasks &&
    filterList.map((value, index) => (
            <s.TimeRow key={index}>
              <s.Time color={(value[1].length == 1 ? color : 'rgba(0, 0, 0, 0.7);')}>
                <s.Title> {value[0]}</s.Title>
              </s.Time>
               <s.TaskContainer>
                {value[1].length > 1 &&
                   <s.Line />
                 }
                 {
                   value[1].map(({description, id}, index) => (
                     <>
                       <Card id={id} description={description} color={(value[1].length == 1 ? color : 'rgba(0, 0, 0, 0.7);')} />
                     </>
                   ))
                 }
               </s.TaskContainer>

            </s.TimeRow>

          ))

        }
    </s.Tasks>
  )
}
