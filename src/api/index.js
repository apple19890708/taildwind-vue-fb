import { aepAxios } from './aepBaseApi';
// import apiPost from './apiPost';
import { signUp, signIn, getProfile, signOutUser, updateProfile, updatePassword, getOtherUsersProfile, sendForgetMail, getLikeList, postFollow, cancelFollow, getFollowing } from './apiUser';
import { getAllPost, postNewPost, addLike, cancelLike, postComments, getOnePost } from './apiPost';

export {
	signUp,
	signIn,
	getProfile,
	getOtherUsersProfile,
	sendForgetMail,
	signOutUser,
	getAllPost,
	getOnePost,
	postNewPost,
	addLike,
	cancelLike,
	postComments,
	updateProfile,
	updatePassword,
	getLikeList,
	postFollow,
	cancelFollow,
	getFollowing
}

