import { aepAxios } from './aepBaseApi';
// import apiPost from './apiPost';
import { signUp, signIn, getProfile, signOutUser } from './apiUser';
import { getAllPost, postNewPost, addLike, cancelLike, postComments } from './apiPost';

export {
	signUp,
	signIn,
	getProfile,
	signOutUser,
	getAllPost,
	postNewPost,
	addLike,
	cancelLike,
	postComments
}

