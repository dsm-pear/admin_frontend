import React, { useEffect, useState } from 'react';
import * as S from './style';
import Header from '../../header/Header';
import { Upload, Img, LinkImg } from '../../../assets';
import { Api, FileApi, useRefresh } from '../../../api/api';
import { useParams } from 'react-router-dom';

const ModifyNotice = () => {
  const refreshHandler = useRefresh();
  const [data, setData] = useState({ title: '' });
  const [file, setFile] = useState({ path: '' });
  const [changeTitle, setChangeTitle] = useState();
  const [changeDescription, setChangeDescription] = useState();
  let { id } = useParams();

  useEffect(() => {
    const ViewDetailNotice = () => {
      Api.get(`/notice/${id}`, {
        headers: {
          Authorization: localStorage.getItem('access_token'),
        },
      })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          switch (err.response.status) {
            case 400:
              alert('공지사항 불러오기를 실패했습니다.');
              break;
            case 403:
              refreshHandler().then(() => {
                ViewDetailNotice();
              });
              break;
            case 401:
            case 422:
              console.log(err);
              break;
            default:
              break;
          }
        });
    };
    const GetFileId = () => {
      FileApi.post(`/notice/files/${id}`, {
        body: {
          notice_id: id,
        },
      })
        .then((res) => {
          setFile(res.data);
        })
        .catch((err) => {
          alert('파일 불러오기 실패');
          console.log(err);
        });
    };
    ViewDetailNotice();
    GetFileId();
  }, []);

  const onTitleChange = (e) => {
    setChangeTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setChangeDescription(e.target.value);
  };

  const onUploadBtnClick = () => {
    Api.patch(`/notice/${id}`, {
      body: {
        title: changeTitle,
        description: changeDescription,
      },
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(() => {
        alert('공지사항 수정 완료');
      })
      .catch((err) => {
        switch (err.response.status) {
          case 400:
            alert('공지사항 수정 실패');
            break;
          case 403:
            refreshHandler().then(() => {
              onUploadBtnClick();
            });
            break;
          default:
            break;
        }
      });
  };

  return (
    <S.MBackground>
      <Header />
      <S.MWhiteBox>
        <div>
          <S.MNotice>공지사항</S.MNotice>
          <S.MLWrite>수정</S.MLWrite>
        </div>
        <div>
          <S.MTitle
            placeholder="제목을 입력해주세요."
            defaultValue={data.title}
            onChange={onTitleChange}
          />
          <S.MContentsBox>
            <div>
              <S.MContentsTitle>내용입력</S.MContentsTitle>
              <div>
                <S.MAdd>
                  <img src={LinkImg} alt="파일첨부" />
                  파일첨부
                </S.MAdd>
                <S.MAdd>
                  <img src={Img} width="13px" height="13px" alt="사진첨부" />
                  사진첨부
                </S.MAdd>
              </div>
            </div>
            <S.MContents
              placeholder="내용을 입력해주세요."
              defaultValue={data.description}
              onChange={onDescriptionChange}
            />
            <S.MAddflie>
              파일첨부
              <div>{file.path}</div>
            </S.MAddflie>
            <S.MUpload onClick={onUploadBtnClick}>
              <img src={Upload} alt="업로드" width="12px" height="12px" />
              업로드
            </S.MUpload>
          </S.MContentsBox>
        </div>
      </S.MWhiteBox>
    </S.MBackground>
  );
};

export default ModifyNotice;
