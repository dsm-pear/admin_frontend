import React, { useState } from 'react';
import * as S from './style';
import Header from '../../header/Header';
import { Download } from '../../../assets';
import ModalApprove from './ModalApprove';
import ModalComment from './ModalComment';

const DetailApprove = () => {
    const [isApproveClick, setIsApproveClick] = useState(false);
    const [isDisapproveClick, setIsDisapproveClick] = useState(false);
    const [isFill, setIsFill] = useState('');
    const [isSend, setIsSend] = useState(false);
    const onApproveClick = e => {
        setIsApproveClick(true);
        setIsDisapproveClick(false);
    }
    const onDisapproveClick = e => {
        setIsApproveClick(false);
        setIsDisapproveClick(true);
    }
    const onInputChange = e => {
        const input = e.target.value;
        if(input !== '') {
            setIsFill(true);
        }
    }
    const onSendClick = e => {
        setIsSend(true);
    }
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
                <S.Btn>
                    <S.DisApproveBtn onClick={onDisapproveClick} color={isDisapproveClick}>승인거부</S.DisApproveBtn>
                    <S.ApproveBtn onClick={onApproveClick} color={isApproveClick}>승인</S.ApproveBtn>
                </S.Btn>
                {isDisapproveClick &&
                    <S.Comment>
                        <div>COMMENT:</div>
                        <S.CommentInput onChange={onInputChange}/>
                        <S.Send onClick={onSendClick} color={isFill}>►</S.Send>
                    </S.Comment>
                }
                {isSend &&
                    <ModalComment setIsDisapproveClick={setIsDisapproveClick} setIsSend={setIsSend} />
                }
                {isApproveClick &&
                    <ModalApprove setIsApproveClick={setIsApproveClick}/>
                }
            </S.WhiteBox>
        </S.Background>
    )
}

export default DetailApprove;