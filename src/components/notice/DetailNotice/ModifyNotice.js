import React, { useEffect, useState } from 'react';
import * as S from './style';
import Header from '../../header/Header';
import { Upload, Img, LinkImg } from '../../../assets';
import { FileApi } from '../../../api/api';

const ModifyNotice = ({title, description, id}) => {
    const [file, setFile] = useState();
    const [changeTitle, setChangeTitle] = useState();
    const [changeDescription, setDescription] = useState();

    useEffect(() => {
        const GetFileId = () => {
            FileApi.post(`/notice/files/{notce_${id}}`, {
                body: {
                    notice_id: id,
                }
            })
            .then((res) => {
                setFile(res.data);
            })
            .catch((err) => {
                alert('파일 불러오기 실패');
                console.log(err);
            })
        }
        GetFileId();
    }, [])

    const onTitleChange = e => {
        setChangeTitle(e.target.value)
    }

    return (
        <S.MBackground>
            <Header />
            <S.MWhiteBox>
                <div>
                    <S.MNotice>공지사항</S.MNotice>
                    <S.MLWrite>수정</S.MLWrite>
                </div>
                <div>
                    <S.MTitle placeholder="제목을 입력해주세요." value={title} onChange={onTitleChange} />
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
                        <S.MContents placeholder="내용을 입력해주세요." value={description}/>
                        <S.MAddflie>
                            파일첨부
                            <div></div>
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