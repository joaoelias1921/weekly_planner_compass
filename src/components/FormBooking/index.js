import * as S from './style';
import React, { useState } from "react";
import { useListBooking } from '../Context/ListBooking';
import { useSelectWeekDay } from '../Context/SelectWeekDay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import InputMask from 'react-input-mask';

function PhoneInput(props) {
  return (
    <React.Fragment>
      <InputMask 
        style={{width: '95px', height: '30px'}}
        list='time'
        mask={props.value ? '99h 99m' : ''} 
        value={props.value} 
        onChange={props.onChange}>
      </InputMask>
       
    </React.Fragment>
  );
}

const FormBooking = () => {

   
  const [description, setDescription] = useState("");
  const [weekDay, setWeekDay] = useState('Monday');
  const [time, setTime] = useState('10h30m');
  const { selectedWeekDay } = useSelectWeekDay();
  const { listBooking, setListBooking } = useListBooking();
  const [count, setCount] = useState(6)

  const handleInput = ({ target: { value } }) => setTime(value);

  const handleClickAdd = () => {
    setCount(count + 1)
    try {
      if(description != ""){

        setListBooking( current => [...current, {id:count,description, weekday:weekDay, time}])
        setDescription('')
      }else{
        alert('Task is required field!')
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

          <PhoneInput 
            list="cars"
            value={time} 
            onChange={handleInput}>
          </PhoneInput>
          <datalist id="time">
            <option>10h30m</option>
            <option>11h30m</option>
            <option>12h30m</option>
            <option>13h30m</option>
          </datalist>
 
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