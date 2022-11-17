import { LogoutArea } from "./Logout";
import * as S from "./style";
import logo from "../../../assets/logo-compass.svg";

export const LogoutContainer = () => {
    return (
        <S.StyledContainer>
            <S.StyledImage src={logo} alt="Compass logo" />
            <LogoutArea />
        </S.StyledContainer>
    )
}