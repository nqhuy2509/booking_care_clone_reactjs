import axios from '../axios';

const handleLogin = (email, password) => {
	return axios.post('api/v1/login', {
		email,
		password,
	});
};

const getAllUser = (id) => {
	return axios.get('api/v1/get-all-users', {
		params: {
			id,
		},
	});
};

const createNewUser = (data) => {
	return axios.post('api/v1/create-new-user', data);
};

const deleteUser = (id) => {
	return axios.delete('api/v1/delete-user', { data: { id } });
};

const editUser = (data) => {
	return axios.put('api/v1/edit-user', data);
};

const getAllCode = (data) => {
	return axios.get('/api/v1/allcode', {
		params: {
			type: data,
		},
	});
};

const getDoctorHome = (limit) => {
	return axios.get('/api/v1/top-doctor-home', {
		params: {
			limit,
		},
	});
};

const getAllDoctor = () => {
	return axios.get('/api/v1/get-all-doctor');
};

const saveInfoDoctor = (data) => {
	return axios.post('/api/v1/post-info-doctor', data);
};

const getInfoDoctor = (id) => {
	return axios.get('/api/v1/get-info-doctor', { params: { id: id } });
};

const saveEditInfoDoctor = (data) => {
	return axios.put('/api/v1/edit-info-doctor', data);
};

const getDetailDoctorById = (id) => {
	return axios.get('/api/v1/get-detail-doctor-by-id', { params: { id } });
};

const saveBulkScheduleDoctor = (data) => {
	return axios.post('/api/v1/bulk-create-schedule', data);
};

export {
	handleLogin,
	getAllUser,
	createNewUser,
	deleteUser,
	editUser,
	getAllCode,
	getDoctorHome,
	getAllDoctor,
	saveInfoDoctor,
	getInfoDoctor,
	saveEditInfoDoctor,
	getDetailDoctorById,
	saveBulkScheduleDoctor,
};
