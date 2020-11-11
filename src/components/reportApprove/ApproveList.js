import React from 'react';
import * as S from './style';
import Header from '../header/Header';
import ReportLine from './ReportLine';

const ApproveList = () => {
    return (
        <S.Background>
            <Header />
            <S.WhiteBox>
                <S.Title>승인대기 보고서</S.Title>
                <S.SmallBox>
                    <div>
                        <ReportLine 
                            number='01.'
                            title='보고서 제목'
                            team='팀이름'
                            date='2020.20.20'
                        />
                        <ReportLine 
                            number='02.'
                            title='보고서 제목'
                            team='팀이름'
                            date='2020.20.20'
                        />
                        <ReportLine 
                            number='03.'
                            title='보고서 제목'
                            team='팀이름'
                            date='2020.20.20'
                        />
                        <ReportLine 
                            number='04.'
                            title='보고서 제목'
                            team='팀이름'
                            date='2020.20.20'
                        />
                        <ReportLine 
                            number='05.'
                            title='보고서 제목'
                            team='팀이름'
                            date='2020.20.20'
                        />
                        <ReportLine 
                            number='06.'
                            title='보고서 제목'
                            team='팀이름'
                            date='2020.20.20'
                        />
                        <ReportLine 
                            number='07.'
                            title='보고서 제목'
                            team='팀이름'
                            date='2020.20.20'
                        />
                        <ReportLine 
                            number='08.'
                            title='보고서 제목'
                            team='팀이름'
                            date='2020.20.20'
                        />
                        <ReportLine 
                            number='09.'
                            title='보고서 제목'
                            team='팀이름'
                            date='2020.20.20'
                        />
                        <ReportLine 
                            number='10.'
                            title='보고서 제목'
                            team='팀이름'
                            date='2020.20.20'
                        />
                    </div>
                </S.SmallBox>
            </S.WhiteBox>
        </S.Background>
    )
}

export default ApproveList;