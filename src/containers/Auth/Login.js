import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import * as actions from '../../store/actions'
import './Login.scss'

import { handleLogin } from '../../services/userService'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isShowPass: false,
            errMessage: '',
        }
    }

    handleOnChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleLogin = async () => {
        this.setState({
            errMessage: '',
        })
        try {
            let data = await handleLogin(
                this.state.username,
                this.state.password
            )
            if (data) {
                if (data.errCode) {
                    this.setState({
                        errMessage: data.message,
                    })
                } else {
                    this.props.userLoginSuccess(data.user)
                }
            }
        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    this.setState({
                        errMessage: e.response.data.message,
                    })
                }
            }
        }
    }

    handleShowHidePass = (e) => {
        this.setState({
            isShowPass: !this.state.isShowPass,
        })
    }

    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>Username:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter your username'
                                name='username'
                                value={this.state.username}
                                onChange={(e) => this.handleOnChangeInput(e)}
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password:</label>
                            <div className='custom-input-password'>
                                <input
                                    type={
                                        this.state.isShowPass
                                            ? 'text'
                                            : 'password'
                                    }
                                    className='form-control'
                                    placeholder='Enter your password'
                                    name='password'
                                    value={this.state.password}
                                    onChange={(e) =>
                                        this.handleOnChangeInput(e)
                                    }
                                />
                                <i
                                    className={
                                        this.state.isShowPass
                                            ? 'far fa-eye-slash'
                                            : 'far fa-eye'
                                    }
                                    onClick={(e) => this.handleShowHidePass(e)}
                                ></i>
                            </div>
                        </div>
                        <div className='col-12' style={{ color: 'red' }}>
                            <span>{this.state.errMessage}</span>
                        </div>
                        <div className='col-12'>
                            <button
                                className='btn-login'
                                onClick={() => this.handleLogin()}
                            >
                                Login
                            </button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-pass'>
                                Forgot your password?
                            </span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-orther-login'>
                                Or Login with:{' '}
                            </span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className='fab fa-google-plus-g google'></i>
                            <i className='fab fa-facebook-f facebook'></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) =>
            dispatch(actions.userLoginSuccess(userInfo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
