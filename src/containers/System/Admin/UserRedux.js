import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { LANGUAGES } from '../../../utils/index';
import * as actions from '../../../store/actions';
import './UserRedux.scss';

class UserRedux extends Component {
	constructor(props) {
		super(props);
		this.state = {
			genderArr: [],
			positionArr: [],
			roleArr: [],
			previewImgURL: '',
			isOpen: false,

			email: '',
			password: '',
			firstName: '',
			lastName: '',
			address: '',
			phoneNumber: '',
			gender: '',
			position: '',
			role: '',
			avatar: '',
		};
	}

	async componentDidMount() {
		this.props.getGenderStart();
		this.props.getPositionStart();
		this.props.getRoleStart();
		// try {
		//     let res = await getAllCodeService('gender')
		//     if (res && res.errCode === 0) {
		//         this.setState({
		//             genderArr: res.data,
		//         })
		//     }
		// } catch (e) {
		//     console.log(e)
		// }
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.genders !== this.props.genders) {
			this.setState({
				genderArr: this.props.genders,
			});
		}
		if (prevProps.positions !== this.props.positions) {
			this.setState({
				positionArr: this.props.positions,
			});
		}
		if (prevProps.roles !== this.props.roles) {
			this.setState({
				roleArr: this.props.roles,
			});
		}
	}

	handleOnChangeImage = (e) => {
		let file = e.target.files[0];
		if (file) {
			const objectUrl = URL.createObjectURL(file);
			this.setState({
				previewImgURL: objectUrl,
				avatar: file,
			});
		}
	};

	openPreviewImg = () => {
		if (this.state.previewImgURL) {
			this.setState({
				isOpen: true,
			});
		}
	};

	handleSaveUser = () => {
		let isValid = this.checkValidateInput();
		if (!isValid) return;

		//fire action redux
		this.props.createNewUser({
			email: this.state.email,
			password: this.state.password,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			address: this.state.address,
			gender: this.state.gender,
			role: this.state.role,
			position: this.state.position,
			phoneNumber: this.state.phoneNumber,
		});
	};

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	checkValidateInput = () => {
		let isValid = true;
		let arrCheck = [
			'email',
			'password',
			'firstName',
			'lastName',
			'address',
			'phoneNumber',
			'gender',
			'position',
			'role',
			'avatar',
		];
		for (let i = 0; i < arrCheck.length; i++) {
			if (!this.state[arrCheck[i]]) {
				isValid = false;
				alert('Missing input value: ' + arrCheck[i]);
				break;
			}
		}
		return isValid;
	};

	render() {
		let { language, isLoadingGender: isGetGenders } = this.props;
		let genders = this.state.genderArr;
		let positions = this.state.positionArr;
		let roles = this.state.roleArr;
		let {
			email,
			password,
			firstName,
			lastName,
			address,
			phoneNumber,
			gender,
			position,
			role,
		} = this.state;
		return (
			<div className='user-redux-container'>
				<div className='title'>User Redux</div>
				<div className='user-redux-body'>
					<div className='container'>
						<form>
							<div className='row'>
								<div className='col-12 mb-3'>
									<FormattedMessage id='manage-user.add' />
								</div>
								<div className='col-12 mb-3'>
									{isGetGenders ? 'Loading Genders' : ''}
								</div>
								<div className='mb-3 col-3'>
									<label className='form-label'>
										<FormattedMessage id='manage-user.email' />
										:
									</label>
									<input
										className='form-control'
										type='text'
										onChange={(e) =>
											this.handleInputChange(e)
										}
										name='email'
										value={email}
									/>
								</div>
								<div className='mb-3 col-3'>
									<label className='form-label'>
										<FormattedMessage id='manage-user.password' />
										:
									</label>
									<input
										className='form-control'
										type='text'
										onChange={(e) =>
											this.handleInputChange(e)
										}
										name='password'
										value={password}
									/>
								</div>
								<div className='mb-3 col-3'>
									<label className='form-label'>
										<FormattedMessage id='manage-user.first-name' />
										:
									</label>
									<input
										className='form-control'
										type='text'
										onChange={(e) =>
											this.handleInputChange(e)
										}
										name='firstName'
										value={firstName}
									/>
								</div>
								<div className='mb-3 col-3'>
									<label className='form-label'>
										<FormattedMessage id='manage-user.last-name' />
										:
									</label>
									<input
										className='form-control'
										type='text'
										onChange={(e) =>
											this.handleInputChange(e)
										}
										name='lastName'
										value={lastName}
									/>
								</div>
							</div>
							<div className='row'>
								<div className='mb-3 col-8'>
									<label className='form-label'>
										<FormattedMessage id='manage-user.address' />
									</label>
									<input
										className='form-control'
										type='text'
										onChange={(e) =>
											this.handleInputChange(e)
										}
										name='address'
										value={address}
									/>
								</div>
								<div className='mb-3 col-4'>
									<label className='form-label'>
										<FormattedMessage id='manage-user.phone-number' />
									</label>
									<input
										className='form-control'
										type='text'
										onChange={(e) =>
											this.handleInputChange(e)
										}
										name='phoneNumber'
										value={phoneNumber}
									/>
								</div>
							</div>
							<div className='row'>
								<div className=' mb-3 col-2'>
									<label className='form-label'>
										<FormattedMessage id='manage-user.gender' />
										:
									</label>
									<select
										className='form-select'
										onChange={(e) =>
											this.handleInputChange(e)
										}
										name='gender'
										value={gender}>
										<option>....Choose</option>
										{genders &&
											genders.length > 0 &&
											genders.map((item, index) => {
												return (
													<option
														value={item.key}
														key={index}>
														{language ===
														LANGUAGES.VI
															? item.valueVi
															: item.valueEn}
													</option>
												);
											})}
									</select>
								</div>
								<div className='mb-3 col-3'>
									<label className='form-label'>
										<FormattedMessage id='manage-user.position' />
									</label>
									<select
										className='form-select'
										onChange={(e) =>
											this.handleInputChange(e)
										}
										name='position'
										value={position}>
										<option>....Choose</option>
										{positions &&
											positions.length > 0 &&
											positions.map((item, index) => {
												return (
													<option
														value={item.key}
														key={index}>
														{language ===
														LANGUAGES.VI
															? item.valueVi
															: item.valueEn}
													</option>
												);
											})}
									</select>
								</div>
								<div className='mb-3 col-3'>
									<label className='form-label'>
										<FormattedMessage id='manage-user.roleid' />
									</label>
									<select
										className='form-select'
										onChange={(e) =>
											this.handleInputChange(e)
										}
										name='role'
										value={role}>
										<option>....Choose</option>
										{roles &&
											roles.length > 0 &&
											roles.map((item, index) => {
												return (
													<option
														value={item.key}
														key={index}>
														{language ===
														LANGUAGES.VI
															? item.valueVi
															: item.valueEn}
													</option>
												);
											})}
									</select>
								</div>
								<div className='mb-3 col-4'>
									<label className='form-label'>
										<FormattedMessage id='manage-user.image' />
									</label>
									<div className='preview-img-container'>
										<input
											className='form-control'
											type='file'
											accept='image/*'
											id='previewImg'
											hidden
											name='avatar'
											onChange={(e) =>
												this.handleOnChangeImage(e)
											}></input>
										<label
											htmlFor='previewImg'
											className='btn btn-info px-3 mb-3 me-3 preview-img-label'>
											<FormattedMessage id='manage-user.upload' />
											<i className='fas fa-upload ms-2'></i>
										</label>
										<div
											className='preview-img'
											onClick={() =>
												this.openPreviewImg()
											}
											style={{
												backgroundImage: `url(${this.state.previewImgURL})`,
											}}></div>
									</div>
								</div>
								<div className='col-12'>
									<button
										type='button'
										className='btn btn-primary px-3'
										onClick={() => this.handleSaveUser()}>
										<FormattedMessage id='manage-user.save' />
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				{this.state.isOpen && (
					<Lightbox
						mainSrc={this.state.previewImgURL}
						onCloseRequest={() => this.setState({ isOpen: false })}
					/>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		language: state.app.language,
		genders: state.admin.genders,
		positions: state.admin.positions,
		roles: state.admin.roles,
		isLoadingGender: state.admin.isLoadingGender,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getGenderStart: () => dispatch(actions.fetchGenderStart()),
		getPositionStart: () => dispatch(actions.fetchPositionStart()),
		getRoleStart: () => dispatch(actions.fetchRoleStart()),
		createNewUser: (data) => dispatch(actions.createNewUser(data)),
		// processLogout: () => dispatch(actions.processLogout()),
		// changeLanguageRedux: (language) =>
		//     dispatch(actions.changeLanguageApp(language)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
