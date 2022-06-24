import { aepAxios } from './aepBaseApi';
import { API_URL } from '../global/constant';

// 取得所有貼文

export const getAllPost = () => aepAxios({
  method: 'get',
  url: `${API_URL}/posts`,
}).then(( data ) => data);

export const postNewPost = (data) => aepAxios({
  method: 'post',
	data,
  url: `${API_URL}/posts`,
}).then(({ data: ResData }) => ResData);