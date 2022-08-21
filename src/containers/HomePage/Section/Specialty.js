import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../HomePage.scss'
import { FormattedMessage } from 'react-intl'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import specialtyImg from '../../../assets/images/section/specialty/120331-co-xuong-khop.jpg'

class Specialty extends Component {
    render() {
        return (
            <div
                className='section-container'
                style={{ backgroundColor: '#f5f5f5' }}
            >
                <div className='section-title'>
                    <h2>Chuyên khoa phổ biến</h2>
                    <button type='button'>Xem thêm</button>
                </div>
                <div className='section-body'>
                    <Slider {...this.props.settings}>
                        <div className='section-content'>
                            <img src={specialtyImg} alt='specialty-logo' />
                            <h5>Cơ xương khớp 1</h5>
                        </div>
                        <div className='section-content'>
                            <img src={specialtyImg} alt='specialty-logo' />
                            <h5>Cơ xương khớp 2</h5>
                        </div>
                        <div className='section-content'>
                            <img src={specialtyImg} alt='specialty-logo' />
                            <h5>Cơ xương khớp 3</h5>
                        </div>
                        <div className='section-content'>
                            <img src={specialtyImg} alt='specialty-logo' />
                            <h5>Cơ xương khớp 4</h5>
                        </div>
                        <div className='section-content'>
                            <img src={specialtyImg} alt='specialty-logo' />
                            <h5>Cơ xương khớp 5</h5>
                        </div>
                        <div className='section-content'>
                            <img src={specialtyImg} alt='specialty-logo' />
                            <h5>Cơ xương khớp 6</h5>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty)
