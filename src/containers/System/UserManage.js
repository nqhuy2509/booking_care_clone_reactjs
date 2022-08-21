import React, { Component } from 'react'
import { connect } from 'react-redux'

import './UserManage.scss'
import {
    getAllUser,
    createNewUser as createNewUserService,
    deleteUser as deleteUserService,
    editUser as editUserService,
} from '../../services/userService'
import ModalUser from './ModalUser'
import ModalEditUser from './ModalEditUser'

import { emitter } from '../../utils/emitter'

class UserManage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allUsers: [],
            isOpenModalAdd: false,
            isOpenEditUser: false,
            userEdit: '',
        }
    }

    async componentDidMount() {
        this.getAllUserFromReact()
    }

    getAllUserFromReact = async () => {
        let res = await getAllUser('ALL')
        if (res) {
            if (res.errCode === 0) {
                this.setState({
                    allUsers: res.users,
                })
            }
        }
    }

    handleAddUser = () => {
        this.setState({
            isOpenModalAdd: !this.state.isOpenModalAdd,
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalAdd: !this.state.isOpenModalAdd,
        })
    }

    toggleEditUserModal = () => {
        this.setState({
            isOpenEditUser: !this.state.isOpenEditUser,
            userEdit: '',
        })
    }

    createNewUser = async (data) => {
        try {
            let res = await createNewUserService(data)
            if (res && res.errCode !== 0) {
                alert(res.message)
                // return false
            } else {
                await this.getAllUserFromReact()
                this.setState({
                    isOpenModalAdd: false,
                })
                // return to valiate clear modal create user
                // return true
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
        } catch (e) {
            console.log(e)
        }
    }

    handleDeleteUser = async (user) => {
        try {
            let res = await deleteUserService(user.id)
            if (res && res.errCode !== 0) {
                alert(res.message)
            } else {
                await this.getAllUserFromReact()
            }
        } catch (e) {
            console.log(e)
        }
    }

    handleEditUser = (user) => {
        this.setState({
            isOpenEditUser: true,
            userEdit: user,
        })
    }

    handleSaveEditUser = async (data) => {
        try {
            let res = await editUserService(data)
            if (res && res.errCode !== 0) {
                alert(res.message)
            } else {
                await this.getAllUserFromReact()
                this.setState({
                    isOpenEditUser: false,
                })
            }
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        let arrUsers = this.state.allUsers
        return (
            <div className='users-container'>
                <ModalUser
                    isOpen={this.state.isOpenModalAdd}
                    toggle={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />

                <ModalEditUser
                    isOpen={this.state.isOpenEditUser}
                    toggle={this.toggleEditUserModal}
                    currentUser={this.state.userEdit}
                    editUser={this.handleSaveEditUser}
                />
                <div className='title text-center'>Manage users</div>
                <div className='mx-1'>
                    <button
                        onClick={() => this.handleAddUser()}
                        type='button'
                        className='btn btn-primary px-2'
                    >
                        <i className='fas fa-plus me-2'></i>
                        Add new user
                    </button>
                </div>
                <div className='users-table mt-3 mx-1'>
                    <table className='table table-bordered table-hover'>
                        <thead className='table-success'>
                            <tr>
                                <th scope='col' className='text-center'>
                                    ID
                                </th>
                                <th scope='col'>Email</th>
                                <th scope='col'>First Name</th>
                                <th scope='col'>Last Name</th>
                                <th scope='col'>Address</th>
                                <th scope='col' className='text-center'>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {arrUsers &&
                                arrUsers.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <th
                                                scope='row'
                                                className='text-center'
                                            >
                                                {item.id}
                                            </th>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td className='text-center'>
                                                <button
                                                    className='edit-btn'
                                                    onClick={() =>
                                                        this.handleEditUser(
                                                            item
                                                        )
                                                    }
                                                >
                                                    <i className='fas fa-edit'></i>
                                                </button>
                                                <button
                                                    className='delete-btn'
                                                    onClick={() =>
                                                        this.handleDeleteUser(
                                                            item
                                                        )
                                                    }
                                                >
                                                    <i className='fas fa-trash-alt'></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserManage)
