import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { connect } from 'react-redux'
import { emitter } from '../../utils/emitter'

class ModalUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }

        this.listenToEmmiter()
    }

    listenToEmmiter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
            })
        })
    }

    componentDidMount() {}

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

    handleAddNewUser = async () => {
        let isValid = this.checkValidateInput()
        if (isValid) {
            // Use value return  from parent
            // let isSuccess = await this.props.createNewUser(this.state)
            // if (isSuccess) {
            //     this.setState({
            //         email: '',
            //         password: '',
            //         firstName: '',
            //         lastName: '',
            //         address: '',
            //     })
            // }

            // Use emitter
            this.props.createNewUser(this.state)
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
                        Create new user
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
                            onClick={() => this.handleAddNewUser()}
                            className={'px-3'}
                        >
                            Add
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser)
