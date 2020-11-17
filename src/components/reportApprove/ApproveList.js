import React, { useState } from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import ReportLine from './ReportLine';

const ApproveList = () => {
    const dummyData = [{
        number: '01.',
        title: '탐책',
        team: '217호',
        date: '2020.11.14',
    }, {
        number: '02.',
        title: '보고서 제목',
        team: '팀이름',
        date: '2020.20.20',
    }, {
        number: '03.',
        title: '보고서 제목',
        team: '팀이름',
        date: '2020.20.20',
    }]
    const [data, setData] = useState(dummyData);
    return (
        <S.Background>
            <Header />
            <S.WhiteBox>
                <S.Title>승인대기 보고서</S.Title>
                <S.SmallBox>
                    <div>
                        {data.map(data => {
                            return (
                                <Link to='/approve/view-approve-report'>
                                    <ReportLine 
                                        number={data.number}
                                        title={data.title}
                                        team={data.team}
                                        date={data.date}
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