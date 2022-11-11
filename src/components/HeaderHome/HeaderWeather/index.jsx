import { useEffect, useState } from "react";
import * as S from "./style";

export const WeatherContainer = () => {
    const [temp, setTemp] = useState(0);
    const [local, setLocal] = useState("Buscando...");

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        async function getWeather() {
            try {
                await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${user.city}&units=metric&appid=2b64c34ab641e4a586fdf7c659bded8c`)
                .then(res => res.json())
                .then(result => {
                    const {main, name } = result;
                    setWeather(name, user.country, main);
            });
            } catch (error) { }
        }
        getWeather();
    }, []);

    function setWeather(city, country, main) {
        setLocal(`${city} - ${country}`)
        setTemp(Math.round(main.temp));
    }

    return (
        <S.StyledContainer>
            <S.StyledLocation>{local}</S.StyledLocation>
            <S.StyledIconTemperature>
                <S.StyledCloud />
                <S.StyledTemperature>{temp}º</S.StyledTemperature>
            </S.StyledIconTemperature>
        </S.StyledContainer>
    )
}