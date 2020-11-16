import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import Header from '../header/Header';
import NoticeLine from './NoticeLine';

const NoticeView = () => {
    return (
        <S.Background>
            <Header />
            <S.LWhiteBox>
                <div>
                    <S.Notice>공지사항</S.Notice>
                    <Link to='/notice-write'><S.Write>쓰기/</S.Write></Link>
                    <S.Watch>보기</S.Watch>
                </div>
                <div>
                    <S.NoticeTitle>
                        <div>공지사항</div>
                        <div>작성일</div>
                    </S.NoticeTitle>
                    <ul>
                        <Link to='/notice/view-notice'>
                            <NoticeLine 
                                title="보고서 작성 양식 알려드립니다."
                                date="2020.20.20"
                            />
                        </Link>
                        <NoticeLine 
                            title="제출 오류 관련"
                            date="1919.19.19"
                        />
                        <NoticeLine 
                            title="공지사항 테스트입니다."
                            date="1818.18.18"
                        />
                        <NoticeLine />
                        <NoticeLine />
                        <NoticeLine />
                        <NoticeLine />
                        <NoticeLine />
                    </ul>
                </div>
                <div>
                    <S.Turn>◀︎</S.Turn>
                    <S.Count>
                        <div data-id='1'>1</div>
                        <div data-id='2'>2</div>
                        <div data-id='3'>3</div>
                        <div data-id='4'>4</div>
                        <div data-id='5'>5</div>
                    </S.Count>
                    <S.Turn>▶︎</S.Turn>
                </div>
            </S.LWhiteBox>
        </S.Background>
    )
}

export default NoticeView;