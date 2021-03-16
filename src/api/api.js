import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const Api = axios.create({
  baseURL: 'http://15.164.216.160:8000/admin',
});
export const FileApi = axios.create({
  baseURL: 'http://15.164.102.79:3000',
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
