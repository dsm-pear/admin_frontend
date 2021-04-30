import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FileApi } from '../../api/api';
import * as S from './style';

const ReportLine = ({ title, soleName, teamName, date, id, setDownloadFiles, downloadFiles }) => {
  const [isCheck, setIsCheck] = useState(false);
  const history = useHistory();
  const dates = new Date(date);
  const year = dates.getFullYear();
  const month = dates.getMonth() + 1;
  const day = dates.getDay();
  const hours = dates.getHours();
  const minutes = dates.getMinutes();
  const showDate = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
  const showSoleName = soleName[0].name;

  const onClick = () => {
    setIsCheck(!isCheck);
    if (isCheck !== true) {
      FileApi.get(`/report/files/${id}`)
        .then((res) => {
          console.log(res.data);
          setDownloadFiles([
            ...downloadFiles,
            { files: res.data[0].path, report_id: id, fileId: res.data[0].id },
          ]);
        })
        .catch(() => {
          alert('보고서가 존재하지 않습니다.');
        });
    }
  };

  return (
    <S.Line>
      <S.CheckBox onClick={onClick} boolean={isCheck} />
      <a onClick={() => history.push(`/report/view-report/${id}`)}>
        <div>{title}</div>
        {teamName === null && <div>{showSoleName}</div>}
        {teamName !== null && <div>{teamName}</div>}
        <div>{showDate}</div>
      </a>
    </S.Line>
  );
};

export default ReportLine;
