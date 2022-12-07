import { aepAxios } from './aepBaseApi';
import { API_URL } from '../global/constant';

// 取得所有貼文

export const getAllPost = () => aepAxios({
  method: 'get',
  url: `${API_URL}/posts`,
}).then(( data ) => data);

export const getOnePost = (id) => aepAxios({
  method: 'get',
  url: `${API_URL}/posts/user/${id}`,
}).then(( data ) => data);

export const postNewPost = (data) => aepAxios({
  method: 'post',
	data,
  url: `${API_URL}/posts`,
}).then(({ data: ResData }) => ResData);

export const addLike = (id) => aepAxios({
  method: 'post',
  url: `${API_URL}/posts/${id}/likes`,
}).then(( data ) => data);

export const cancelLike = (id) => aepAxios({
  method: 'delete',
  url: `${API_URL}/posts/${id}/likes`,
}).then(( data ) => data);

export const postComments = (id, data) => aepAxios({
  method: 'post',
  data,
  url: `${API_URL}/posts/${id}/comment`,
}).then(({ data: resData }) => resData);
