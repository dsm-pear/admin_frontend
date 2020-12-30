import React, { useEffect, useState } from 'react';
import * as S from './style';
import Header from '../../header/Header';
import { Download, Send } from '../../../assets';
import ModalApprove from './ModalApprove';
import ModalComment from './ModalComment';
import { Api, useRefresh } from '../../../api/api';

const DetailApprove = ({id}) => {
    const [isApproveClick, setIsApproveClick] = useState(false);
    const [isDisapproveClick, setIsDisapproveClick] = useState(false);
    const [isSend, setIsSend] = useState(false);
    const [data, setData] = useState();
    const [comment, setComment] = useState('');
    const onApproveClick = () => {
        setIsApproveClick(true);
        setIsDisapproveClick(false);
    }
    const onDisapproveClick = () => {
        setIsApproveClick(false);
        setIsDisapproveClick(true);
    }
    const onSendClick = () => {
        setIsSend(true);
    }
    const onCommentChange = e => {
        setComment(e.target.value);
    }

    const refreshHandler = useRefresh();

    useEffect(() => {
        const ViewDetailApproveReport = () => {
            Api.get(`/request/<report_${id}>`, {
                headers: {
                    Authorization: localStorage.getItem('access_token')
                }
            })
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                switch(err.response.status) {
                    case 400:
                        alert('보고서 불러오기를 실패했습니다.');
                        break;
                    case 403:
                        refreshHandler()
                        .then(() => {
                            ViewDetailApproveReport();
                        })
                        break;
                    case 401:
                    case 422:
                        console.log(err);
                        break;
                    default:
                        break;
                };
            })
        }
        ViewDetailApproveReport();
    }, [id, refreshHandler])

    return(
        <S.Background>
            <Header />
            <S.WhiteBox>
                <S.TitleBox>
                    <div>작성자</div>
                    <S.Line />
                    <div>{data.member[0]}</div>
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
                    <div>팀 프로젝트 보고서.pdf</div>
                    <img src={Download} alt='다운로드'/>
                    <S.Preview>미리보기</S.Preview>
                </S.Flie>
                <S.Btn>
                    <S.DisApproveBtn onClick={onDisapproveClick} color={isDisapproveClick}>승인거부</S.DisApproveBtn>
                    <S.ApproveBtn onClick={onApproveClick} color={isApproveClick}>승인</S.ApproveBtn>
                </S.Btn>
                {isDisapproveClick &&
                    <S.Comment>
                        <div>COMMENT:</div>
                        <S.CommentInput onChange={onCommentChange} />
                        <S.Send onClick={onSendClick}>
                            <img src={Send} alt='send'/>
                        </S.Send>
                    </S.Comment>
                }
                {isSend &&
                    <ModalComment setIsDisapproveClick={setIsDisapproveClick} setIsSend={setIsSend} id={data.id} />
                }
                {isApproveClick &&
                    <ModalApprove setIsApproveClick={setIsApproveClick} id={data.id} comment={comment}/>
                }
            </S.WhiteBox>
        </S.Background>
    )
}

export default DetailApprove;