import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';
import Header from '../header/Header';
import ReportLine from './ReportLine';
import { Api, FileApi, useRefresh } from '../../api/api';

const ViewReport = () => {
    const history = useHistory();
    const [isFirstClick, setIsFirstClick] = useState(false);
    const [isSecondClick, setIsSecondClick] = useState(false);
    const [isThirdClick, setIsThirdClick] = useState(false);
    const [isFourthClick, setIsFourthClick] = useState(false);
    const [filter, setFilter] = useState('');
    const [page, pageChange] = useState(1);
    const [data, setData] = useState({total_pages: 0});
    const [select, setSelect] = useState('정렬');
    const [searchData, setSearchData] = useState('');
    const refreshHandler = useRefresh();

    /* 검색 선택 창 */
    const onClick = e => {
        const selectname = e.currentTarget.dataset.selectname;
        if(selectname === 'title') {
            setSelect('제목');
        }
        else {
            setSelect('작성자');
        }
    }

    /* 보고서 보기 선택 창 */
    const onBtnClick = e => {
        const number = Number(e.currentTarget.dataset.id);
        if(number === 1) {
            setFilter('2021');
            setIsFirstClick(!isFirstClick);
        } else if(number === 2) {
            setFilter('개인')
            setIsSecondClick(!isSecondClick);
        } else if(number === 3) {
            setFilter('팀')
            setIsThirdClick(!isThirdClick);
        } else {
            setFilter('동아리')
            setIsFourthClick(!isFourthClick);
        }
        onFilterBtnClick();
    }

    useEffect(() => {
        const ViewReport = () => {
            Api.get(`/list?page=${page}`, {
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
                        alert('보고서 불러오기를 실패했습니다.');
                        break;
                    case 403:
                        refreshHandler()
                        .then(() => {
                            ViewReport();
                        })
                        break;
                    default:
                        break;
                }
            })
        }
        ViewReport();
    }, [page, refreshHandler])

    // 검색
    const onSearchBtnClick = () => {
        Api.get(`/list/search?q=${searchData}`, {
            body: {
                q: searchData,
                sort: select,
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
                    alert('보고서 검색을 실패했습니다.');
                    break;
                case 403:
                    refreshHandler()
                    .then(() => {
                        onSearchBtnClick();
                    })
                    break;
                default:
                    break;
            }
        })
    }

    // 필터링
    const onFilterBtnClick = () => {
        Api.get('/list/filter', {
            body: {
                q: filter
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
                    alert('보고서 불러오기 실패');
                    break;
                case 403:
                    refreshHandler()
                    .then(() => {
                        onFilterBtnClick()
                    })
                    break;
                default:
                    break;
            }
        })
    }

    const onSearchValueChange = e => {
        setSearchData(e.target.value);
    }

    /* 페이지 버튼 클릭시 */
    const onPageBtnClick = e => {
        let id = e.target.dataset.id;
        pageChange(id);
    }

    const setPageNumberClassName = useCallback((nowPage, i)=> {
        return Number(nowPage) === i + 1 ? "pageBtnClick" : '';
    }, []);
    
    const renderPageBtn = useCallback(() => {
        const pages = data.total_pages;
        const pageNumber = [];
        for(let i = 0; i < pages; i++) {
            pageNumber.push(
                <div data-id={i+1} onClick={onPageBtnClick} className={setPageNumberClassName(page, i)}>{i+1}</div>
            );
        }
        return pageNumber;
    }, [page, data.total_pages, setPageNumberClassName]);

    // 파일 다운로드
    const onDownloadBtnClick = () => {
        FileApi.get('/files', {
            body: {

            }
        })
        .then(() => {
            alert('다운로드 성공');
        })
        .catch((err) => {
            alert('다운로드 실패');
            console.log(err);
        }) 
    }

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
                    <S.SearchInput placeholder='검색어를 입력하세요' onChange={onSearchValueChange}/>
                    <S.SearchBtn onClick={onSearchBtnClick}>검색</S.SearchBtn>
                </div>
                <S.TitleLine>
                    <S.Title>보고서 보기</S.Title>
                    <S.Button onClick={onBtnClick} color={isFirstClick} data-id='1'>2021</S.Button>
                    <S.Button onClick={onBtnClick} color={isSecondClick} data-id='2'>개인</S.Button>
                    <S.Button onClick={onBtnClick} color={isThirdClick} data-id='3'>팀</S.Button>
                    <S.Button onClick={onBtnClick} color={isFourthClick} data-id='4'>동아리</S.Button>
                </S.TitleLine>
                <S.Download onClick={onDownloadBtnClick}>다운로드</S.Download>
                <S.TitleBox>
                    <div>선택</div>
                    <div>
                        <div>제목</div>
                        <div>작성자</div>
                        <div>작성일</div>
                    </div>
                </S.TitleBox>
                <S.Lines>
                    {data&&
                    data.results &&
                    data.results.map(data => {
                        return (
                            <ReportLine
                                key={data.id}
                                id={data.id}
                                title={data.title}
                                name={data.author}
                                date={data['created_at']}
                                onClick={() => history.push(`/report/view-report?id=${data.id}`)}
                            />
                        )
                    })}
                </S.Lines>
                <div>
                    <S.Turn>◀︎</S.Turn>
                    <S.Count>
                        {renderPageBtn()}
                    </S.Count>
                    <S.Turn>▶︎</S.Turn>
                </div>
            </S.WhiteBox>
        </S.Background>
    )
}

export default ViewReport;