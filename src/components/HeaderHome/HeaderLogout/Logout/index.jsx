import * as S from "./style";
import iconLogout from "../../../../assets/logout-icon.svg";

export const LogoutArea = () => {
    return (
        <S.StyledContainer>
            <S.StyledParagraph>
                <S.StyledIcon src={iconLogout} alt="Logout icon"/>
                Logout
            </S.StyledParagraph>
        </S.StyledContainer>
    )
}