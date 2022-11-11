import * as S from './styles';

export function Tab({ children, color, selected, onClick }) {
  return (
    <S.Container
      style={{
        backgroundColor: color,
      }}
      onClick={onClick}
      selected={selected}
    >
      {children}
    </S.Container>
  );
}
