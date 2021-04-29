import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

const NoticeLine = ({ title, noticeDate, id }) => {
  const history = useHistory();
  // 공지사항 날짜
  const dates = new Date(noticeDate);
  const year = dates.getFullYear();
  const month = dates.getMonth() + 1;
  const date = dates.getDate();
  const hours = dates.getHours();
  const minutes = dates.getMinutes();
  const showDate = `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분`;
  return (
    <S.Line onClick={() => history.push(`/notice/view-notice/${id}`)}>
      <S.LineTitle>{title}</S.LineTitle>
      <S.LineDate>{showDate}</S.LineDate>
    </S.Line>
  );
};
export default NoticeLine;
