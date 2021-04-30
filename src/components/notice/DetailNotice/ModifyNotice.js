import React, { useEffect, useState } from 'react';
import * as S from './style';
import Header from '../../header/Header';
import { Upload, Img, LinkImg } from '../../../assets';
import { Api, FileApi, useRefresh } from '../../../api/api';
import { useHistory, useParams } from 'react-router-dom';

const ModifyNotice = () => {
  const history = useHistory();
  const refreshHandler = useRefresh();
  const [data, setData] = useState({ title: '' });
  const [file, setFile] = useState([{ path: '' }]);
  const [changeTitle, setChangeTitle] = useState();
  const [changeDescription, setChangeDescription] = useState();
  let { id } = useParams();
  const ACCESS_TOKEN = localStorage.getItem('access_token');

  useEffect(() => {
    const ViewDetailNotice = () => {
      Api.get(`/notice/${id}`, {
        headers: {
          Authorization: `${ACCESS_TOKEN}`,
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
      FileApi.get(`/notice/files/${id}`)
        .then((res) => {
          setFile(res.data, { init: 1 });
        })
        .catch(() => {
          setFile();
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
    Api.patch(
      `/notice/${id}`,
      {
        title: changeTitle,
        description: changeDescription,
      },
      {
        headers: {
          Authorization: `${ACCESS_TOKEN}`,
        },
      }
    )
      .then(() => {
        if (file[0].init !== 1) {
          const formData = new FormData();
          formData.append('noticeFile', file[0]);
          FileApi.post(`/notice/files/${id}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          })
            .then(() => {
              console.log('file upload success');
              alert('공지사항 수정 완료');
              history.replace('/notice/view');
            })
            .catch(() => {
              console.log('file upload fail');
            });
        } else if (file[0].init === 1) {
          const formData = new FormData();
          formData.set('noticeFile', file[0]);
          FileApi.put(`/notice/${file[0].id}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          })
            .then(() => {
              console.log('file upload success');
              alert('공지사항 수정 완료');
              history.replace('/notice/view');
            })
            .catch(() => {
              console.log('file upload fail');
            });
        }
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

  const onFileChange = (e) => {
    setFile(e.target.files);
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
                <S.Label for="ffile">
                  <img src={LinkImg} alt="파일첨부" />
                  파일첨부
                </S.Label>
                <input
                  type="file"
                  accept=".pdf, .hwp, .txt"
                  id="ffile"
                  name="noticeFile"
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
                  onChange={onFileChange}
                />
              </div>
            </div>
            <S.MContents
              placeholder="내용을 입력해주세요."
              defaultValue={data.description}
              onChange={onDescriptionChange}
            />
            <S.MAddflie>
              파일첨부
              {file && <div>{file[0].name}</div>}
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
