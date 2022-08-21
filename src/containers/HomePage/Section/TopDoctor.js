import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../HomePage.scss'
import './TopDoctor.scss'
import { FormattedMessage } from 'react-intl'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import doctorImg from '../../../assets/images/section/doctor/160049-bs-hoai-huong.jpg'

class TopDoctor extends Component {
    render() {
        return (
            <div className='section-container top-doctor'>
                <div className='section-title'>
                    <h2>Bác sĩ nổi bật tuần qua </h2>
                    <button type='button'>Xem thêm</button>
                </div>
                <div className='section-body'>
                    <Slider {...this.props.settings}>
                        <div className='section-content'>
                            <img src={doctorImg} alt='facility-logo' />

                            <div className='doctor-info'>
                                <h5>
                                    Bác sĩ chuyên khoa II Trần Thị Hoài Hương
                                </h5>
                                <h6>Da liễu</h6>
                            </div>
                        </div>
                        <div className='section-content'>
                            <img src={doctorImg} alt='facility-logo' />
                            <div className='doctor-info'>
                                <h5>
                                    Bác sĩ chuyên khoa II Trần Thị Hoài Hương
                                </h5>
                                <h6>Da liễu</h6>
                            </div>
                        </div>
                        <div className='section-content'>
                            <img src={doctorImg} alt='facility-logo' />
                            <div className='doctor-info'>
                                <h5>
                                    Bác sĩ chuyên khoa II Trần Thị Hoài Hương
                                </h5>
                                <h6>Da liễu</h6>
                            </div>
                        </div>
                        <div className='section-content'>
                            <img src={doctorImg} alt='facility-logo' />
                            <div className='doctor-info'>
                                <h5>
                                    Bác sĩ chuyên khoa II Trần Thị Hoài Hương
                                </h5>
                                <h6>Da liễu</h6>
                            </div>
                        </div>
                        <div className='section-content'>
                            <img src={doctorImg} alt='facility-logo' />
                            <div className='doctor-info'>
                                <h5>
                                    Bác sĩ chuyên khoa II Trần Thị Hoài Hương
                                </h5>
                                <h6>Da liễu</h6>
                            </div>
                        </div>
                        <div className='section-content'>
                            <img src={doctorImg} alt='facility-logo' />
                            <div className='doctor-info'>
                                <h5>
                                    Bác sĩ chuyên khoa II Trần Thị Hoài Hương
                                </h5>
                                <h6>Da liễu</h6>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TopDoctor)
