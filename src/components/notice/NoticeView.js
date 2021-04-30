import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import Header from '../header/Header';
import NoticeLine from './NoticeLine';
import { Api, useRefresh } from '../../api/api';

const NoticeView = () => {
  const [page, pageChange] = useState(1);
  const [data, setData] = useState({ total_pages: 0 });
  const [pageList, setPageList] = useState(0);
  const refreshHandler = useRefresh();

  useEffect(() => {
    const ViewNotice = () => {
      Api.get(`/notice?page=${page}`, {
        params: page,
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
              alert('공지사항 불러오기를 실패했습니다.');
              break;
            case 403:
              refreshHandler().then(() => {
                ViewNotice();
              });
              break;
            default:
              break;
          }
        });
    };
    ViewNotice();
  }, [page]);

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

  return (
    <S.Background>
      <Header />
      <S.LWhiteBox>
        <div>
          <S.Notice>공지사항</S.Notice>
          <Link to="/notice">
            <S.Write>쓰기</S.Write>
          </Link>
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
              data.results.map((data) => {
                return (
                  <NoticeLine
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    noticeDate={data.created_at}
                  />
                );
              })}
          </ul>
        </div>
        <div>
          <S.Turn onClick={prev}>◀︎</S.Turn>
          <S.Count>{pageBtn()}</S.Count>
          <S.Turn onClick={next}>▶︎</S.Turn>
        </div>
      </S.LWhiteBox>
    </S.Background>
  );
};

export default NoticeView;
