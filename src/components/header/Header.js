import React from 'react';
import * as S from './style'

const Header = () => {
    return(
        <S.Flex>
            <S.Pear>
                <span>PEAR</span> Admin console
            </S.Pear>
            <S.Size>
                <S.Category>보고서 승인</S.Category>
                <S.Category>보고서 보기</S.Category>
                <S.Category>공지사항</S.Category>
                <S.Category>문의사항</S.Category>
            </S.Size>
            <S.Circle>
                <S.Logout>로그아웃</S.Logout>
            </S.Circle>
        </S.Flex>
    )
}

export default Header;