import React from 'react';
import * as S from './style';
import Header from '../../header/Header';
import { Upload, Img, LinkImg } from '../../../assets';

const ModifyNotice = ({title, contents}) => {
    return (
        <S.MBackground>
            <Header />
            <S.MWhiteBox>
                <div>
                    <S.MNotice>공지사항</S.MNotice>
                    <S.MLWrite>수정</S.MLWrite>
                </div>
                <div>
                    <S.MTitle placeholder="제목을 입력해주세요." value='보고서 제출 양식 알려드리겠습니다' />
                    <S.MContentsBox>
                        <div>
                            <S.MContentsTitle>내용입력</S.MContentsTitle>
                            <div>
                                <S.MAdd>
                                    <img  src={ LinkImg } alt="파일첨부"/>
                                    파일첨부
                                </S.MAdd>
                                <S.MAdd>
                                    <img src={ Img } width="13px" height="13px" alt="사진첨부"/>
                                    사진첨부
                                </S.MAdd>
                            </div>
                        </div>
                        <S.MContents placeholder="내용을 입력해주세요." value='보고서 제출 양식 링크로 첨부해 두었으니 확인해보시고 제출 부탁드립니다.'/>
                        <S.MAddflie>
                            파일첨부
                            <div>보고서 제출 양식.hwp</div>
                        </S.MAddflie>
                        <S.MUpload>
                            <img src={ Upload } alt="업로드" width="12px" height="12px"/>
                            업로드
                        </S.MUpload>
                    </S.MContentsBox>
                </div>
            </S.MWhiteBox>
        </S.MBackground>
    )
}

export default ModifyNotice;