import React, { useState } from 'react';
import * as S from './style';

const ReportLine = ({ title, name, date }) => {
    const [isCheck, setIsCheck] = useState(false);
    const onClick = () => {
        setIsCheck(!isCheck);
    }
    return (
        <S.Line>
            <S.CheckBox onClick={onClick} boolean={isCheck}/>
            <div>{ title }</div>
            <div>{ name }</div>
            <div>{ date }</div>
        </S.Line>
    )
}

export default ReportLine;