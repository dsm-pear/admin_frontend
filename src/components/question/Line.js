import React, {useState, } from 'react';
import * as S from './style';
import { Share } from '../../assets';

const Line = ({ title, contents, date, email, setData }) => {
    const [ isOpened, setIsOpened ] = useState(false);
    const handleClick = () => {
        setIsOpened(!isOpened);
    }
    const dummyData = [{
        title: '승인되었다는 이메일을 받았는데 게시글에 올라가있지 않습니다.',
        date: '2020.10.28',
        email: 'rlagPwns@rlagPwns',
        contents: '이메일이 잘못 온 건지 저만 안 보이는 건지 모르겠습니다.'
    }, {
        title: '마이페이지에 보고서가 안 보여요',
        date: '2020.11.16',
        email: 'rlagPwns@rlagPwns',
        contents: '어제까지만 해도 잘 보였는데 오늘 갑자기 사라졌어요'
    }]
    const onclick = e => {
        setData(dummyData)
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
                        <S.DeleteBtn onClick={onclick}>완료</S.DeleteBtn>
                    </S.SQBox>
                </S.BQBox>
            }
        </div>
    )
}

export default Line;