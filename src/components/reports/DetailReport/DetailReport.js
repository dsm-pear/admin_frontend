/* eslint-disable */
import React, { useState, useEffect } from 'react';
import * as S from './style';
import Header from '../../header/Header';
import Comment from './Comment';
import { Download } from '../../../assets';
import { Api, FileApi, useRefresh } from '../../../api/api';
import { useParams } from 'react-router-dom';

const DetailReport = () => {
  const [data, setData] = useState({ type: '', author: '', languages: '' });
  const [files, setFiles] = useState([{ path: '' }]);
  const [language, setLanguage] = useState(['X']);
  const refreshHandler = useRefresh();
  let { id } = useParams();
  // 보고서 날짜
  const reportDate = new Date(data.created_at);
  const year = reportDate.getFullYear();
  const month = reportDate.getMonth() + 1;
  const date = reportDate.getDate();
  const hours = reportDate.getHours();
  const minutes = reportDate.getMinutes();
  const showDate = `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분`;
  const ACCESS_TOKEN = localStorage.getItem('access_token');

  useEffect(() => {
    const ViewDetailReport = () => {
      Api.get(`/list/${id}`, {
        headers: {
          Authorization: `${ACCESS_TOKEN}`,
        },
      })
        .then((res) => {
          setData(res.data);
          if (res.data.languages !== '') {
            setLanguage(res.data.languages.split(','));
          }
        })
        .catch((err) => {
          switch (err.response.stauts) {
            case 400:
              alert('보고서 불러오기를 실패했습니다.');
              break;
            case 403:
              refreshHandler().then(() => {
                ViewDetailReport();
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
    const GetFilesId = () => {
      FileApi.get(`/report/files/${id}`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      })
        .then((res) => {
          setFiles(res.data);
        })
        .catch(() => {
          setFiles();
        });
    };
    ViewDetailReport();
    GetFilesId();
  }, [id]);

  const onDownloadBtnClick = () => {
    const ATag = document.createElement('a');
    ATag.href = `http://211.38.86.92:3001/report/${files[0].id}?token=Bearer ${ACCESS_TOKEN}`;
    ATag.target = '_blank';
    ATag.click();
  };

  return (
    <S.Background>
      <Header />
      <S.WhiteBox>
        <S.TitleBox>
          <div>작성자</div>
          <S.Line />
          {data.author === null && <div>{data.member[0].name}</div>}
          {data.author !== null && <div>{data.author}</div>}
          <div>작성일</div>
          <S.Line />
          <div>{showDate}</div>
        </S.TitleBox>
        <S.Title>
          <div>제목</div>
          <S.BlackLine />
          <div>{data.title}</div>
        </S.Title>
        <S.Contents>{data.description}</S.Contents>
        {data.author !== null && (
          <S.Team>
            <div>TEAM MEMBER</div>
            <S.SBlackLine />
            {data &&
              data.member &&
              data.member.map((data) => {
                return (
                  <S.TeamMember>
                    <div>{data.name}</div>
                    <div>{data.user_email}</div>
                  </S.TeamMember>
                );
              })}
          </S.Team>
        )}
        <S.GithubLanguageBox>
          <S.Github>
            <div>GitHub</div>
            <S.SBlackLine />
            <a href={data.github} target="_blank" rel="noopener noreferrer">
              {data.github}
            </a>
          </S.Github>
          <S.LanguageBox>
            <div>사용언어</div>
            <S.SBlackLine />
            {language &&
              language.map((language) => {
                return <S.Language>{language}</S.Language>;
              })}
          </S.LanguageBox>
        </S.GithubLanguageBox>
        <S.Flie>
          <div>첨부파일</div>
          <S.BlackLine />
          {files && (
            <>
              <div>{files[0].path}</div>
              <img src={Download} alt="다운로드" onClick={onDownloadBtnClick} />
            </>
          )}
        </S.Flie>
        <S.CommentTitle>댓글</S.CommentTitle>
        <S.CommentBox>
          {data &&
            data.comments &&
            data.comments.map((data) => {
              return (
                <Comment
                  key={data.id}
                  Rid={id}
                  Cid={data.id}
                  name={data.name}
                  text={data.content}
                  date={data.created_at}
                />
              );
            })}
        </S.CommentBox>
      </S.WhiteBox>
    </S.Background>
  );
};

export default DetailReport;
