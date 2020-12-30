import React, { useState, useEffect } from 'react';
import * as S from './style';
import Header from '../../header/Header';
import Comment from './Comment';
import { Download } from '../../../assets';
import { Api, FileApi, useRefresh } from '../../../api/api';

const DetailReport = ({id}) => {
    const [data, setData] = useState();
    const [files, setFiles] = useState();
    const [isTeam, setIsTeam] = useState(true);
    const refreshHandler = useRefresh();

    useEffect(() => {
        const ViewDetailReport = () => {
            Api.get(`/list/<report_${id}>`, {
                headers: {
                    Authorization: localStorage.getItem('access_token')
                }
            })
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                switch(err.response.stauts) {
                    case 400:
                        alert('보고서 불러오기를 실패했습니다.');
                        break;
                    case 403:
                        refreshHandler()
                        .then(() => {
                            ViewDetailReport();
                        })
                        break;
                    case 401:
                    case 422:
                        console.log(err);
                        break;
                    default:
                        break;
                }
            })
        }
        const GetFilesId = () => {
            FileApi.get(`/report/files/{report_${id}}`, {
                body: {
                    report_id: id
                }
            })
            .then((res) => {
                setFiles(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        }
        const setType = () => {
            if(data.type === 'SOLE') {
                setIsTeam(false);
            }
            else setIsTeam(true);
        }
        ViewDetailReport();
        GetFilesId();
        setType();
    }, [id, refreshHandler])

    const onDownloadBtnClick = () => {
        FileApi.get(`/report/{file_${files.id}}`, {
            body: {
                files_id: files.id
            }
        })
        .then(() => {
            alert('다운로드 성공');
        })
        .catch((err) => {
            alert('다운로드 실패');
            console.log(err);
        })
    }

    return(
        <S.Background>
            <Header />
            <S.WhiteBox>
                <S.TitleBox>
                    <div>작성자</div>
                    <S.Line />
                    <div>{data.type === 'TEAM' || data.type === 'CIRCLE' ? data.author : data.author[0].name}</div>
                    <div>작성일</div>
                    <S.Line />
                    <div>{data['created_at']}</div>
                </S.TitleBox>
                <S.Title>
                    <div>제목</div>
                    <S.BlackLine />
                    <div>{data.title}</div>
                </S.Title>
                <S.Contents>
                    {data.description}
                </S.Contents>
                {isTeam &&
                    <S.Team>
                        <div>TEAM MEMBER</div>
                        <S.SBlackLine />
                        {data.member.map(data => {
                            return(
                                <S.TeamMember>
                                    <div>{data['user_email']}</div>
                                    <div>{data.name}</div>
                                </S.TeamMember>
                            )
                        })}
                    </S.Team>
                }
                <div>
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
                        <S.Language>{data.languages}</S.Language>
                    </S.LanguageBox>
                </div>
                <S.Flie>
                    <div>첨부파일</div>
                    <S.BlackLine />
                    <div>{files.path}</div>
                    <img src={ Download } alt='다운로드' onClick={onDownloadBtnClick}/>
                    <S.Preview>미리보기</S.Preview>
                </S.Flie>
                <S.CommentTitle>댓글</S.CommentTitle>
                <S.CommentBox>
                    {data.comments.map(data => {
                        return (
                            <Comment 
                                key={data.id}
                                Rid={id}
                                Cid={data.id}
                                name={data.name}
                                text={data.content}
                                date={data['created_at']}
                            />
                        )
                    })}
                </S.CommentBox>
            </S.WhiteBox>
        </S.Background>
    )
}

export default DetailReport;