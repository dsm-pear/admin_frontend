import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import ReportLine from './ReportLine';
import { Api, onRefresh } from '../../api/api';

const ApproveList = () => {
    const [page, setPage] = useState();
    const [data, setData] = useState();
    setPage(1);

    useEffect(() => {
        const ViewList = () => {
            Api.get(`/request?page=${page}`, {
                body: page,
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
                        alert('보고서 불러오기를 실패했습니다!');
                        break;
                    case 403:
                        onRefresh()
                        .then(() => {
                            ViewList()
                        })
                        break;
                    default:
                        break;
                }
            })
        }
        ViewList();
    }, [page])
    
    return (
        <S.Background>
            <Header />
            <S.WhiteBox>
                <S.Title>승인대기 보고서</S.Title>
                <S.SmallBox>
                    <div>
                        {data &&
                        data.results &&
                        data.results.map(data => {
                            return (
                                <Link to='/approve/view-approve-report'>
                                    <ReportLine 
                                        key={data.id}
                                        number={data.id}
                                        title={data.title}
                                        date={data['created_at']}
                                    />
                                </Link>
                            )
                        })}
                    </div>
                </S.SmallBox>
            </S.WhiteBox>
        </S.Background>
    )
}

export default ApproveList;