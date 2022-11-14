import React from 'react';
import Router from './router';
import ListBookingProvider from './components/Context/ListBooking';
import SelectWeekDayProvider from './components/Context/SelectWeekDay';

const App = () => {
  return(
  <ListBookingProvider>
    <SelectWeekDayProvider>
      <Router />
    </SelectWeekDayProvider>
  </ListBookingProvider>
  )
};

export default App;
