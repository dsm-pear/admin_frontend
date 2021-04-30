/* eslint-disable */
import React, { useEffect, useState } from 'react';
import * as S from './style';
import Header from '../../header/Header';
import { useHistory, useParams } from 'react-router-dom';
import { Download } from '../../../assets';
import DeleteNotice from './DeleteNotice';
import { Api, useRefresh, FileApi } from '../../../api/api';

const DetailNotice = () => {
  const [data, setData] = useState({ created_at: 0 });
  const refreshHandler = useRefresh();
  const [file, setFiles] = useState([{ path: '' }]);
  const [isClick, setIsClick] = useState(false);
  let { id } = useParams();

  // 공지사항 날짜
  const noticeDate = new Date(data['created_at']);
  const year = noticeDate.getFullYear();
  const month = noticeDate.getMonth() + 1;
  const date = noticeDate.getDate();
  const hours = noticeDate.getHours();
  const minutes = noticeDate.getMinutes();
  const showDate = `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분`;
  const history = useHistory();

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
    // 파일 상태
    const GetFilesId = () => {
      FileApi.get(`/notice/files/${id}`)
        .then((res) => {
          setFiles(res.data);
        })
        .catch(() => {
          setFiles();
        });
    };
    GetFilesId();
    ViewDetailNotice();
  }, [id]);

  const DeleteBtn = (e) => {
    setIsClick(true);
  };

  const onDownloadBtnClick = () => {
    const ATag = document.createElement('a');
    ATag.href = `http://54.180.224.67:3000/notice/${file[0].id}`;
    ATag.target = '_blank';
    ATag.click();
  };

  return (
    <S.Background>
      <Header />
      <S.WhiteBox>
        <S.TitleBox>
          <div>작성일</div>
          <S.Line />
          <div>{showDate}</div>
        </S.TitleBox>
        <S.NoticeTitle>
          <div>제목</div>
          <S.BlackLine />
          <div>{data.title}</div>
        </S.NoticeTitle>
        <S.Contents>{data.description}</S.Contents>
        <S.Flie>
          <div>첨부파일</div>
          <S.BlackLine />
          {file && (
            <>
              <div>{file[0].path}</div>
              <img src={Download} alt="다운로드" onClick={onDownloadBtnClick} />
            </>
          )}
        </S.Flie>
        <S.Delete onClick={DeleteBtn}>삭제</S.Delete>
        {isClick && (
          <DeleteNotice
            title={data.title}
            description={data.description}
            date={data.created_at}
            setIsClick={setIsClick}
            id={id}
            file={file}
          />
        )}
        <S.Modify onClick={() => history.push(`/notice/modify/${id}`)}>수정</S.Modify>
      </S.WhiteBox>
    </S.Background>
  );
};

export default DetailNotice;
