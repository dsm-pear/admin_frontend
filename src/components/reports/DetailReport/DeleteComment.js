import React from 'react';
import { Api, useRefresh } from '../../../api/api';
import * as S from './style';

const DeleteComment = ({ setIsModalOpen, Rid, Cid }) => {
  const refreshHandler = useRefresh();
  const onClick = (e) => {
    setIsModalOpen(false);
  };

  const onDeleteBtnClick = () => {
    Api.delete(`/list/${Rid}/comment/${Cid}`, {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        switch (err.response.status) {
          case 400:
            alert('댓글 삭제 실패');
            break;
          case 403:
            refreshHandler().then(() => {
              onDeleteBtnClick();
            });
            break;
          case 401:
          case 422:
            console.log(err);
            break;
          default:
            break;
        }
      });
  };

  return (
    <S.ModalBackground>
      <div>
        <S.ModalBoxTitle>
          <span>PEAR</span> Admin console
        </S.ModalBoxTitle>
        <S.ModalBox>
          <div>댓글을 삭제하시겠습니까?</div>
          <div>
            <S.Cancle onClick={onClick}>취소</S.Cancle>
            <S.True onClick={onDeleteBtnClick}>확인</S.True>
          </div>
        </S.ModalBox>
      </div>
    </S.ModalBackground>
  );
};

export default DeleteComment;
