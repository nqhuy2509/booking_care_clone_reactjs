import React, { Component } from 'react'
import { connect } from 'react-redux'
import './About.scss'

class About extends Component {
    render() {
        return (
            <div className='section-container about'>
                <div className='section-title'>
                    <h2>Truyền thông nói về BookingCare</h2>
                </div>
                <div className='about-content'>
                    <div className='content-left'>
                        <iframe
                            width='560'
                            height='315'
                            src='https://www.youtube.com/embed/Hi_22UXeP40'
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className='content-right'>
                        <p>
                            BookingCare giúp bệnh nhân dễ dàng lựa chọn đúng bác
                            sĩ từ mạng lưới bác sĩ chuyên khoa giỏi, với thông
                            tin đã xác thực và đặt lịch nhanh chóng. Bác sĩ
                            chuyên khoa giỏi, được nhiều bệnh nhân tin tưởng,
                            đồng nghiệp đánh giá cao, có uy tín trong ngành. Các
                            bác sĩ đã, đang công tác tại các bệnh viện hàng đầu
                            như: Bệnh viện Bạch Mai, Bệnh Viện Việt Đức, Bệnh
                            viện TW Quân đội 108, Bệnh viện Quân Y 103, Bệnh
                            viện Nhi TW, Bệnh viện Tai Mũi Họng TW, Viện Tim
                            mạch Việt Nam, Bệnh viện Chợ Rẫy, Bệnh viện Đại học
                            Y dược TP.HCM, Bệnh viện Nhân dân 115…
                        </p>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About)
