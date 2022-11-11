import * as S from './styles';
import { forwardRef } from 'react';

const SimpleInputBase = ({ labelText, label, error = '', ...rest }, ref) => {
  return (
    <S.ContainerInput>
      <S.Labels>{labelText}</S.Labels>
      <S.Container error={error}>
        <input ref={ref} placeholder={label} {...rest} />
      </S.Container>
    </S.ContainerInput>
  );
};

export const SimpleInput = forwardRef(SimpleInputBase);
