import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as S from './style';
import Header from '../header/Header';
import { Upload, Img, LinkImg } from '../../assets';
import { Api, FileApi, useRefresh } from '../../api/api';

const NoticeWirte = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState([{ name: '' }]);
  const refreshHandler = useRefresh();
  const history = useHistory();
  const ACCESS_TOKEN = localStorage.getItem('access_token');

  const NoticeWirte = () => {
    Api.post(
      '/notice',
      {
        title,
        description,
      },
      {
        headers: {
          Authorization: `${ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    )
      .then((e) => {
        const noticeFiles = new FormData();
        noticeFiles.append('noticeFile', file[0]);
        console.log(file[0]);
        const id = e.data.id;
        FileApi.post(`/notice/file/${id}`, noticeFiles, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        })
          .then(() => {
            console.log('파일 업로드 성공');
            history.push('/notice/view');
          })
          .catch(() => {
            console.log('파일 업로드 실패');
          });
        console.log('공지사항 업로드 성공');
        history.push('/notice/view');
      })
      .catch((err) => {
        switch (err.status) {
          case 400:
            alert('공지사항 작성을 실패했습니다.');
            break;
          case 403:
            refreshHandler().then(() => {
              NoticeWirte();
            });
            break;
          default:
            break;
        }
      });
  };

  const onFileChange = (e) => {
    setFile(e.target.files);
    console.log(e.target.files);
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <S.Background>
      <Header />
      <S.WhiteBox>
        <div>
          <S.Notice>공지사항</S.Notice>
          <S.LWrite>쓰기</S.LWrite>
          <Link to="/notice/view">
            <S.LWatch>보기</S.LWatch>
          </Link>
        </div>
        <div>
          <S.Title placeholder="제목을 입력해주세요." onChange={onTitleChange} />
          <S.ContentsBox>
            <div>
              <S.ContentsTitle>내용입력</S.ContentsTitle>
              <div>
                <S.Label for="ffile">
                  <img src={LinkImg} alt="파일첨부" />
                  파일첨부
                </S.Label>
                <input
                  type="file"
                  accept=".pdf, .hwp, .txt"
                  id="ffile"
                  name="noticeFile"
                  multiple
                  onChange={onFileChange}
                />
                <S.Label for="img">
                  <img src={Img} width="13px" height="13px" alt="사진첨부" />
                  사진첨부
                </S.Label>
                <input
                  type="file"
                  accept=".png, .jpeg, .jpg, .svg"
                  id="img"
                  multiple
                  onChange={onFileChange}
                />
              </div>
            </div>
            <S.Contents placeholder="내용을 입력해주세요." onChange={onDescriptionChange} />
            <S.FileLine>
              <S.Addflie>파일첨부</S.Addflie>
              <div>{file[0].name}</div>
            </S.FileLine>
            <S.Upload onClick={NoticeWirte}>
              <img src={Upload} alt="업로드" width="12px" height="12px" />
              업로드
            </S.Upload>
          </S.ContentsBox>
        </div>
      </S.WhiteBox>
    </S.Background>
  );
};

export default NoticeWirte;
