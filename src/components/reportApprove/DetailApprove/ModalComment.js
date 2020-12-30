import React from 'react';
import { useHistory } from 'react-router-dom';
import { Api, useRefresh } from '../../../api/api';
import * as S from './style';

const ModalComment = ({setIsDisapproveClick, setIsSend, id, comment}) => {
    const history = useHistory();
    const onClick = e => {
        setIsDisapproveClick(false);
        setIsSend(false);
    }

    const refreshHander = useRefresh();
    const errorHandelr = (err) => {
        switch(err.response.status) {
            case 400: 
                alert('승인거부를 실패했습니다.');
                break;
            case 403:
                refreshHander()
                .then(() => {
                    onCommentBtnClick()
                })
                break;
            case 401:
            case 422:
                console.log(err);
                break;
            default:
                break;
        }
    }

    const onCommentBtnClick = () => {
        Api.patch(`request/<report_${id}>`, {
            body: {
                is_accepted: 0,
                comment, 
            },
            headers: {
                Authorization: localStorage.getItem('access_token')
            }
        })
        .then((res) => {
            alert('승인거부 완료');
            history.replace('/approve');
        })
        .catch((error) => {
            errorHandelr(error);
        })
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
                        <S.True onClick={onCommentBtnClick}>확인</S.True>
                    </div>
                </S.ModalBox>
            </div>
        </S.ModalBackground>
    )
}

export default ModalComment;