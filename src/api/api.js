import axios from 'axios'

export const Api = axios.create({
    baseURL: 'http://10.156.147.50:8000/admin'
})

export const onRefresh = ({history}) => {
    Api.post('/refresh', {
        refreshToken: localStorage.getItem('refresh_token')
    })
    .then((res) => {
        localStorage.setItem('access_token', res.data['access_token']);
    })
    .catch((err) => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        history.push('/');
    })
}