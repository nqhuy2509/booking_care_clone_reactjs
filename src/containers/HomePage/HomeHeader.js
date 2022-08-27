import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import gplay from '../../assets/images/header/icon/google-play-badge.svg';
import appstore from '../../assets/images/header/icon/app-store-badge-black.svg';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils/constant';
import { withRouter } from 'react-router';

import { changeLanguageApp } from '../../store/actions';

class Header extends Component {
	changeLanguage = (language) => {
		this.props.changeLanguageRedux(language);
	};

	returnToHome = () => {
		this.props.history.push('/home');
	};

	render() {
		let language = this.props.language;
		let isShowBanner = this.props.isShowBanner;
		return (
			<>
				<div className='home-header-container'>
					<div className='home-header-content'>
						<div className='left-content w-25'>
							<i className='fas fa-bars'></i>
							<div
								className='header-logo'
								onClick={() => this.returnToHome()}></div>
						</div>
						<div className='center-content w-50'>
							<div className='child-content'>
								<div className=''>
									<b>
										<FormattedMessage id='home-header.speciality' />
									</b>
								</div>
								<div className='description'>
									<FormattedMessage id='home-header.find-doctor' />
								</div>
							</div>
							<div className='child-content'>
								<div className=''>
									<b>
										<FormattedMessage id='home-header.health-facility' />
									</b>
								</div>
								<div className='description'>
									<FormattedMessage id='home-header.select-room' />
								</div>
							</div>
							<div className='child-content'>
								<div className=''>
									<b>
										<FormattedMessage id='home-header.doctor' />
									</b>
								</div>
								<div className='description'>
									<FormattedMessage id='home-header.choose-doctor' />
								</div>
							</div>
							<div className='child-content'>
								<div className=''>
									<b>
										<FormattedMessage id='home-header.medical-package' />
									</b>
								</div>
								<div className='description'>
									<FormattedMessage id='home-header.health-check' />
								</div>
							</div>
						</div>
						<div className='right-content w-25'>
							<div className='support'>
								<i className='fas fa-question-circle'></i>{' '}
								<span>
									<FormattedMessage id='home-header.help' />
								</span>
							</div>
							<div
								className={
									language === LANGUAGES.VI
										? 'language-vi active'
										: 'language-vi'
								}>
								<span
									onClick={() =>
										this.changeLanguage(LANGUAGES.VI)
									}>
									VN
								</span>
							</div>
							<div
								className={
									language === LANGUAGES.EN
										? 'language-en active'
										: 'language-en'
								}>
								<span
									onClick={() =>
										this.changeLanguage(LANGUAGES.EN)
									}>
									EN
								</span>
							</div>
						</div>
					</div>
				</div>
				{isShowBanner && (
					<div className='home-header-banner'>
						<div className='section1'>
							<h1>
								<span className='title1'>
									<FormattedMessage id='home-header.medical-background' />
								</span>
								<b className='title2'>
									<FormattedMessage id='home-header.health-care' />
								</b>
							</h1>
							<div className='search'>
								<i className='fas fa-search'></i>
								<input
									type='text'
									placeholder='Tìm chuyên khoa'
								/>
							</div>
							<div className='app'>
								<img src={gplay} alt='google play' />
								<img src={appstore} alt='app store' />
							</div>
						</div>

						<div className='options'>
							<div className='option-item'>
								<div className='icon icon1'></div>
								<span>
									<FormattedMessage id='home-header.specialist-examination' />
								</span>
							</div>
							<div className='option-item'>
								<div className='icon icon2'></div>
								<span>
									<FormattedMessage id='home-header.remote-examination' />
								</span>
							</div>
							<div className='option-item'>
								<div className='icon icon3'></div>
								<span>
									<FormattedMessage id='home-header.general-examination' />
								</span>
							</div>
							<div className='option-item'>
								<div className='icon icon4'></div>
								<span>
									<FormattedMessage id='home-header.medical-test' />
								</span>
							</div>
							<div className='option-item'>
								<div className='icon icon5'></div>
								<span>
									<FormattedMessage id='home-header.mental-health' />
								</span>
							</div>
							<div className='option-item'>
								<div className='icon icon6'></div>
								<span>
									<FormattedMessage id='home-header.dental-examination' />
								</span>
							</div>
							<div className='option-item'>
								<div className='icon icon7'></div>
								<span>
									<FormattedMessage id='home-header.surgery-package' />
								</span>
							</div>
							<div className='option-item'>
								<div className='icon icon8'></div>
								<span>
									<FormattedMessage id='home-header.medical-products' />
								</span>
							</div>
							<div className='option-item'>
								<div className='icon icon9'></div>
								<span>
									<FormattedMessage id='home-header.business-health' />
								</span>
							</div>
						</div>
					</div>
				)}
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		language: state.app.language,
		isLoggedIn: state.user.isLoggedIn,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeLanguageRedux: (language) =>
			dispatch(changeLanguageApp(language)),
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
