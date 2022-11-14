import React, { createContext, useState, useContext} from 'react';

const ListBookingContext = createContext();

export default function ListBookingProvider({ children }){
    
    const [listBooking, setListBooking] = useState([
      {id: 1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit', weekday: 'Monday', time: '7h30m'},
      {id: 2,description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit', weekday: 'Monday', time: '7h30m'},
      {id: 3,description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit', weekday: 'Tuesday', time: '10h30m'},
      {id: 4,description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit', weekday: 'Tuesday', time: '10h30m'},
      {id: 5,description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit', weekday: 'Tuesday', time: '11h30m'},
    ]);

    return (
        <ListBookingContext.Provider value={
            { listBooking, setListBooking }
        }>
            {children}
        </ListBookingContext.Provider>
    )
}

export function useListBooking() { 
    const context = useContext(ListBookingContext);

    const { listBooking, setListBooking } = context; 

    return { listBooking, setListBooking };   
}