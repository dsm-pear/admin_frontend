import React from 'react';
import * as S from './style';

const ReportLine = ({ number, title, team, date}) => {
    return (
        <S.ReportLine>
            <S.Note>{ number }</S.Note>
            <S.Note>{ title }</S.Note>
            <S.Note>-</S.Note>
            <S.Note>{ team }</S.Note>
            <S.Note>-</S.Note>
            <S.Note>{ date }</S.Note>
        </S.ReportLine>
    )
}

export default ReportLine;