import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

const ReportLine = ({ number, title, writer, date, id }) => {
  const history = useHistory();
  const dates = new Date(date);
  const year = dates.getFullYear();
  const month = dates.getMonth() + 1;
  const day = dates.getDay();
  const hours = dates.getHours();
  const minutes = dates.getMinutes();
  const showDate = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
  return (
    <S.ReportLine onClick={() => history.push(`/approve/view-approve-report/${id}`)}>
      <S.Note>{number}</S.Note>
      <S.Note>{title}</S.Note>
      <S.Note>-</S.Note>
      <S.Note>{writer}</S.Note>
      <S.Note>-</S.Note>
      <S.Note>{showDate}</S.Note>
    </S.ReportLine>
  );
};

export default ReportLine;
