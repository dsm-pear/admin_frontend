import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style'

const Header = () => {
    const [isFirstClick, setIsFirstClick] = useState(false);
    const [isSecondClick, setIsSecondClick] = useState(false);
    const [isThirdClick, setIsthirdClick] = useState(false);
    const [isFourthClick, setIsFourthClick] = useState(false);
    const onClick = e => {
        const clickCategory = Number(e.currentTarget.dataset.id);
        if(clickCategory === 1) {
            setIsFirstClick(true);
        }
        else if(clickCategory === 2) {
            setIsSecondClick(true);
        }
        else if(clickCategory === 3) {
            setIsthirdClick(true);
        }
        else {
            setIsFourthClick(true);
        }
    }
    return(
        <S.Flex>
            <S.Pear>
                <span>PEAR</span> Admin console
            </S.Pear>
            <S.Size>
                <Link to='/approve'>
                    <S.Category data-id='1' boolean={isFirstClick} onClick={onClick}>보고서 승인</S.Category>
                </Link>
                <Link to='/report'>
                    <S.Category data-id='2' boolean={isSecondClick} onClick={onClick}>보고서 보기</S.Category>
                </Link>
                <Link to='/notice-write'>
                    <S.Category data-id='3' boolean={isThirdClick} onClick={onClick}>공지사항</S.Category>
                </Link>
                <Link to='/question'>
                    <S.Category data-id='4' boolean={isFourthClick} onClick={onClick}>문의사항</S.Category>
                </Link>
            </S.Size>
            <S.Circle>
                <S.Logout>로그아웃</S.Logout>
            </S.Circle>
        </S.Flex>
    )
}

export default Header;