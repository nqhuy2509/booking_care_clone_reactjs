import React, { Component } from 'react'
import { connect } from 'react-redux'
import './HomeFooter.scss'

class HomeFooter extends Component {
    render() {
        return (
            <div className='home-footer'>
                <p>
                    &copy; 2022 Nguyen Quan Huy. For further infomation, please
                    contact me&nbsp;
                    <a
                        href='https://www.facebook.com/huy.nq2509/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        &#8594; Click here &#8592;{' '}
                    </a>
                </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter)
