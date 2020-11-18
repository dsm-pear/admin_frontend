import React, { useState } from 'react';
import * as S from './style';
import Header from '../../header/Header';
import Comment from './Comment';
import { Download } from '../../../assets';

const DetailReport = () => {
    const dummyData = [{
        name: '김혜준',
        text: '이런 기능들이 구현된 웹 사이트라니 너무 멋있네요!',
        date: '2020.11.15 01:48'
    }, {
        name: '김혜준',
        text: '참신한 아이디어에 박수를 칩니다',
        date: '2020.11.15 01:53'
    }, {
        name: '김혜준',
        text: '보고서를 깔끔하게 잘 작성하셨네요!',
        date: '2020.11.15 01:55'
    }]
    const [data, setData] = useState('');
    setData(dummyData);
    return(
        <S.Background>
            <Header />
            <S.WhiteBox>
                <S.TitleBox>
                    <div>작성자</div>
                    <S.Line />
                    <div>217호</div>
                    <div>작성일</div>
                    <S.Line />
                    <div>2020.11.14</div>
                </S.TitleBox>
                <S.Title>
                    <div>제목</div>
                    <S.BlackLine />
                    <div>탐책</div>
                </S.Title>
                <S.Contents>
                    팀 프로젝트 '탐책'은 이러한 아이디어로 프로젝트를 계획했으며 이러한 기능을 사용할 수 있습니다.
                </S.Contents>
                <S.Team>
                    <div>TEAM</div>
                    <S.SBlackLine />
                    <div>김혜준, 김혜준, 김혜준</div>
                </S.Team>
                <div>
                    <S.Github>
                        <div>GitHub</div>
                        <S.SBlackLine />
                        <a href='https://github.com/Tamchack' target="_blank" rel="noopener noreferrer">
                        https://github.com/Tamchack
                        </a>
                    </S.Github>
                    <S.LanguageBox>
                        <div>사용언어</div>
                        <S.SBlackLine />
                        <S.Language>JAVA</S.Language>
                    </S.LanguageBox>
                </div>
                <S.Flie>
                    <div>첨부파일</div>
                    <S.BlackLine />
                    <div>팀 프로젝트 보고서.pdf</div>
                    <img src={ Download } alt='다운로드'/>
                    <S.Preview>미리보기</S.Preview>
                </S.Flie>
                <S.CommentTitle>댓글</S.CommentTitle>
                <S.CommentBox>
                    {data.map(data => {
                        return (
                            <Comment 
                                name={data.name}
                                text={data.text}
                                date={data.date}
                            />
                        )
                    })}
                </S.CommentBox>
            </S.WhiteBox>
        </S.Background>
    )
}

export default DetailReport;