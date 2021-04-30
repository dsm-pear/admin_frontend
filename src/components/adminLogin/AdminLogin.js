import React, { useState } from 'react';
import { LogInImg } from '../../assets';
import Input from './LogInInput';
import * as S from './style';
import { Api } from '../../api/api';
import { useHistory } from 'react-router-dom';

const AdminLogin = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    Api.post('/auth', {
      email,
      password,
    })
      .then((res) => {
        localStorage.setItem('access_token', res.data.access_token);
        localStorage.setItem('refresh_token', res.data.refresh_token);
        history.push('/report');
      })
      .catch((err) => {
        console.log(err);
        switch (err.response.status) {
          case 400:
            alert('아이디 또는 비밀번호가 틀렸습니다.');
            break;
          case 403:
            alert('아이디가 존재하지 않습니다.');
            break;
          default:
            break;
        }
      });
  };

  const onLoginBtnClick = (e) => {
    const loginInput = [email, password];
    if (loginInput.indexOf('') === -1) {
      onLogin();
    } else {
      alert('아이디와 비밀번호를 채워주세요.');
    }
  };

  return (
    <S.Background>
      <S.Whitebox>
        <div>
          <S.Img>
            <img src={LogInImg} alt="login" />
          </S.Img>
          <S.Inputs>
            <Input text="아이디를 입력하시오" type="text" info="email" setEmail={setEmail} />
            <Input
              text="비밀번호를 입력하시오"
              type="password"
              info="password"
              setPassword={setPassword}
            />
          </S.Inputs>
          <S.LogInButton onClick={onLoginBtnClick}>LOGIN</S.LogInButton>
        </div>
      </S.Whitebox>
    </S.Background>
  );
};

export default AdminLogin;
