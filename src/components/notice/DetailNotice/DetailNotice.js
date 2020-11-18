import React, { useState } from 'react';
import * as S from './style';
import Header from '../../header/Header';
import { Link } from 'react-router-dom';
import { Download } from '../../../assets';
import DeleteNotice from './DeleteNotice';

const DetailNotice = () => {
    const [isClick, setIsClick] = useState(false);
    const DeleteBtn = e => {
        setIsClick(true);
    }
    return (
        <S.Background>
            <Header />
            <S.WhiteBox>
                <S.TitleBox>
                    <div>승인날짜</div>
                    <S.Line />
                    <div>2020.20.20</div>
                </S.TitleBox>
                <S.NoticeTitle>
                    <div>제목</div>
                    <S.BlackLine />
                    <div>보고서 제출 양식 알려드리겠습니다</div>
                </S.NoticeTitle>
                <S.Contents>
                    보고서 제출 양식 링크로 첨부해 두었으니 확인해보시고 제출 부탁드립니다.
                </S.Contents>
                <S.Flie>
                    <div>첨부파일</div>
                    <S.BlackLine />
                    <div>보고서 제출 양식.hwp</div>
                    <img src={ Download } alt='다운로드'/>
                    <S.Preview>미리보기</S.Preview>
                </S.Flie>
                <S.Delete onClick={DeleteBtn}>삭제</S.Delete>
                {isClick &&
                    <DeleteNotice setIsClick={setIsClick}/>
                }
                <S.Modify>
                    <Link to='/notice/modify'>
                        수정
                    </Link>
                </S.Modify>
            </S.WhiteBox>
        </S.Background>
    )
}

export default DetailNotice;