import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './style'

const Header = () => {
    return(
        <S.Flex>
            <S.Pear>
                <span>PEAR</span> Admin console
            </S.Pear>
            <S.Size>
                <S.Category>
                    <NavLink to='/approve' activeStyle={{color: '#1919B1'}}>
                        보고서 승인
                    </NavLink>
                </S.Category>
                <S.Category>
                    <NavLink to='/report' activeStyle={{color: '#1919B1'}}>
                        보고서 보기
                    </NavLink>
                </S.Category>
                <S.Category>
                    <NavLink to='/notice-write' activeStyle={{color: '#1919B1'}}>
                        공지사항
                    </NavLink>
                </S.Category>
                <S.Category>
                    <NavLink to='/question' activeStyle={{color: '#1919B1'}}>
                        문의사항
                    </NavLink>
                </S.Category>
            </S.Size>
            <S.Circle>
                <S.Logout>로그아웃</S.Logout>
            </S.Circle>
        </S.Flex>
    )
}

export default Header;