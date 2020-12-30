import React, {useState, } from 'react';
import * as S from './style';
import { Share } from '../../assets';
import { Api, useRefresh } from '../../api/api';
import { useHistory } from 'react-router-dom';

const Line = ({description, date, email, id}) => {
    const history = useHistory();
    const [ isOpened, setIsOpened ] = useState(false);
    
    const handleClick = () => {
        setIsOpened(!isOpened);
    }

    const refreshHandler = useRefresh();

    const onDeleteBtnClick = () => {
        Api.delete(`/question/<question_${id}>`, {
            headers: {
                Authorization: localStorage.getItem('access_token')
            }
        })
        .then((res) => {
            history.push('/question');
        })
        .catch((err) => {
            switch(err.response.status) {
                case 400:
                    alert('문의사항 삭제를 실패했습니다.');
                    break;
                case 403:
                    refreshHandler()
                    .then(() => {
                        onDeleteBtnClick()
                    })
                    break;
                default:
                    break;
            }
        })
    }

    return(
        <div>
            <S.LineBox onClick={ handleClick }>
                <img src={ Share } alt="share"/>
                <S.Qtitle>제목</S.Qtitle>
                <S.QDate>{ date }</S.QDate>
            </S.LineBox>
            {   isOpened &&
                <S.BQBox>
                    <S.SQBox>
                        <div>
                            <S.Email>{ email }</S.Email>
                            <S.Line />
                            <S.Note>{ description }</S.Note>
                        </div>
                        <S.DeleteBtn onClick={onDeleteBtnClick}>완료</S.DeleteBtn>
                    </S.SQBox>
                </S.BQBox>
            }
        </div>
    )
}

export default Line;