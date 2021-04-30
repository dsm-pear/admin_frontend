import React, { useEffect, useState } from 'react';
import * as S from './style';
import Header from '../../header/Header';
import { Download, Send } from '../../../assets';
import ModalApprove from './ModalApprove';
import ModalComment from './ModalComment';
import { Api, useRefresh, FileApi } from '../../../api/api';
import { useParams } from 'react-router-dom';

const DetailApprove = () => {
  const refreshHandler = useRefresh();
  const [isApproveClick, setIsApproveClick] = useState(false);
  const [isDisapproveClick, setIsDisapproveClick] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [data, setData] = useState({ created_at: 0, languages: '', author: '' });
  const [comment, setComment] = useState('');
  let { id } = useParams();
  const [files, setFiles] = useState([{ path: '' }]);
  const [language, setLanguage] = useState(['X']);
  // 보고서 날짜
  const reportDate = new Date(data.created_at);
  const year = reportDate.getFullYear();
  const month = reportDate.getMonth() + 1;
  const date = reportDate.getDate();
  const hours = reportDate.getHours();
  const minutes = reportDate.getMinutes();
  const showDate = `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분`;

  // 승인버튼
  const onApproveClick = () => {
    setIsApproveClick(true);
    setIsDisapproveClick(false);
  };
  // 승인거부버튼
  const onDisapproveClick = () => {
    setIsApproveClick(false);
    setIsDisapproveClick(true);
  };
  // 전송버튼
  const onSendClick = () => {
    setIsSend(true);
  };
  const onCommentChange = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    const ViewDetailApproveReport = () => {
      Api.get(`/request/${id}`, {
        headers: {
          Authorization: localStorage.getItem('access_token'),
        },
      })
        .then((res) => {
          setData(res.data, { init: 1 });
          if (data.languages !== '') {
            setLanguage(data.languages.split(','));
          }
        })
        .catch((err) => {
          switch (err.response.status) {
            case 400:
              alert('보고서 불러오기를 실패했습니다.');
              break;
            case 403:
              refreshHandler().then(() => {
                ViewDetailApproveReport();
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
      FileApi.get(`/report/files/${id}`)
        .then((res) => {
          setFiles(res.data);
        })
        .catch(() => {
          setFiles();
        });
    };
    ViewDetailApproveReport();
    GetFileId();
  }, [id]);

  const onDownloadBtnClick = () => {
    const ATag = document.createElement('a');
    ATag.href = `http://54.180.224.67:3000/report/${files[0].id}`;
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
        {data.type === 'TEAM' ||
          (data.type === 'CIRCLE' && (
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
          ))}
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
        <S.Btn>
          <S.DisApproveBtn onClick={onDisapproveClick} color={isDisapproveClick}>
            승인거부
          </S.DisApproveBtn>
          <S.ApproveBtn onClick={onApproveClick} color={isApproveClick}>
            승인
          </S.ApproveBtn>
        </S.Btn>
        {isDisapproveClick && (
          <S.Comment>
            <div>COMMENT:</div>
            <S.CommentInput onChange={onCommentChange} />
            <S.Send onClick={onSendClick}>
              <img src={Send} alt="send" />
            </S.Send>
          </S.Comment>
        )}
        {isSend && (
          <ModalComment
            setIsDisapproveClick={setIsDisapproveClick}
            setIsSend={setIsSend}
            id={data.id}
            comment={comment}
          />
        )}
        {isApproveClick && <ModalApprove setIsApproveClick={setIsApproveClick} id={data.id} />}
      </S.WhiteBox>
    </S.Background>
  );
};

export default DetailApprove;
