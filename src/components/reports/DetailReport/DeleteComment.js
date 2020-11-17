import React from 'react';
import * as S from './style';

const DeleteComment = ({setIsClick, setData}) => {
    const onClick = e => {
        setIsClick(false);
    }
    const dummyData = [{
        name: '김혜준',
        text: '참신한 아이디어에 박수를 칩니다',
        date: '2020.11.15 01:53'
    }, {
        name: '김혜준',
        text: '보고서를 깔끔하게 잘 작성하셨네요!',
        date: '2020.11.15 01:55'
    }]
    const onBtnClick = e => {
        setData(dummyData);
        setIsClick(false);
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