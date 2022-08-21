import axios from '../axios'

const handleLogin = (email, password) => {
    return axios.post('api/v1/login', {
        email,
        password,
    })
}

const getAllUser = (id) => {
    return axios.get('api/v1/get-all-users', {
        params: {
            id,
        },
    })
}

const createNewUser = (data) => {
    return axios.post('api/v1/create-new-user', data)
}

const deleteUser = (id) => {
    return axios.delete('api/v1/delete-user', { data: { id } })
}

const editUser = (data) => {
    return axios.put('api/v1/edit-user', data)
}

const getAllCode = (data) => {
    return axios.get('/api/v1/allcode', {
        params: {
            type: data,
        },
    })
}

export {
    handleLogin,
    getAllUser,
    createNewUser,
    deleteUser,
    editUser,
    getAllCode,
}
