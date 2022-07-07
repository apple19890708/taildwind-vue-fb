import axios from 'axios'
import { API_URL } from '../global/constant';

const BASE_URL = API_URL

export const aepAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json',
    withCredentials: true,
    crossDomain: true
  },
})

aepAxios.interceptors.response.use(undefined, (err) => { // 攔截到 response 發生錯誤時的 error 處理
  localStorage.removeItem('metaWall');
  localStorage.removeItem('isLogin');
  console.log('err', JSON.stringify(err.response.data))

  // window.location.href = '/#/sign-in'
  throw err
})
