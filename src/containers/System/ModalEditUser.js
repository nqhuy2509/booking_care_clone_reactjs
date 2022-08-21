import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { connect } from 'react-redux'
import _ from 'lodash'

class ModalEditUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!prevProps.currentUser && this.props.currentUser) {
            let user = this.props.currentUser

            if (user && !_.isEmpty(user)) {
                this.setState({
                    ...user,
                    password: '******',
                })
            }
        }
    }

    toggle = () => {
        this.props.toggle()
    }

    closeBtn = (
        <button
            className='btn btn-close-white fs-4 px-2'
            onClick={() => this.toggle()}
            type='button'
        >
            &times;
        </button>
    )

    handleInputValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    checkValidateInput = () => {
        let isValid = true
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false
                alert('Missing parameter: ' + arrInput[i])
                break
            }
        }
        return isValid
    }

    handleSaveUser = async () => {
        let isValid = this.checkValidateInput()
        if (isValid) {
            this.props.editUser(
                _.pick(this.state, ['id', 'firstName', 'lastName', 'address'])
            )
        }
    }

    render() {
        return (
            <>
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={() => this.toggle()}
                    size='lg'
                    centered
                >
                    <ModalHeader
                        toggle={() => this.toggle()}
                        close={this.closeBtn}
                    >
                        Edit user info
                    </ModalHeader>
                    <ModalBody>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6 mb-3'>
                                    <label className='form-label'>Email:</label>
                                    <input
                                        onChange={(e) =>
                                            this.handleInputValue(e)
                                        }
                                        value={this.state.email}
                                        type='text'
                                        className='form-control'
                                        name='email'
                                        disabled
                                    />
                                </div>
                                <div className='col-6 mb-3'>
                                    <label className='form-label'>
                                        Password:
                                    </label>
                                    <input
                                        onChange={(e) =>
                                            this.handleInputValue(e)
                                        }
                                        value={this.state.password}
                                        type='password'
                                        className='form-control'
                                        name='password'
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6 mb-3'>
                                    <label className='form-label'>
                                        First Name:
                                    </label>
                                    <input
                                        onChange={(e) =>
                                            this.handleInputValue(e)
                                        }
                                        value={this.state.firstName}
                                        type='text'
                                        className='form-control'
                                        name='firstName'
                                    />
                                </div>
                                <div className='col-6 mb-3'>
                                    <label className='form-label'>
                                        Last Name:
                                    </label>
                                    <input
                                        onChange={(e) =>
                                            this.handleInputValue(e)
                                        }
                                        value={this.state.lastName}
                                        type='text'
                                        className='form-control'
                                        name='lastName'
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <label className='form-label'>
                                        Address:
                                    </label>
                                    <input
                                        onChange={(e) =>
                                            this.handleInputValue(e)
                                        }
                                        value={this.state.address}
                                        type='text'
                                        className='form-control'
                                        name='address'
                                    />
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color='primary'
                            onClick={() => this.handleSaveUser()}
                            className={'px-3'}
                        >
                            Save changes
                        </Button>{' '}
                        <Button
                            color='secondary'
                            onClick={() => this.toggle()}
                            className={'px-3'}
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser)
