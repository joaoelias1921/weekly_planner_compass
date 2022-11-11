import * as S from './styles';

import newLogoCompass from '../../assets/compassLogoNew.png';
import { Button } from '../../components/Button';
import React from 'react';
import { SimpleInput } from '../../components/SimpleInput';
import { useNavigate } from 'react-router-dom';
import { maskBirth } from '../../utils/maskBirth';
import { validateEmail } from '../../utils/validateEmail';

export function SignUp() {
  const [data, setData] = React.useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    country: '',
    city: '',
    email: '',
    password: '',
    samePassword: '',
  });
  const [error, setError] = React.useState('');

  const navigate = useNavigate();

  const handleBirth = (e) => {
    const maskedBirth = maskBirth(e);
    e.target.value = maskedBirth;
    setData({ ...data, birthDate: e.target.value });
  };

  function handleValidate(e) {
    e.preventDefault();
    if (
      !data.firstName ||
      !data.lastName ||
      !data.birthDate ||
      !data.country ||
      !data.city ||
      !data.password ||
      !data.samePassword ||
      !data.email
    ) {
      setError('Fill in all fields');
      return;
    }
    if (!validateEmail(data.email)) {
      setError('Wrong e-mail formatting');
      return;
    }
    if (data.password !== data.samePassword) {
      setError('Password does not match');
      return;
    }
    if (
      data.firstName &&
      data.lastName &&
      data.birthDate &&
      data.country &&
      data.city &&
      data.password &&
      data.samePassword &&
      validateEmail(data.email) &&
      data.password === data.samePassword
    ) {
      setError('');
      navigate('/login');
    }
  }

  return (
    <S.Container>
      <S.ContainerLeft>
        <S.TitleContainer>
          <S.Title>Welcome,</S.Title>
          <S.Description>Please, register to continue</S.Description>
        </S.TitleContainer>
        <S.Form onSubmit={(e) => handleValidate(e)}>
          <SimpleInput
            label="Your first name"
            type="text"
            labelText="first name"
            onChange={({ target }) =>
              setData({ ...data, firstName: target.value })
            }
            error={error}
          />
          <SimpleInput
            labelText="last name"
            label="Your last name"
            type="text"
            onChange={({ target }) =>
              setData({ ...data, lastName: target.value })
            }
            error={error}
          />
          <SimpleInput
            labelText="birth date"
            label="MM/DD/YYYY"
            type="text"
            onChange={(e) => handleBirth(e)}
            maxLength="10"
            error={error}
          />
          <SimpleInput
            labelText="Country"
            label="Your Country"
            type="text"
            onChange={({ target }) =>
              setData({ ...data, country: target.value })
            }
            error={error}
          />
          <SimpleInput
            labelText="City"
            label="Your City"
            type="text"
            onChange={({ target }) => setData({ ...data, city: target.value })}
            error={error}
          />
          <SimpleInput
            labelText="e-mail"
            label="A valid e-mail here"
            type="email"
            onChange={({ target }) => setData({ ...data, email: target.value })}
            error={error}
          />
          <SimpleInput
            labelText="password"
            label="Your password"
            type="password"
            onChange={({ target }) =>
              setData({ ...data, password: target.value })
            }
            error={error}
          />
          <SimpleInput
            labelText="password"
            label="Comfirm your password"
            type="password"
            onChange={({ target }) =>
              setData({ ...data, samePassword: target.value })
            }
            error={error}
          />
          <S.ErrorMessageContainer>
            <S.ErrorMessage error={error}>{error}</S.ErrorMessage>
          </S.ErrorMessageContainer>
          <Button type="submit" title="Register Now" />
        </S.Form>
      </S.ContainerLeft>
      <S.ContainerRight>
        <img src={newLogoCompass} alt="" />
      </S.ContainerRight>
    </S.Container>
  );
}
