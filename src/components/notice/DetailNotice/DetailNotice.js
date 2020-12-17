import React, { useEffect, useState } from 'react';
import * as S from './style';
import Header from '../../header/Header';
import { Link } from 'react-router-dom';
import { Download } from '../../../assets';
import DeleteNotice from './DeleteNotice';
import { Api } from '../../../api/api';

const DetailNotice = ({id}) => {

    const [data, setData] = useState();

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
            switch(err.response.stauts) {
                case 400:
                    alert('공지사항 불러오기에 실패했습니다.');
                    break;
                case 404:
                    console.log(err);
                    break;
                default:
                    break;
            }
        })
        }
        ViewDetailNotice();
    }, [])

    const [isClick, setIsClick] = useState(false);
    const DeleteBtn = e => {
        setIsClick(true);
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
                    <div>보고서 제출 양식.hwp</div>
                    <img src={ Download } alt='다운로드'/>
                    <S.Preview>미리보기</S.Preview>
                </S.Flie>
                <S.Delete onClick={DeleteBtn}>삭제</S.Delete>
                {isClick &&
                    <DeleteNotice setIsClick={setIsClick} id={id}/>
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