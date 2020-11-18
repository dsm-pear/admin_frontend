import React from 'react';
import * as S from './style';

const DeleteNotice = ({setIsClick}) => {
    const onClick = e => {
        setIsClick(false);
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
                        <S.True>확인</S.True>
                    </div>
                </S.ModalBox>
            </div>
        </S.ModalBackground>
    )
}

export default DeleteNotice;