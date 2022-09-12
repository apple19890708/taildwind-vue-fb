import { aepAxios } from './aepBaseApi';
// import apiPost from './apiPost';
import { signUp, signIn, getProfile, signOutUser, updateProfile, getOtherUsersProfile } from './apiUser';
import { getAllPost, postNewPost, addLike, cancelLike, postComments } from './apiPost';

export {
	signUp,
	signIn,
	getProfile,
	getOtherUsersProfile,
	signOutUser,
	getAllPost,
	postNewPost,
	addLike,
	cancelLike,
	postComments,
	updateProfile
}

