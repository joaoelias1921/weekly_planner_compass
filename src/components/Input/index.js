import * as S from './styles';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { forwardRef, useState } from 'react';

const InputBase = ({ label, error, variant = null, ...rest }, ref) => {
  const [focused, setFocused] = useState(false);
  return (
    <S.Container error={error}>
      <input
        placeholder={label}
        onFocus={() => setFocused(true)}
        onBlur={(event) =>
          event.target.value.length > 0 ? setFocused(true) : setFocused(false)
        }
        ref={ref}
        {...rest}
      />
      <S.Icon focused={focused}>
        {variant === 'user' ? (
          <AiOutlineUser size={20} />
        ) : variant === 'password' ? (
          <HiOutlineLockClosed size={20} />
        ) : (
          <div></div>
        )}
      </S.Icon>
    </S.Container>
  );
};

export const Input = forwardRef(InputBase);
