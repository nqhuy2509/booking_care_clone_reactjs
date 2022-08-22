import actionTypes from './actionTypes';
import {
	getAllCode as getAllCodeService,
	createNewUser as createNewUserService,
	getAllUser as getAllUserService,
	deleteUser as deleteUserService,
} from '../../services/userService';

import { toast } from 'react-toastify';

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START,
// })

export const fetchGenderStart = () => {
	return async (dispatch, getState) => {
		try {
			dispatch({ type: actionTypes.FETCH_GENDER_START });
			let res = await getAllCodeService('gender');
			if (res && res.errCode === 0) {
				dispatch(fetchGenderSuccess(res.data));
			} else {
				dispatch(fetchGenderFailed());
			}
		} catch (e) {
			dispatch(fetchGenderFailed());
			console.log('fetchGenderStart error', e);
		}
	};
};

export const fetchPositionStart = () => {
	return async (dispatch, getState) => {
		try {
			let res = await getAllCodeService('position');
			if (res && res.errCode === 0) {
				dispatch(fetchPositionSuccess(res.data));
			} else {
				dispatch(fetchPositionFailed());
			}
		} catch (e) {
			dispatch(fetchPositionFailed());
			console.log('fetchPositionStart error', e);
		}
	};
};
export const fetchRoleStart = () => {
	return async (dispatch, getState) => {
		try {
			let res = await getAllCodeService('role');
			if (res && res.errCode === 0) {
				dispatch(fetchRoleSuccess(res.data));
			} else {
				dispatch(fetchRoleFailed());
			}
		} catch (e) {
			dispatch(fetchRoleFailed());
			console.log('fetchRoleStart error', e);
		}
	};
};

export const fetchGenderSuccess = (data) => ({
	type: actionTypes.FETCH_GENDER_SUCCESS,
	data,
});
export const fetchGenderFailed = () => ({
	type: actionTypes.FETCH_GENDER_FAILED,
});

export const fetchPositionSuccess = (data) => ({
	type: actionTypes.FETCH_POSITION_SUCCESS,
	data,
});
export const fetchPositionFailed = () => ({
	type: actionTypes.FETCH_POSITION_FAILED,
});

export const fetchRoleSuccess = (data) => ({
	type: actionTypes.FETCH_ROLE_SUCCESS,
	data,
});
export const fetchRoleFailed = () => ({
	type: actionTypes.FETCH_ROLE_FAILED,
});

export const createNewUser = (data) => {
	return async (dispatch, getState) => {
		try {
			let isSuccess;
			let res = await createNewUserService(data);
			if (res && res.errCode === 0) {
				isSuccess = true;
				toast.success('Create a new user succeed!!');
				dispatch(saveUserSuccess(isSuccess));
				dispatch(fetchAllUser());
			} else {
				isSuccess = false;
				toast.error(res.message);
				dispatch(saveUserFailed(isSuccess));
			}
		} catch (e) {
			dispatch(saveUserFailed());
			console.log('saveUserFailed error', e);
		}
	};
};

export const saveUserSuccess = (isSuccess) => ({
	type: actionTypes.CREATE_USER_SUCCESS,
	isSuccess,
});
export const saveUserFailed = (isSuccess) => ({
	type: actionTypes.CREATE_USER_FAILED,
	isSuccess,
});

export const fetchAllUser = () => {
	return async (dispatch, getState) => {
		try {
			let res = await getAllUserService('ALL');
			if (res && res.errCode === 0) {
				dispatch(fetchAllUserSuccess(res.users.reverse()));
			} else {
				dispatch(fetchAllUserFailed());
			}
		} catch (e) {
			dispatch(fetchAllUserFailed());
			console.log('fetchAllUserFailed error', e);
		}
	};
};

export const fetchAllUserSuccess = (users) => ({
	type: actionTypes.FETCH_ALL_USER_SUCCESS,
	users,
});

export const fetchAllUserFailed = () => ({
	type: actionTypes.FETCH_GENDER_FAILED,
});

export const deleteUser = (id) => {
	return async (dispatch, getState) => {
		try {
			let res = await deleteUserService(id);
			if (res && res.errCode === 0) {
				toast.success('Delete the user succeed!');
				dispatch(deleteUserSuccess());
				dispatch(fetchAllUser());
			} else {
				toast.error('Delete user error!!!');
				dispatch(deleteUserFailed());
			}
		} catch (e) {
			toast.error('Delete user error!!!');
			dispatch(deleteUserFailed());
			console.log('fetchAllUserFailed error', e);
		}
	};
};

export const deleteUserSuccess = () => ({
	type: actionTypes.DELETE_USER_SUCCESS,
});

export const deleteUserFailed = () => ({
	type: actionTypes.DELETE_USER_FAILED,
});
