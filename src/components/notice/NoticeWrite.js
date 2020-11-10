import React from 'react';
import * as S from './style';
import Header from '../header/Header';
import { Upload, Img, Link } from '../../assets';

const NoticeWirte = () => {
    return (
        <S.Background>
            <Header />
            <S.WhiteBox>
                <div>
                    <S.Notice>공지사항</S.Notice>
                    <S.LWrite>쓰기 /</S.LWrite>
                    <S.LWatch>보기</S.LWatch>
                </div>
                <div>
                    <S.Title placeholder="제목을 입력해주세요." />
                    <S.ContentsBox>
                        <div>
                            <S.ContentsTitle>내용입력</S.ContentsTitle>
                            <div>
                                <S.Add>
                                    <img  src={ Link } alt="파일첨부"/>
                                    파일첨부
                                </S.Add>
                                <S.Add>
                                    <img src={ Img } width="13px" height="13px" alt="사진첨부"/>
                                    사진첨부
                                </S.Add>
                            </div>
                        </div>
                        <S.Contents placeholder="내용을 입력해주세요."/>
                        <S.Addflie>파일첨부</S.Addflie>
                        <S.Upload>
                            <img src={ Upload } alt="업로드" width="12px" height="12px"/>
                            업로드
                        </S.Upload>
                    </S.ContentsBox>
                </div>
            </S.WhiteBox>
        </S.Background>
    )
}

export default NoticeWirte;