import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

const ReportLine = ({ number, title, dates, id }) => {
  const history = useHistory();
  // 보고서 날짜
  const reportDate = new Date(dates);
  const year = reportDate.getFullYear();
  const month = reportDate.getMonth() + 1;
  const date = reportDate.getDate();
  const hours = reportDate.getHours();
  const minutes = reportDate.getMinutes();
  const showDate = `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분`;
  return (
    <S.ReportLine onClick={() => history.push(`/approve/view-approve-report/${id}`)}>
      <S.Note>{number}</S.Note>
      <S.Note>{title}</S.Note>
      <S.Note>-</S.Note>
      <S.Note>{showDate}</S.Note>
    </S.ReportLine>
  );
};

export default ReportLine;
