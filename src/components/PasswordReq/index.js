import * as S from './styles';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';

export function PasswordReq({ checked, text }) {
  return (
    <S.PasswordReq check={checked}>
      {checked ? <AiOutlineCheckCircle /> : <AiOutlineCloseCircle />}
      <S.PasswordReqText>{text}</S.PasswordReqText>
    </S.PasswordReq>
  );
}
