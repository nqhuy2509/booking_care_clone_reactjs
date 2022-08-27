import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../HomePage.scss';
import './TopDoctor.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import * as actions from '../../../store/actions';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LANGUAGES } from '../../../utils/constant';
import { withRouter } from 'react-router';

class TopDoctor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arrDoctors: [],
		};
	}
	componentDidMount() {
		this.props.loadTopDoctor();
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.topDoctors !== this.props.topDoctors) {
			this.setState({
				arrDoctors: this.props.topDoctors,
			});
		}
	}

	handleDetailDoctor = (doctor) => {
		this.props.history.push(`/detail-doctor/${doctor.id}`);
	};

	render() {
		let { arrDoctors } = this.state;
		let { language } = this.props;
		return (
			<div
				className='section-container top-doctor'
				style={{ backgroundColor: '#f5f5f5' }}>
				<div className='section-title'>
					<h2>
						<FormattedMessage id='homepage.otd-doctor' />
					</h2>
					<button type='button'>
						<FormattedMessage id='homepage.more-info' />
					</button>
				</div>
				<div className='section-body'>
					<Slider {...this.props.settings}>
						{arrDoctors &&
							arrDoctors.length > 0 &&
							arrDoctors.map((item, index) => {
								let nameVi = `${item.positionData.valueVi} ${item.firstName} ${item.lastName}`;
								let nameEn = `${item.positionData.valueEn} ${item.firstName} ${item.lastName}`;
								let imageBase64;
								if (item.image) {
									imageBase64 = new Buffer(
										item.image,
										'base64'
									).toString('binary');
								}
								return (
									<div
										className='section-content'
										key={index}
										onClick={() =>
											this.handleDetailDoctor(item)
										}>
										<img src={imageBase64} alt='doctor' />

										<div className='doctor-info'>
											<h5>
												{language === LANGUAGES.VI
													? nameVi
													: nameEn}
											</h5>
											<h6>Da liễu</h6>
										</div>
									</div>
								);
							})}
					</Slider>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		language: state.app.language,
		topDoctors: state.admin.topDoctors,
		isLoggedIn: state.user.isLoggedIn,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadTopDoctor: () => dispatch(actions.fetchTopDoctor()),
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(TopDoctor)
);
