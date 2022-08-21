import { set } from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeFooter from './HomeFooter'
import HomeHeader from './HomeHeader'
import About from './Section/About'
import Handbook from './Section/Handbook'
import MedicalFacility from './Section/MedicalFacility'
import Specialty from './Section/Specialty'
import TopDoctor from './Section/TopDoctor'

class HomePage extends Component {
    render() {
        let settingScrollbar = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
        }
        let settingScrollbarHandbook = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
        }

        return (
            <div>
                <HomeHeader />
                <Specialty settings={settingScrollbar} />
                <MedicalFacility settings={settingScrollbar} />
                <TopDoctor settings={settingScrollbar} />
                <Handbook settings={settingScrollbarHandbook} />
                <About />
                <HomeFooter />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
