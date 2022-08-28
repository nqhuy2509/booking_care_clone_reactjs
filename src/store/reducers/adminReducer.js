import { sample } from 'lodash';
import actionTypes from '../actions/actionTypes';

const initialState = {
	isLoadingGender: false,
	genders: [],
	roles: [],
	positions: [],
	users: [],
	topDoctors: [],
	allDoctors: [],
	doctorInfo: '',
	doctorDetail: '',
	allTime: '',
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
		case actionTypes.FETCH_TOP_DOCTOR_SUCCESS:
			state.topDoctors = action.data;
			return {
				...state,
			};

		case actionTypes.FETCH_TOP_DOCTOR_FAILDED:
			state.topDoctors = [];
			return {
				...state,
			};

		case actionTypes.FETCH_ALL_DOCTORS_SUCCESS:
			state.allDoctors = action.data;
			return {
				...state,
			};

		case actionTypes.FETCH_ALL_DOCTORS_FAILDED:
			state.allDoctors = [];
			return {
				...state,
			};
		case actionTypes.FETCH_INFO_DOCTOR_SUCCESS:
			state.doctorData = action.data;
			return {
				...state,
			};
		case actionTypes.FETCH_INFO_DOCTOR_FAILED:
			state.doctorData = [];
			return { ...state };
		case actionTypes.FETCH_DETAIL_DOCTOR_SUCCESS:
			state.doctorDetail = action.data;
			return {
				...state,
			};
		case actionTypes.FETCH_DETAIL_DOCTOR_FAILED:
			return { ...state };
		case actionTypes.FETCH_ALLCODE_TIME_SUCCESS:
			state.allTime = action.data;
			return {
				...state,
			};
		case actionTypes.FETCH_ALLCODE_TIME_FAILED:
			state.allTime = [];
			return { ...state };
		default:
			return state;
	}
};

export default adminReducer;
