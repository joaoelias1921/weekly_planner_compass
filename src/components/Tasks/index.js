import React from 'react';

import * as s from './styles.js';
import { Card } from '../Card';

export const Tasks = ({tasks}) => {


  return (
    <s.Tasks onClick={()=> alert('tet')}>
      <s.TimeRow>
        <s.Time color='#FFFFFF'>
          Time
        </s.Time>
      </s.TimeRow>
        {
          tasks.map(({time, tasks, color}, index) => (
            <s.TimeRow>
              <s.Time color={(tasks.length == 1 ? color : 'rgba(0, 0, 0, 0.7);')}>
                <s.Title>{time}</s.Title>
              </s.Time>
              <s.TaskContainer>
                {tasks.length > 1 &&
                  <s.Line />
                }
                {
                  tasks.map(({description}, index) => (
                    <>
                      <Card description={description} color={(tasks.length == 1 ? color : 'rgba(0, 0, 0, 0.7);')} />
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
