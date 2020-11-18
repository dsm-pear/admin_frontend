import React from 'react';
import * as S from './style';

const DeleteComment = ({setIsModalOpen}) => {
    const onClick = e => {
        setIsModalOpen(false);
    }
    const onBtnClick = e => {
        setIsModalOpen(false);
    }
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
                        <S.True onClick={onBtnClick}>확인</S.True>
                    </div>
                </S.ModalBox>
            </div>
        </S.ModalBackground>
    )
}

export default DeleteComment;