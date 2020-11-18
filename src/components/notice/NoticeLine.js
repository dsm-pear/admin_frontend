import React from 'react';
import * as S from './style';

const NoticeLine = ({ title, date }) => {
    return (
        <S.Line>
            <S.LineTitle>{ title }</S.LineTitle>
            <S.LineDate>{ date }</S.LineDate>
        </S.Line>
    )
}

export default NoticeLine;