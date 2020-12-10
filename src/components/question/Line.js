import React, {useState, } from 'react';
import * as S from './style';
import { Share } from '../../assets';

const Line = ({ title, contents, date, email, setData }) => {
    const [ isOpened, setIsOpened ] = useState(false);
    const handleClick = () => {
        setIsOpened(!isOpened);
    }
    return(
        <div>
            <S.LineBox onClick={ handleClick }>
                <img src={ Share } alt="share"/>
                <S.Qtitle>{ title }</S.Qtitle>
                <S.QDate>{ date }</S.QDate>
            </S.LineBox>
            {   isOpened &&
                <S.BQBox>
                    <S.SQBox>
                        <div>
                            <S.Email>{ email }</S.Email>
                            <S.Line />
                            <S.Note>{ contents }</S.Note>
                        </div>
                        <S.DeleteBtn>완료</S.DeleteBtn>
                    </S.SQBox>
                </S.BQBox>
            }
        </div>
    )
}

export default Line;