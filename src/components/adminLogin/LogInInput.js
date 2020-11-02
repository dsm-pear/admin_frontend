import React from 'react';
import * as S from './style';

const Input = (props) => {
    const { text, type } = props;
    return (
        <div style={{display: "flex"}} >
            <S.Input placeholder={ text } type={ type }/>
        </div>
    )
}

export default Input;