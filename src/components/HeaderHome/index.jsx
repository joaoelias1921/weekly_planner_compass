import { StyledContainer } from "./style";
import { TitleContainer } from "./HeaderTitle";
import { MomentContainer } from "./HeaderMoment";
import { WeatherContainer } from "./HeaderWeather";
import { LogoutContainer } from "./HeaderLogout";

export const Header = () => {
    return (
        <StyledContainer>
            <TitleContainer />
            <MomentContainer />
            <WeatherContainer />
            <LogoutContainer />
        </StyledContainer>
    )
}