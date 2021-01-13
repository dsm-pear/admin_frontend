import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

const NoticeLine = ({ title, date, id }) => {
  const history = useHistory();
  const dates = new Date(date);
  const year = dates.getFullYear();
  const month = dates.getMonth() + 1;
  const day = dates.getDay();
  const hours = dates.getHours();
  const minutes = dates.getMinutes();
  const showDate = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
  return (
    <S.Line onClick={() => history.push(`/notice/view-notice/${id}`)}>
      <S.LineTitle>{title}</S.LineTitle>
      <S.LineDate>{showDate}</S.LineDate>
    </S.Line>
  );
};
export default NoticeLine;
