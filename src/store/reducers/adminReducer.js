import actionTypes from '../actions/actionTypes';

const initialState = {
	isLoadingGender: false,
	genders: [],
	roles: [],
	positions: [],
};

const adminReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_GENDER_START:
			state.isLoadingGender = true;
			return {
				...state,
			};
		case actionTypes.FETCH_GENDER_SUCCESS:
			state.isLoadingGender = false;
			state.genders = action.data;
			return {
				...state,
			};
		case actionTypes.FETCH_GENDER_FAILED:
			state.isLoadingGender = false;
			return {
				...state,
			};
		case actionTypes.FETCH_POSITION_SUCCESS:
			state.positions = action.data;
			return {
				...state,
			};
		case actionTypes.FETCH_POSITION_FAILED:
			return {
				...state,
			};
		case actionTypes.FETCH_ROLE_SUCCESS:
			state.roles = action.data;
			return {
				...state,
			};
		case actionTypes.FETCH_ROLE_FAILED:
			return {
				...state,
			};
		case actionTypes.CREATE_USER_SUCCESS:
			state.isCreatedSuccess = action.isSuccess;
			return {
				...state,
			};
		case actionTypes.CREATE_USER_FAILED:
			state.isCreatedSuccess = action.isSuccess;
			return {
				...state,
			};
		case actionTypes.FETCH_ALL_USER_SUCCESS:
			state.users = action.users;
			return {
				...state,
			};
		case actionTypes.FETCH_ALL_USER_FAILED:
			return {
				...state,
			};
		default:
			return state;
	}
};

export default adminReducer;
