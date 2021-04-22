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
  const [files, setFiles] = useState({ path: '' });
  let { id } = useParams();
  const date = new Date(data['created_at']);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const showDate = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
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
      FileApi.get(`/notice/files/${id}`, {})
        .then((res) => {
          setFiles(res.data);
          console.log(res.data);
        })
        .catch(() => {
          setFiles();
        });
    };
    GetFilesId();
    ViewDetailNotice();
  }, [id]);

  const [isClick, setIsClick] = useState(false);
  const DeleteBtn = (e) => {
    setIsClick(true);
  };

  const onDownloadBtnClick = () => {
    FileApi.get(`/notice/${files.id}`)
      .then(() => {
        alert('다운로드 성공');
      })
      .catch((err) => {
        alert('다운로드 실패');
        console.log(err);
      });
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
          {files && (
            <>
              <div>{files.path}</div>
              <img src={Download} alt="다운로드" onClick={onDownloadBtnClick} />
              <S.Preview>미리보기</S.Preview>
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
          />
        )}
        <S.Modify onClick={() => history.push(`/notice/modify/${id}`)}>수정</S.Modify>
      </S.WhiteBox>
    </S.Background>
  );
};

export default DetailNotice;
