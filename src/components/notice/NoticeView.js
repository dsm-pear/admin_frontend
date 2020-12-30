import React, { useState, useCallback, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as S from './style';
import Header from '../header/Header';
import NoticeLine from './NoticeLine';
import { Api, useRefresh } from '../../api/api';

const NoticeView = () => {
    const history = useHistory();
    const [page, pageChange] = useState(1);
    const [data, setData] = useState({total_pages: 0});
    const refreshHandler = useRefresh();

    useEffect(() => {
        const ViewNotice = () => {
            Api.get('/notice', {
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
                        alert('공지사항 불러오기를 실패했습니다.');
                        break;
                    case 403:
                        refreshHandler()
                        .then(() => {
                            ViewNotice()
                        })
                        break;
                    default:
                        break;
                }
            })
        }
        ViewNotice();
    }, [page, refreshHandler])

    /* 페이지 버튼 클릭시 */
    const onPageBtnClick = e => {
        let id = e.target.dataset.id;
        pageChange(id);
    }

    const setPageNumberClassName = useCallback((nowPage, i)=> {
        return Number(nowPage) === i + 1 ? "pageBtnClick" : '';
    }, []);
    
    const pageBtn = useCallback(() => {
        const pages = data.total_pages;
        const pageNumber = [];
        for(let i = 0; i < pages; i++) {
            pageNumber.push(
                <div data-id={i+1} onClick={onPageBtnClick} className={setPageNumberClassName(page, i)}>{i+1}</div>
            );
        }
        return pageNumber;
    }, [page, data.total_pages, setPageNumberClassName]);

    return (
        <S.Background>
            <Header />
            <S.LWhiteBox>
                <div>
                    <S.Notice>공지사항</S.Notice>
                    <Link to='/notice'><S.Write>쓰기</S.Write></Link>
                    <S.Watch>보기</S.Watch>
                </div>
                <div>
                    <S.NoticeTitle>
                        <div>공지사항</div>
                        <div>작성일</div>
                    </S.NoticeTitle>
                    <ul>
                        {data &&
                        data.results &&
                        data.results.map(data => {
                            return (
                                <NoticeLine 
                                    key={data.id}
                                    id={data.id}
                                    title={data.title}
                                    date={data['created_at']}
                                    onClick={() => history.push(`/notice/view-notice?id=${data.id}`)}
                                />
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