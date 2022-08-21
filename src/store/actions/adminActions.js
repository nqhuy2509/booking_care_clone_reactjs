import actionTypes from './actionTypes';
import {
	getAllCode as getAllCodeService,
	createNewUser as createNewUserService,
} from '../../services/userService';

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
			let res = await createNewUserService(data);
			console.log(data);
			console.log('check create redux', res);
			if (res && res.errCode === 0) {
				dispatch(saveUserSuccess());
			} else {
				dispatch(saveUserFailed());
			}
		} catch (e) {
			dispatch(saveUserFailed());
			console.log('saveUserFailed error', e);
		}
	};
};

export const saveUserSuccess = () => ({
	type: 'CREATE_USER_SUCCESS',
});
export const saveUserFailed = () => ({
	type: 'CREATE_USER_FAILED',
});
