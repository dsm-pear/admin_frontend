import React from 'react';
import { useHistory } from 'react-router-dom';
import { Api } from '../../../api/api';
import * as S from './style';

const DeleteNotice = ({setIsClick, id}) => {
    const history = useHistory();

    const onClick = e => {
        setIsClick(false);
    }

    const onDeleteBtnClick = () => {
        Api.delete(`/notice/<notice_${id}>`, {
            headers: {
                Authorization: localStorage.getItem('access_token')
            }
        })
        .then((res) => {
            history.push('/notice/view');
        })
        .catch((err) => {
            if(err.response.status === 400) {
                alert('공지사항 삭제를 실패했습니다.'); 
            }
        })
    }

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
    )
}

export default DeleteNotice;