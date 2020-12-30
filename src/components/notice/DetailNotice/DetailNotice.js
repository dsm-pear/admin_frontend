import React, { useEffect, useState } from 'react';
import * as S from './style';
import Header from '../../header/Header';
import { Link } from 'react-router-dom';
import { Download } from '../../../assets';
import DeleteNotice from './DeleteNotice';
import { Api, useRefresh, FileApi } from '../../../api/api';

const DetailNotice = ({id}) => {
    const [data, setData] = useState();
    const refreshHandler = useRefresh();
    const [files, setFiles] = useState();

    useEffect(() => {
        const ViewDetailNotice = () => {
            Api.get(`/notice/<notice_${id}>`, {
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
                    alert('공지사항 불러오기를 실패했습니다.');
                    break;
                case 403:
                    refreshHandler()
                    .then(() => {
                        ViewDetailNotice();
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
            FileApi.get(`/notice/files/{notice_${id}}`, {
                body: {
                    notice_id: id
                }
            })
            .then((res) => {
                setFiles(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        }
        GetFilesId();
        ViewDetailNotice();
    }, [id, refreshHandler])

    const [isClick, setIsClick] = useState(false);
    const DeleteBtn = e => {
        setIsClick(true);
    }

    const onDownloadBtnClick = () => {
        FileApi.get(`notice/{file_${files.id}}`, {
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

    return (
        <S.Background>
            <Header />
            <S.WhiteBox>
                <S.TitleBox>
                    <div>승인날짜</div>
                    <S.Line />
                    <div>{data.created_at}</div>
                </S.TitleBox>
                <S.NoticeTitle>
                    <div>제목</div>
                    <S.BlackLine />
                    <div>{data.title}</div>
                </S.NoticeTitle>
                <S.Contents>
                    {data.description}
                </S.Contents>
                <S.Flie>
                    <div>첨부파일</div>
                    <S.BlackLine />
                    <div>{files.path}</div>
                    <img src={ Download } alt='다운로드' onClick={onDownloadBtnClick}/>
                    <S.Preview>미리보기</S.Preview>
                </S.Flie>
                <S.Delete onClick={DeleteBtn}>삭제</S.Delete>
                {isClick &&
                    <DeleteNotice title={data.title} description={data.description} date={data.created_at} setIsClick={setIsClick} id={id}/>
                }
                <S.Modify>
                    <Link to='/notice/modify'>
                        수정
                    </Link>
                </S.Modify>
            </S.WhiteBox>
        </S.Background>
    )
}

export default DetailNotice;