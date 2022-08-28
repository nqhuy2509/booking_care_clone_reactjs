import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../../HomePage/HomeHeader';
import './DetailDoctor.scss';
import * as actions from '../../../store/actions';

import { LANGUAGES } from '../../../utils';

class DetailDoctor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nameVi: '',
			nameEn: '',
			description: '',
			contentHTML: '',
			avatar: '',
		};
	}

	componentDidMount() {
		let doctorId = this.props.match.params.id;
		this.props.fetchDetailDoctor(doctorId);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.doctorDetail !== this.props.doctorDetail) {
			let { firstName, lastName, positionData, image } =
				this.props.doctorDetail;
			this.setState({
				nameVi: `${positionData.valueVi} ${firstName} ${lastName}`,
				nameEn: `${positionData.valueEn} ${firstName} ${lastName}`,
				description: this.props.doctorDetail.Markdown.description,
				contentHTML: this.props.doctorDetail.Markdown.contentHTML,
				avatar: image,
			});
		}
	}

	render() {
		// let { firstName, lastName, Markdown, positionData } =
		// 	this.state.doctorDetail;
		// let { contentHTML, description } = Markdown;
		// let nameVi = `${positionData.valueVi} ${firstName} ${lastName}`;
		// let nameEn = `${positionData.valueEn} ${firstName} ${lastName}`;
		let { language } = this.props;
		let { nameVi, nameEn, description, contentHTML } = this.state;
		let imageBase64;
		if (this.state.avatar) {
			imageBase64 = new Buffer(this.state.avatar, 'base64').toString(
				'binary'
			);
		}
		console.log(this.state.image);
		return (
			<>
				<HomeHeader isShowBanner={false} />
				<div className='doctor-detail-container'>
					<div className='doctor-info container'>
						<div className='doctor-image'>
							<img src={imageBase64} alt='imgDoctor' />
						</div>
						<div className='doctor-description'>
							<h2>
								{language === LANGUAGES.VI ? nameVi : nameEn}
							</h2>
							<p>{description}</p>
						</div>
					</div>

					<div className='doctor-detail'>
						<div className='container'>
							<div
								className='contentHTML'
								dangerouslySetInnerHTML={{
									__html: contentHTML,
								}}></div>
						</div>
					</div>
					<div></div>
					<div></div>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		doctorDetail: state.admin.doctorDetail,
		language: state.app.language,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchDetailDoctor: (id) => dispatch(actions.fetchDetailDoctor(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
