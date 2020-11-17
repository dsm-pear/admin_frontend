import React from 'react';
import * as S from './style';

const ModalComment = ({setIsDisapproveClick, setIsSend}) => {
    const onClick = e => {
        setIsDisapproveClick(false);
        setIsSend(false);
    }
    return(
        <S.ModalBackground>
            <div>
                <S.ModalBoxTitle>
                    <span>PEAR</span> Admin console
                </S.ModalBoxTitle>
                <S.ModalBox>
                    <div>승인 거부하시겠습니까?</div>
                    <div>
                        <S.Cancle onClick={onClick}>취소</S.Cancle>
                        <S.True onClick={onClick}>확인</S.True>
                    </div>
                </S.ModalBox>
            </div>
        </S.ModalBackground>
    )
}

export default ModalComment;