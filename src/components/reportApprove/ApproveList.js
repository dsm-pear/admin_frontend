import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';
import Header from '../header/Header';
import ReportLine from './ReportLine';
import { Api, useRefresh } from '../../api/api';

const ApproveList = () => {
    const history = useHistory();
    const [page, setPage] = useState(1);
    const [data, setData] = useState();
    const refreshHandler = useRefresh();

    useEffect(() => {
        const ViewList = () => {
            Api.get(`/request?page=${page}`, {
                body: page,
                headers: {
                    Authorization: localStorage.getItem('access_token')
                }
            })
            .then((res) => {
                setData((prevData) => [...prevData, ...res.data]);
            })
            .catch((err) => {
                switch(err.response.status) {
                    case 400:
                        alert('보고서 불러오기를 실패했습니다!');
                        break;
                    case 403:
                        refreshHandler()
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
    }, [page, refreshHandler])
    
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
                                <ReportLine 
                                    key={data.id}
                                    number={data.id}
                                    title={data.title}
                                    date={data['created_at']}
                                    onClick={() => history.push(`/approve/view-approve-report?id=${data.id}`)}
                                />
                            )
                        })}
                    </div>
                </S.SmallBox>
            </S.WhiteBox>
        </S.Background>
    )
}

export default ApproveList;