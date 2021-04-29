import React from 'react';
import { useHistory } from 'react-router-dom';
import { Api, FileApi } from '../../../api/api';
import * as S from './style';

const DeleteNotice = ({ setIsClick, id, file }) => {
  const history = useHistory();
  const ACCESS_TOKEN = localStorage.getItem('access_token');

  const onClick = (e) => {
    setIsClick(false);
  };

  const onDeleteBtnClick = () => {
    Api.delete(`/notice/${id}`, {
      headers: {
        Authorization: `${ACCESS_TOKEN}`,
      },
    })
      .then(() => {
        if (file[0]) {
          FileApi.delete(`/notice/${file[0].id}`, {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          })
            .then(() => {
              console.log('file delete success');
              history.push('/notice/view');
              alert('공지사항 삭제를 성공했습니다.');
            })
            .catch(() => {
              alert('공지사항 삭제를 실패했습니다.');
              console.log('file delete fail');
            });
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          alert('공지사항 삭제를 실패했습니다.');
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
          <div>공지사항을 삭제하시겠습니까?</div>
          <div>
            <S.Cancle onClick={onClick}>취소</S.Cancle>
            <S.True onClick={onDeleteBtnClick}>확인</S.True>
          </div>
        </S.ModalBox>
      </div>
    </S.ModalBackground>
  );
};

export default DeleteNotice;
