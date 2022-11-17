import React, { createContext, useState, useContext} from 'react';

const SelectWeekDayContext = createContext();

export default function SelectWeekDayProvider({ children }){
    
    const [ selectedWeekDay, setSelectedWeekDay] = useState('Monday');

    return (
        <SelectWeekDayContext.Provider value={
            { selectedWeekDay, setSelectedWeekDay }
        }>
            {children}
        </SelectWeekDayContext.Provider>
    )
}

export function useSelectWeekDay() { 
    const context = useContext(SelectWeekDayContext);

    const { selectedWeekDay, setSelectedWeekDay } = context; 

    return { selectedWeekDay, setSelectedWeekDay };   
}