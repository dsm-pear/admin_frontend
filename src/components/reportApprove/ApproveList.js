import React, { useEffect, useState } from 'react';
import * as S from './style';
import Header from '../header/Header';
import ReportLine from './ReportLine';
import { Api, useRefresh } from '../../api/api';

const ApproveList = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({ created_at: 0 });
  const [rdata, setRData] = useState([]);
  const refreshHandler = useRefresh();
  const [isPage, setIsPage] = useState(true);

  const ViewList = (page) => {
    Api.get(`/request?page=${page}`, {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then((res) => {
        setData(res.data);
        setRData((prevData) => [...prevData, ...res.data.results]);
      })
      .catch((err) => {
        switch (err.response.status) {
          case 400:
            alert('보고서 불러오기를 실패했습니다!');
            break;
          case 403:
            refreshHandler().then(() => {
              ViewList();
            });
            break;
          default:
            break;
        }
      });
  };

  useEffect(() => {
    {
      isPage && ViewList(page);
    }
  }, [page]);

  const _infiniteScroll = () => {
    let scrollHeight = document.querySelector('.approveBox').scrollHeight;
    let scrollTop = document.querySelector('.approveBox').scrollTop;
    let clientHeight = document.querySelector('.approveBox').clientHeight;

    if (scrollTop > 0 && scrollTop + clientHeight >= scrollHeight - 1) {
      if (page + 1 >= data.total_pages) {
        setIsPage(false);
      } else setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', _infiniteScroll, true);
    return () => {
      window.removeEventListener('scroll', _infiniteScroll, true);
    };
  }, []);

  return (
    <S.Background>
      <Header />
      <S.WhiteBox>
        <S.Title>승인대기 보고서</S.Title>
        <S.SmallBox className="approveBox">
          <div>
            {rdata &&
              rdata.map((data) => {
                return (
                  <ReportLine
                    key={data.id}
                    id={data.id}
                    number={data.id}
                    title={data.title}
                    writer={data.author}
                    dates={data.created_at}
                  />
                );
              })}
          </div>
        </S.SmallBox>
      </S.WhiteBox>
    </S.Background>
  );
};

export default ApproveList;
