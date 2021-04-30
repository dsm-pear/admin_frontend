import React, { useState } from 'react';
import * as S from './style';
import DeleteComment from './DeleteComment';
import { Profile } from '../../../assets';

const Comment = ({ name, text, date, setData, Rid, Cid }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let commentDate = new Date(date);
  let commentYear = commentDate.getFullYear();
  let commentMonth = commentDate.getMonth() + 1;
  let commentDay = commentDate.getDay();
  let commentHours = commentDate.getHours();
  let commentMinutes = commentDate.getMinutes();
  let showCommentDate = `${commentYear}년 ${commentMonth}월 ${commentDay}일 ${commentHours}시 ${commentMinutes}분`;

  const onClick = (e) => {
    setIsModalOpen(true);
  };

  return (
    <S.Comment>
      <img src={Profile} alt="프로필" />
      <div>{name}</div>
      <div>{text}</div>
      <div>{showCommentDate}</div>
      <S.DeleteBtn className="DeleteBtn" onClick={onClick}>
        삭제
      </S.DeleteBtn>
      {isModalOpen && (
        <DeleteComment setIsModalOpen={setIsModalOpen} setData={setData} Rid={Rid} Cid={Cid} />
      )}
    </S.Comment>
  );
};
export default Comment;
