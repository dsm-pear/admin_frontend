import React, { useEffect, useState } from 'react';
import * as S from './style';
import Header from '../header/Header';
import Line from './Line';
import { Api, onRefresh } from '../../api/api';

const Question = () => {
    const [page, setPage] = useState(0);
    const [data, setData] = useState();
    setPage(1);

    useEffect(() => {
        const ViewQuestion = () => {
            Api.get(`/questions?page=${page}`, {
                body: {

                },
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
                        alert('문의사항 불러오기를 실패했습니다.');
                        break;
                    case 403:
                        onRefresh()
                        .then(() => {
                            ViewQuestion()
                        })
                        break;
                    default:
                        break;
                }
            })
        }
        ViewQuestion();
    }, [])

    return (
        <S.Background>
            <Header />
            <S.Contents>
                <S.Title>문의사항</S.Title>
                <S.Scontents>
                    <div>
                        {data &&
                        data.results &&
                        data.map(data => {
                            return (
                                <Line 
                                    key={data.id}
                                    id={data.id}
                                    date={data.date}
                                    email={data.email}
                                    description={data.description}
                                />
                            )
                        })}
                    </div>
                </S.Scontents>
            </S.Contents>
        </S.Background>
    )
}

export default Question;