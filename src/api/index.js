import { aepAxios } from './aepBaseApi';
// import apiPost from './apiPost';
import { signUp, signIn, getProfile, signOutUser, updateProfile, getOtherUsersProfile, sendForgetMail } from './apiUser';
import { getAllPost, postNewPost, addLike, cancelLike, postComments } from './apiPost';

export {
	signUp,
	signIn,
	getProfile,
	getOtherUsersProfile,
	sendForgetMail,
	signOutUser,
	getAllPost,
	postNewPost,
	addLike,
	cancelLike,
	postComments,
	updateProfile
}

