import React from 'react';
import { LogInImg } from '../../assets';
import Input from './LogInInput';
import * as S from './style';

const AdminLogin = () => {
    return (
        <S.Background>
            <S.Whitebox>
                <div>
                    <S.Img>
                        <img src={ LogInImg } alt="login"/>
                    </S.Img>
                    <S.Inputs>
                        <Input
                            text = "아이디를 입력하시오"
                            type = "text"
                        />
                        <Input 
                            text = "비밀번호를 입력하시오"
                            type = "password"
                        />
                    </S.Inputs>
                    <S.LogInButton>LOGIN</S.LogInButton>
                </div>
            </S.Whitebox>
        </S.Background>
    )
}

export default AdminLogin;