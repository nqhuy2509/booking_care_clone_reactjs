import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../HomePage.scss';
import './Handbook.scss';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Handbook extends Component {
	render() {
		return (
			<div className='section-container handbook'>
				<div className='section-title'>
					<h2>Cẩm nang</h2>
					<button type='button'>Tất cả bài viết</button>
				</div>
				<div className='section-body'>
					<Slider {...this.props.settings}>
						<div className='section-content'>
							<div className='img-content'>
								<div className='desc-img'></div>
							</div>

							<h5 className='handbook-content'>
								Nha khoa trồng răng Sài gòn: Có tốt không
							</h5>
						</div>
						<div className='section-content'>
							<div className='img-content'>
								<div className='desc-img'></div>
							</div>

							<h5 className='handbook-content'>
								Nha khoa trồng răng Sài gòn: Có tốt không
							</h5>
						</div>
						<div className='section-content'>
							<div className='img-content'>
								<div className='desc-img'></div>
							</div>

							<h5 className='handbook-content'>
								Nha khoa trồng răng Sài gòn: Có tốt không
							</h5>
						</div>
						<div className='section-content'>
							<div className='img-content'>
								<div className='desc-img'></div>
							</div>

							<h5 className='handbook-content'>
								Nha khoa trồng răng Sài gòn: Có tốt không
							</h5>
						</div>
					</Slider>
				</div>
			</div>
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
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
