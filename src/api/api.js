import axios from 'axios';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const Api = axios.create({
  baseURL: 'http://54.180.160.189:8000/admin',
});
export const FileApi = axios.create({
  baseURL: 'http://211.38.86.92:3001/',
});

export const useRefresh = () => {
  const history = useHistory();
  return () =>
    Api.post(
      '/refresh',
      {},
      {
        headers: {
          Authorization: localStorage.getItem('refresh_token'),
        },
      }
    )
      .then((res) => {
        localStorage.setItem('access_token', res.data.access_token);
      })
      .catch(() => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        history.push('/');
      });
};

export const useIsLogin = () => {
  const history = useHistory();
  useEffect(() => {
    const ACCESS_TOKEN = localStorage.access_token;
    if (!ACCESS_TOKEN) history.replace('/');
  }, [history]);
};
