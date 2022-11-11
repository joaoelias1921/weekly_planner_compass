import * as S from './styles';

export function Button({ loading, title, ...rest }) {
  return (
    <S.Container>
      <button style={{ color: ' #e0e0e0', fontSize: '26px' }} {...rest}>
        {title}
      </button>
    </S.Container>
  );
}
