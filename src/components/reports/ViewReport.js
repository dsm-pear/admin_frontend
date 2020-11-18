import React, { useState } from 'react';
import * as S from './style';
import Header from '../header/Header';
import ReportLine from './ReportLine';

const ViewReport = () => {
    const [select, setSelect] = useState('정렬');
    const [isFirstClick, setIsFirstClick] = useState(false);
    const [isSecondClick, setIsSecondClick] = useState(false);
    const [isThirdClick, setIsThirdClick] = useState(false);
    const [isFourthClick, setIsFourthClick] = useState(false);
    const onClick = e => {
        const selectname = e.currentTarget.dataset.selectname;
        if(selectname === 'title') {
            setSelect('제목');
        }
        else {
            setSelect('작성자');
        }
    }
    const onBtnClick = e => {
        const number = Number(e.currentTarget.dataset.id);
        if(number === 1) {
            setIsFirstClick(!isFirstClick);
        } else if(number === 2) {
            setIsSecondClick(!isSecondClick);
        } else if(number === 3) {
            setIsThirdClick(!isThirdClick);
        } else {
            setIsFourthClick(!isFourthClick);
        }
    }
    const dummyData = [{
        title: "탐책",
        name: "217호",
        date: "2020.11.14"
    }, {
        title: "보고서 제목",
        name: "작성자",
        date: "2020.11.14"
    }, {
        title: "보고서 제목",
        name: "작성자",
        date: "2020.11.14"
    }, {
        title: "보고서 제목",
        name: "작성자",
        date: "2020.11.14"
    }, {
        title: "보고서 관리 시스템",
        name: "페어",
        date: "2020.11.14"
    }, {
        title: "보고서 제목",
        name: "작성자",
        date: "2020.11.14"
    }, {
        title: "보고서 제목",
        name: "작성자",
        date: "2020.11.14"
    }]
    const [data, setData] = useState(dummyData);
    return (
        <S.Background>
            <Header />
            <S.WhiteBox>
                <div>
                    <S.SelectUl>
                        <S.Select>
                            <span>▼</span>
                            <span>{select}</span>
                            <S.SubSelect className='SubSelect'>
                                <S.SubSelectItem>
                                    <div className='items' data-selectname='title' onClick={onClick}>[제목]</div>
                                    <S.TitleSubLine className='items-line' />
                                </S.SubSelectItem>
                                <S.SubSelectItem>
                                    <div className='items' data-selectname='writer' onClick={onClick}>[작성자]</div>
                                    <S.SubLine className='items-line' />
                                </S.SubSelectItem>
                            </S.SubSelect>
                        </S.Select>
                    </S.SelectUl>
                    <S.SearchInput placeholder='검색어를 입력하세요'/>
                </div>
                <S.TitleLine>
                    <S.Title>보고서 보기</S.Title>
                    <S.Button onClick={onBtnClick} color={isFirstClick} data-id='1'>2021</S.Button>
                    <S.Button onClick={onBtnClick} color={isSecondClick} data-id='2'>개인</S.Button>
                    <S.Button onClick={onBtnClick} color={isThirdClick} data-id='3'>팀</S.Button>
                    <S.Button onClick={onBtnClick} color={isFourthClick} data-id='4'>동아리</S.Button>
                </S.TitleLine>
                <S.Download>다운로드</S.Download>
                <S.TitleBox>
                    <div>선택</div>
                    <div>제목</div>
                    <div>작성자</div>
                    <div>작성일</div>
                </S.TitleBox>
                <S.Lines>
                    {data.map(data => {
                        return (
                                <ReportLine 
                                    title={data.title}
                                    name={data.name}
                                    date={data.date}
                                />
                        )
                    })}
                </S.Lines>
                <div>
                    <S.Turn>◀︎</S.Turn>
                    <S.Count>
                        <div data-id='1'>1</div>
                        <div data-id='2'>2</div>
                        <div data-id='3'>3</div>
                        <div data-id='4'>4</div>
                        <div data-id='5'>5</div>
                    </S.Count>
                    <S.Turn>▶︎</S.Turn>
                </div>
            </S.WhiteBox>
        </S.Background>
    )
}

export default ViewReport;