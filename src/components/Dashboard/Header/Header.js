import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../../img/logo-white.svg';
import './Header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            some: false,
            errors: {}
        }
    }

    /** ************* FUNCTION FOR FULLSCREEN OPTION ************* */
    handleChangeFullScreen = event => {
        event.preventDefault();
        let toggleLeftBar = document.getElementsByClassName('wrapper-dashboard__navigation-left')[0];        let toggleRightBlock = document.getElementsByClassName('wrapper-dashboard__navigation-right')[0];
        toggleLeftBar.classList.toggle('toggle-optionbar');
        toggleRightBlock.classList.toggle('toggle-optionbar');
    }
    render() {
        return(
            <div className='wrapper-header'>
                <div className='wrapper-header__logo'>
                    <img src={logo} alt='' />
                </div>
                <div className='wrapper-header__buttons-block'>
                    <div onClick={this.handleChangeFullScreen} className='wrapper-header__buttons-block__fullscreen'></div>
                </div>
            </div>
        )
    }
}
Header.propTypes = {
    errors: PropTypes.object
}
export default connect(null, null)(Header)