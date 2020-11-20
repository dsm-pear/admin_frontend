import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import Header from '../header/Header';
import NoticeLine from './NoticeLine';

const NoticeView = () => {
    const [page, pageChange] = useState(1);

    /* 더미데이터 */
    const dummyData = {
        count: 7,
	    total_pages: 5,
	    results: [{
            title: "보고서 작성 양식 알려드립니다.",
            date: "2020.20.20"
        }, {
            title: "제출 오류 관련",
            date: "1919.19.19"
        }, {
            title: "공지사항 테스트입니다.",
            date: "1818.18.18"
        }, {
            title: "보고서 작성 양식 알려드립니다.",
            date: "2020.20.20"
        }, {
            title: "보고서 작성 양식 알려드립니다.",
            date: "2020.20.20"
        }, {
            title: "보고서 작성 양식 알려드립니다.",
            date: "2020.20.20"
        }, {
            title: "보고서 작성 양식 알려드립니다.",
            date: "2020.20.20"
        }]
    }
    const [data] = useState(dummyData.results);

    /* 페이지 버튼 클릭시 */
    const onPageBtnClick = e => {
        let id = e.target.dataset.id;
        pageChange(id);
    }

    const setPageNumberClassName = useCallback((nowPage, i)=> {
        return Number(nowPage) === i + 1 ? "pageBtnClick" : '';
    }, []);
    
    const pageBtn = useCallback(() => {
        const pages = dummyData.total_pages; // 5
        const pageNumber = [];
        console.log(page)
        for(let i = 0; i < pages; i++) {
            pageNumber.push(
                <div data-id={i+1} onClick={onPageBtnClick} className={setPageNumberClassName(page, i)}>{i+1}</div>
            );
        }
        return pageNumber;
    }, [page, dummyData, setPageNumberClassName]);

    return (
        <S.Background>
            <Header />
            <S.LWhiteBox>
                <div>
                    <S.Notice>공지사항</S.Notice>
                    <Link to='/notice-write'><S.Write>쓰기/</S.Write></Link>
                    <S.Watch>보기</S.Watch>
                </div>
                <div>
                    <S.NoticeTitle>
                        <div>공지사항</div>
                        <div>작성일</div>
                    </S.NoticeTitle>
                    <ul>
                        {data.map(data => {
                            return (
                                <Link to='/notice/view-notice'>
                                    <NoticeLine 
                                        title={data.title}
                                        date={data.date}
                                    />
                                </Link>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <S.Turn>◀︎</S.Turn>
                    <S.Count>
                        {pageBtn()}
                    </S.Count>
                    <S.Turn>▶︎</S.Turn>
                </div>
            </S.LWhiteBox>
        </S.Background>
    )
}

export default NoticeView;