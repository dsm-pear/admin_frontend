/* eslint-disable */
import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style';
import Header from '../header/Header';
import ReportLine from './ReportLine';
import { Api, useRefresh } from '../../api/api';

const ViewReport = () => {
  const refreshHandler = useRefresh();
  const [filter, setFilter] = useState('');
  const [page, pageChange] = useState(1);
  const [pageList, setPageList] = useState(0);
  const [filterPage, setFilterPage] = useState(1);
  const [sort, setSort] = useState('');
  const [data, setData] = useState({ total_pages: 0 });
  const [select, setSelect] = useState('정렬');
  const [searchData, setSearchData] = useState('');
  const [downloadFiles, setDownloadFiles] = useState([]);
  // filter btn
  const [isFirstClick, setIsFirstClick] = useState(false);
  const [isSecondClick, setIsSecondClick] = useState(false);
  const [isThirdClick, setIsThirdClick] = useState(false);
  const [isFourthClick, setIsFourthClick] = useState(false);

  /* 검색 선택 창 */
  const onClick = (e) => {
    const selectname = e.currentTarget.dataset.selectname;
    if (selectname === 'title') {
      setSelect('제목');
      setSort('title');
    } else {
      setSelect('작성자');
      setSort('user');
    }
  };

  /* 보고서 보기 선택 창 */
  const onBtnClick = (e) => {
    const number = Number(e.currentTarget.dataset.id);
    if (number === 1) {
      setIsFirstClick(!isFirstClick);
      if (!isFirstClick === true) {
        setIsSecondClick(false);
        setIsThirdClick(false);
        setIsFourthClick(false);
      }
      setFilter(isFirstClick ? '' : e.currentTarget.dataset.type);
    } else if (number === 2) {
      setIsSecondClick(!isSecondClick);
      if (!isSecondClick === true) {
        setIsFirstClick(false);
        setIsThirdClick(false);
        setIsFourthClick(false);
      }
      setFilter(isSecondClick ? '' : e.currentTarget.dataset.type);
    } else if (number === 3) {
      setIsThirdClick(!isThirdClick);
      if (!isThirdClick === true) {
        setIsFirstClick(false);
        setIsSecondClick(false);
        setIsFourthClick(false);
      }
      setFilter(isThirdClick ? '' : e.currentTarget.dataset.type);
    } else {
      setIsFourthClick(!isFourthClick);
      if (!isFourthClick === true) {
        setIsFirstClick(false);
        setIsSecondClick(false);
        setIsThirdClick(false);
      }
      setFilter(isFourthClick ? '' : e.currentTarget.dataset.type);
    }
  };

  // 보고서 불러오기
  const ViewReport = (page) => {
    Api.get(`/list?page=${page}`, {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        switch (err.response.status) {
          case 400:
            alert('보고서 불러오기를 실패했습니다.');
            break;
          case 403:
            refreshHandler().then(() => {
              ViewReport();
            });
            break;
          default:
            break;
        }
      });
  };

  // 필터링
  const onFilterBtnClick = (type, page) => {
    Api.get(`/list/filter?q=${type}&page=${page}`, {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        switch (err.response.status) {
          case 400:
            alert('보고서 불러오기 실패');
            break;
          case 403:
            refreshHandler().then(() => {
              onFilterBtnClick();
            });
            break;
          default:
            break;
        }
      });
  };

  useEffect(() => {
    if (searchData === '') {
      if (filter === '') {
        ViewReport(page);
      } else {
        setFilterPage(page);
        onFilterBtnClick(filter, filterPage);
      }
    } else {
      onSearchBtnClick();
    }
  }, [filter, page, filterPage]);

  // 검색
  const onSearchBtnClick = () => {
    Api.get(`/list/search?q=${searchData}&sort=${sort}&page=${page}`, {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        switch (err.response.status) {
          case 400:
            alert('보고서 검색을 실패했습니다.');
            break;
          case 403:
            refreshHandler().then(() => {
              onSearchBtnClick();
            });
            break;
          default:
            break;
        }
      });
  };

  const onSearchValueChange = (e) => {
    setSearchData(e.target.value);
  };

  /* 페이지 버튼 클릭시 */
  const onPageBtnClick = (e) => {
    let id = e.target.dataset.id;
    pageChange(id);
  };

  const setPageNumberClassName = useCallback((nowPage, i) => {
    return Number(nowPage) === i + 1 ? 'pageBtnClick' : '';
  }, []);

  const pageBtn = useCallback(() => {
    const totalPages = data.total_pages;
    const pageNumber = [];
    const pages = Math.floor(totalPages / 5);
    if (pages === 0) {
      for (let i = 0; i < totalPages; i++) {
        pageNumber.push(
          <div data-id={i + 1} onClick={onPageBtnClick} className={setPageNumberClassName(page, i)}>
            {i + 1}
          </div>
        );
      }
    } else if (pages !== 0 && totalPages % 5 === 0) {
      for (let i = 0; i < 5; i++) {
        pageNumber.push(
          <div
            data-id={i + 1 + pageList * 5}
            onClick={onPageBtnClick}
            className={setPageNumberClassName(page, i)}
          >
            {i + 1 + pageList * 5}
          </div>
        );
      }
    } else if (pages !== 0 && totalPages % 5 !== 0) {
      for (let i = pageList * 5; i < (pageList + 1) * 5; i++) {
        if (i + 1 < totalPages) {
          pageNumber.push(
            <div
              data-id={i + 1}
              onClick={onPageBtnClick}
              className={setPageNumberClassName(page, i)}
            >
              {i + 1}
            </div>
          );
        }
      }
    }
    return pageNumber;
  }, [page, data.total_pages, setPageNumberClassName]);

  const prev = () => {
    if (pageList > 0) {
      if (page % 5 === 0) {
        if (page - 5 !== 0) {
          pageChange(page - 5);
        }
      } else {
        pageChange(page - 1);
      }
      setPageList(pageList - 1);
    }
  };

  const next = () => {
    if (pageList < Math.floor(data.total_pages / 5)) {
      if (page % 5 !== 0) {
        if (page + 5 < data.total_pages) {
          pageChange(page + 5);
        } else pageChange(data.total_pages);
      } else {
        if (Number(page) + 1 < data.total_pages) {
          pageChange(Number(page) + 1);
        }
      }
      setPageList(pageList + 1);
    }
  };

  // 파일 다운로드
  const onDownloadBtnClick = () => {
    console.log(downloadFiles);
    const ATag = document.createElement('a');
    if (downloadFiles.length === 1) {
      ATag.href = `http://211.38.86.92:3001/report/${downloadFiles[0].fileId}`;
      ATag.target = '_blank';
      ATag.click();
    } else {
      let baseUrl = 'http://211.38.86.92:3001/files?';
      for (let i = 0; i < downloadFiles.length - 1; i++) {
        baseUrl += `files=${downloadFiles[i].report_id}&`;
      }
      ATag.href = baseUrl + `${downloadFiles[downloadFiles.length - 1].report_id}`;
      ATag.target = '_blank';
      ATag.click();
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
              <S.SubSelect className="SubSelect">
                <S.SubSelectItem>
                  <div className="items" data-selectname="title" onClick={onClick}>
                    [제목]
                  </div>
                  <S.TitleSubLine className="items-line" />
                </S.SubSelectItem>
                <S.SubSelectItem>
                  <div className="items" data-selectname="user" onClick={onClick}>
                    [작성자]
                  </div>
                  <S.SubLine className="items-line" />
                </S.SubSelectItem>
              </S.SubSelect>
            </S.Select>
          </S.SelectUl>
          <S.SearchInput placeholder="검색어를 입력하세요" onChange={onSearchValueChange} />
          <S.SearchBtn onClick={onSearchBtnClick}>검색</S.SearchBtn>
        </div>
        <S.TitleLine>
          <S.Title>보고서 보기</S.Title>
          <S.Button onClick={onBtnClick} color={isFirstClick} data-type="2021" data-id="1">
            2021
          </S.Button>
          <S.Button onClick={onBtnClick} color={isSecondClick} data-type="SOLE" data-id="2">
            개인
          </S.Button>
          <S.Button onClick={onBtnClick} color={isThirdClick} data-type="TEAM" data-id="3">
            팀
          </S.Button>
          <S.Button onClick={onBtnClick} color={isFourthClick} data-type="CIRCLE" data-id="4">
            동아리
          </S.Button>
        </S.TitleLine>
        <S.Download onClick={onDownloadBtnClick}>다운로드</S.Download>
        <S.TitleBox>
          <div>선택</div>
          <div>
            <div>제목</div>
            <div>작성일</div>
          </div>
        </S.TitleBox>
        <S.Lines>
          {data &&
            data.results &&
            data.results.map((data) => {
              return (
                <ReportLine
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  date={data.created_at}
                  setDownloadFiles={setDownloadFiles}
                  downloadFiles={downloadFiles}
                />
              );
            })}
        </S.Lines>
        <div>
          <S.Turn onClick={prev}>◀︎</S.Turn>
          <S.Count>{pageBtn()}</S.Count>
          <S.Turn onClick={next}>▶︎</S.Turn>
        </div>
      </S.WhiteBox>
    </S.Background>
  );
};

export default ViewReport;
