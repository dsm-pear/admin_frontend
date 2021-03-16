import React from 'react';
import { useHistory } from 'react-router-dom';
import { Api, useRefresh } from '../../../api/api';
import * as S from './style';

const ModalApprove = ({ setIsApproveClick, id }) => {
  const history = useHistory();
  const refreshHandler = useRefresh();
  const onClick = (e) => {
    setIsApproveClick(false);
  };

  const onApproveBtnClick = () => {
    Api.patch(
      `/request/${id}`,
      {
        is_accepted: 1,
      },
      {
        headers: {
          Authorization: localStorage.getItem('access_token'),
        },
      }
    )
      .then(() => {
        alert('승인 완료');
        history.replace('/approve');
      })
      .catch((err) => {
        switch (err.response.status) {
          case 400:
            alert('승인을 실패했습니다.');
            break;
          case 403:
            refreshHandler().then(() => {
              onApproveBtnClick();
            });
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
          <div>승인하시겠습니까?</div>
          <div>
            <S.Cancle onClick={onClick}>취소</S.Cancle>
            <S.True onClick={onApproveBtnClick}>확인</S.True>
          </div>
        </S.ModalBox>
      </div>
    </S.ModalBackground>
  );
};

export default ModalApprove;
