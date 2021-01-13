import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as S from './style';

const ReportLine = ({ title, name, date, id }) => {
  const [isCheck, setIsCheck] = useState(false);
  const history = useHistory();
  const dates = new Date(date);
  const year = dates.getFullYear();
  const month = dates.getMonth() + 1;
  const day = dates.getDay();
  const hours = dates.getHours();
  const minutes = dates.getMinutes();
  const showDate = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;

  const onClick = () => {
    setIsCheck(!isCheck);
  };

  return (
    <S.Line onClick={() => history.push(`/report/view-report/${id}`)}>
      <S.CheckBox onClick={onClick} boolean={isCheck} />
      <Link to="/report/view-report">
        <div>{title}</div>
        <div>{name}</div>
        <div>{showDate}</div>
      </Link>
    </S.Line>
  );
};

export default ReportLine;
