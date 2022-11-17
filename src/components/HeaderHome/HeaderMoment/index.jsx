import { useState } from "react";
import months from "./months.json";
import * as S from "./style";

export const MomentContainer = () => {
    const getOrdinal = (day) => {
        if(day > 3 && day < 21);
        switch(day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }

    const getFormated = (value) => {
        if (value < 10){
            return "0"+value;
        }else{
            return value;
        }
    }

    const [date, setDate] = useState(new Date());
    setInterval(() => {
        setDate(new Date());
    }, 30000);

    return (
        <S.StyledContainer>
            <S.StyledClock>{getFormated(date.getHours())}:{getFormated(date.getMinutes())}</S.StyledClock>
            <S.StyledDate>{months.month[date.getMonth()]} {date.getDate()}{getOrdinal(date.getDate())}, {date.getFullYear()}</S.StyledDate>
        </S.StyledContainer>
    )
}