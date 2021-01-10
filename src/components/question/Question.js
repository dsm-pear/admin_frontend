import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style';
import Header from '../header/Header';
import Line from './Line';
import { Api, useRefresh } from '../../api/api';

const Question = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [rdata, setRData] = useState([]);
  const refreshHandler = useRefresh();

  const ViewQuestion = (page) => {
    Api.get('/question', {
      body: page,
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then((res) => {
        setData(res.data);
        setRData((prevData) => [...res.data.results, ...prevData]);
      })
      .catch((err) => {
        switch (err.response.status) {
          case 400:
            alert('문의사항 불러오기를 실패했습니다.');
            break;
          case 403:
            refreshHandler().then(() => {
              ViewQuestion();
            });
            break;
          default:
            break;
        }
      });
  };
  useEffect(() => {
    console.log(page);
    ViewQuestion(page);
  }, [page]);

  const _infiniteScroll = () => {
    let scrollHeight = document.querySelector('.questionBox').scrollHeight;
    let scrollTop = document.querySelector('.questionBox').scrollTop;
    let clientHeight = document.querySelector('.questionBox').clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', _infiniteScroll, true);
  }, [_infiniteScroll]);

  return (
    <S.Background>
      <Header />
      <S.Contents>
        <S.Title>문의사항</S.Title>
        <S.Scontents>
          <div className="questionBox">
            {rdata &&
              rdata.map((data) => {
                return (
                  <Line
                    key={data.id}
                    title={data.description}
                    id={data.id}
                    date={data.date}
                    email={data.email}
                    description={data.description}
                  />
                );
              })}
          </div>
        </S.Scontents>
      </S.Contents>
    </S.Background>
  );
};

export default Question;
