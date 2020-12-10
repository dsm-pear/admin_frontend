import React from 'react';
import * as S from './style';

const Input = ({ text, type, info, setEmail, setPassword }) => {
    const checkEmail = e => {
        setEmail(e.target.value);
    }
    const checkPw = e => {
        setPassword(e.target.value);
    }

    return (
        <div style={{display: "flex"}} >
            <S.Input placeholder={ text } type={ type } onChange={info === 'email' ? checkEmail : checkPw}/>
        </div>
    )
}

export default Input;