import React from 'react';
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
                    <S.Write>쓰기/</S.Write>
                    <S.Watch>보기</S.Watch>
                </div>
                <div>
                    <S.NoticeTitle>
                        <div>공지사항</div>
                        <div>작성일</div>
                    </S.NoticeTitle>
                    <ul>
                        <NoticeLine 
                            title="보고서 작성 양식 알려드립니다."
                            date="2020.20.20"
                        />
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
            </S.LWhiteBox>
        </S.Background>
    )
}

export default NoticeView;