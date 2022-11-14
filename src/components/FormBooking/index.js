import * as S from './style';
import React, {useEffect, useState} from "react";
import { useListBooking } from '../Context/ListBooking'
import { useSelectWeekDay } from '../Context/SelectWeekDay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
const FormBooking = () => {

   
  const [description, setDescription] = useState();
  const [weekDay, setWeekDay] = useState('Monday');
  const [time, setTime] = useState('10h30m');
  const { selectedWeekDay } = useSelectWeekDay();
  const { listBooking, setListBooking } = useListBooking();
  const [count, setCount] = useState(6)

  const handleClickAdd = () => {
    setCount(count + 1)
    try {
      if(description != null){

        setListBooking( current => [...current, {id:count,description, weekday:weekDay, time}])
        setDescription('')
      }else{
        alert('Required field!')
      }
       
    } catch (error) {
      alert('Add booking error!')
    }
  }

  const handleClickDelete = () => {
    const newList = listBooking.filter((person) => person.weekday !== selectedWeekDay);

    setListBooking( newList );
  }

  const weekly = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  return(
    <React.Fragment>
      <S.Container>
        <S.Form>
          
          <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
            placeholder='Task or issue'
          /> 
        
          <select value={weekDay} onChange={e => setWeekDay(e.target.value)}>
            {weekly.map(value => (
              <option value={value}>{value[0].toUpperCase() + value.substring(1)}</option>
            ))}
  
          </select>

        <select value={time} onChange={e => setTime(e.target.value)}>
          <option value="10h30m">10:30</option>
          <option value="11:00">11:00</option>
          <option value="11:30">11:30</option>
          <option value="12:00">12:00</option>
          <option value="12:30">12:30</option>
          <option value="13:00">13:00</option>
          <option value="13:30">13:30</option>
        </select>
       
        
        <S.Button>
          <button style={{backgroundColor: '#4CAF50', color: 'white' }} onClick={handleClickAdd}>
          <FontAwesomeIcon icon={faPlus} /> Add to calendar</button>
          <button style={{backgroundColor: '#F44336', color: 'white' }}  onClick={handleClickDelete}>
          <FontAwesomeIcon icon={faMinus} /> Delete All</button>
        </S.Button>
        </S.Form>
      </S.Container>
    </React.Fragment>
  )
}

export default FormBooking;