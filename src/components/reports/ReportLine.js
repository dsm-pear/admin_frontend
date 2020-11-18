import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const ReportLine = ({ title, name, date }) => {
    const [isCheck, setIsCheck] = useState(false);
    const onClick = () => {
        setIsCheck(!isCheck);
    }
    return (
        <S.Line>
            <S.CheckBox onClick={onClick} boolean={isCheck}/>
            <Link to='/report/view-report'>
                <div>{ title }</div>
                <div>{ name }</div>
                <div>{ date }</div>
            </Link>
        </S.Line>
    )
}

export default ReportLine;