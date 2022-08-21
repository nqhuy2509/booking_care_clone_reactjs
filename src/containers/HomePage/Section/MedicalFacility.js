import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../HomePage.scss'
import { FormattedMessage } from 'react-intl'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import facilityImg from '../../../assets/images/section/facility/114348-bv-viet-duc.jpg'

class MedicalFacility extends Component {
    render() {
        return (
            <div className='section-container'>
                <div className='section-title'>
                    <h2>Cơ sở y tế nổi bật</h2>
                    <button type='button'>Xem thêm</button>
                </div>
                <div className='section-body'>
                    <Slider {...this.props.settings}>
                        <div className='section-content'>
                            <img src={facilityImg} alt='facility-logo' />
                            <h5>Bệnh viện 1</h5>
                        </div>
                        <div className='section-content'>
                            <img src={facilityImg} alt='facility-logo' />
                            <h5>Bệnh viện 2</h5>
                        </div>
                        <div className='section-content'>
                            <img src={facilityImg} alt='facility-logo' />
                            <h5>Bệnh viện 3</h5>
                        </div>
                        <div className='section-content'>
                            <img src={facilityImg} alt='facility-logo' />
                            <h5>Bệnh viện 4</h5>
                        </div>
                        <div className='section-content'>
                            <img src={facilityImg} alt='facility-logo' />
                            <h5>Bệnh viện 5</h5>
                        </div>
                        <div className='section-content'>
                            <img src={facilityImg} alt='facility-logo' />
                            <h5>Bệnh viện 6</h5>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility)
