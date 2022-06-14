import { aepAxios } from './aepBaseApi';
import { API_URL } from '../global/constant';


// 權限管理---------------------------------------------

export const signIn = (data) => aepAxios({
  method: 'post',
  data,
  url: `${API_URL}/users/sign_in`,
}).then(({ data: resData }) => resData);