import React, { useState } from "react";
import { Container  } from './styles'
import Input from '../../components/atoms/Input';

const Dashboard = () => {

  const [data, setData ] = useState([{name: 'lucas'}]);
  const [name, setName ] = useState();
  const [selectValue, setSelectValue] = useState();
  //const data = [{name: 'lucas'}]

  const handleSave = () => {
    setData( current => [...current, {name, selectValue}])
  } 
  const handleDeleteOne = (value) => {
    setData([
      ...data.slice(0, value),
      ...data.slice(value + 1)
    ]);
  } 

  const weekly = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

  return(
    <React.Fragment>
       
        <h1>dashboard</h1>
        <Input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <select value={selectValue} onChange={e => setSelectValue(e.target.value)}>
          {weekly.map(value => (
            <option value={value}>{value[0].toUpperCase() + value.substring(1)}</option>
          ))}
 
        </select>

        <select id="hour">
          <option value="10:30">10:30</option>
          <option value="11:00">11:00</option>
          <option value="11:30">11:30</option>
          <option value="12:00">12:00</option>
          <option value="12:30">12:30</option>
          <option value="13:00">13:00</option>
          <option value="13:30">13:30</option>
        </select>

        <button onClick={handleSave}> Add</button>

        <hr />
        <ul>
          {data.map((value, index) => 
            <div>
              <li key={value.name}> {value.name}/{value.selectValue} </li> <button onClick={ () => handleDeleteOne(index)} > Delete  </button>
            </div>
          )}
        </ul>

       
    </React.Fragment>

  )
}

export default Dashboard;