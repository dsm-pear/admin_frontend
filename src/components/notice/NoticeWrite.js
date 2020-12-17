import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import Header from '../header/Header';
import { Upload, Img, LinkImg } from '../../assets';
import { Api } from '../../api/api';

const NoticeWirte = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState([]);

    const NoticeWirte = () => {
        Api.post('/notice', {
            body: {
                title,
                description,
                file
            },
            headers: {
                Authorization: localStorage.getItem('access_token')
            }
        })
        .then((res) => {
            alert('공지사항 작성을 성공했습니다.');
        })
        .catch((err) => {
            if(err.response.status === 400) {
                alert('공지사항 작성을 실패했습니다.');
            }
        })
    }

    const onTitleChange = e => {
        setTitle(e.target.value);
    }
    const onDescriptionChange = e => {
        setDescription(e.target.value);
    }

    return (
        <S.Background>
            <Header />
            <S.WhiteBox>
                <div>
                    <S.Notice>공지사항</S.Notice>
                    <S.LWrite>쓰기</S.LWrite>
                    <Link to='/notice/view'><S.LWatch>보기</S.LWatch></Link>
                </div>
                <div>
                    <S.Title placeholder="제목을 입력해주세요." onChange={onTitleChange}/>
                    <S.ContentsBox>
                        <div>
                            <S.ContentsTitle>내용입력</S.ContentsTitle>
                            <div>
                                <S.Add>
                                    <img  src={ LinkImg } alt="파일첨부"/>
                                    파일첨부
                                </S.Add>
                                <S.Add>
                                    <img src={ Img } width="13px" height="13px" alt="사진첨부"/>
                                    사진첨부
                                </S.Add>
                            </div>
                        </div>
                        <S.Contents placeholder="내용을 입력해주세요." onChange={onDescriptionChange}/>
                        <S.Addflie>파일첨부</S.Addflie>
                        <S.Upload onClick={NoticeWirte}>
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