import React from 'react';
import * as S from './style';

const Input = ({ text, type }) => {
    return (
        <div style={{display: "flex"}} >
            <S.Input placeholder={ text } type={ type }/>
        </div>
    )
}

export default Input;