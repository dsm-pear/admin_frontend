import React, { useState } from 'react';
import * as S from './style';
import Header from '../header/Header';
import ReportLine from './ReportLine';

const ViewReport = () => {
    const [select, setSelect] = useState('정렬');
    const onClick = e => {
        const selectname = e.currentTarget.dataset.selectname;
        if(selectname === 'title') {
            setSelect('제목');
        }
        else {
            setSelect('작성자');
        }
    };
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
                <S.Title>보고서 보기</S.Title>
                <S.Download>다운로드</S.Download>
                <S.TitleBox>
                    <div>선택</div>
                    <div>제목</div>
                    <div>작성자</div>
                    <div>작성일</div>
                </S.TitleBox>
                <S.Lines>
                    <ReportLine 
                        title="보고서 제목"
                        name="작성자"
                        date="2020.20.20"
                    />
                    <ReportLine 
                        title="보고서 제목"
                        name="작성자"
                        date="2020.20.20"
                    />
                    <ReportLine 
                        title="보고서 제목"
                        name="작성자"
                        date="2020.20.20"
                    />
                    <ReportLine 
                        title="보고서 제목"
                        name="작성자"
                        date="2020.20.20"
                    />
                    <ReportLine 
                        title="보고서 제목"
                        name="작성자"
                        date="2020.20.20"
                    />
                    <ReportLine 
                        title="보고서 제목"
                        name="작성자"
                        date="2020.20.20"
                    />
                    <ReportLine 
                        title="보고서 제목"
                        name="작성자"
                        date="2020.20.20"
                    />
                </S.Lines>
                <div>
                    <S.Turn>◀︎</S.Turn>
                    <S.Count>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </S.Count>
                    <S.Turn>▶︎</S.Turn>
                </div>
            </S.WhiteBox>
        </S.Background>
    )
}

export default ViewReport;