import { aepAxios } from './aepBaseApi';
import { API_URL } from '../global/constant';


// 權限管理---------------------------------------------

export const signUp = (data) => aepAxios({
  method: 'post',
  data,
  url: `${API_URL}/users/sign_up`,
}).then(({ data: resData }) => resData);

export const signIn = (data) => aepAxios({
  method: 'post',
  data,
  url: `${API_URL}/users/sign_in`,
}).then(({ data: resData }) => resData);

export const getProfile = () => aepAxios({
  method: 'get',
  url: `${API_URL}/users/profile`,
}).then(( data ) => data);

export const getOtherUsersProfile = (id) => aepAxios({
  method: 'get',
  url: `${API_URL}/users/${id}/getOtherProfile`,
}).then(( data ) => data);


export const updateProfile = (data) => aepAxios({
  method: 'patch',
  data,
  url: `${API_URL}/users/profile`,
}).then(({ data: resData }) => resData);

export const signOutUser = () => aepAxios({
  method: 'post',
  url: `${API_URL}/users/sign_out`,
}).then(( data ) => data);

