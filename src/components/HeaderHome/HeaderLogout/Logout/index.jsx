import * as S from "./style";
import iconLogout from "../../../../assets/logout-icon.svg";
import { useNavigate } from 'react-router-dom';

export const LogoutArea = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
         localStorage.clear();
        navigate('/login');
    }

    return (
        <S.StyledContainer onClick={handleLogout}>
            <S.StyledParagraph>
                <S.StyledIcon src={iconLogout} alt="Logout icon"/>
                Logout
            </S.StyledParagraph>
        </S.StyledContainer>
    )
}