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
    toggleOptionBar = event => {
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
                {/*<div className='wrapper-header__profile'></div>*/}
                <div className='wrapper-header__buttons-block'>
                    <div className='wrapper-header__buttons-block__arrow-back'></div>
                    <div className='wrapper-header__buttons-block__arrow-forward'></div>
                    <div className='wrapper-header__buttons-block__format-paint'></div>
                    <div className='wrapper-header__buttons-block__layers'></div>
                    <div onClick={this.toggleOptionBar} className='wrapper-header__buttons-block__fullscreen'></div>
                </div>
            </div>
        )
    }
}
Header.propTypes = {
    some: PropTypes.bool,
    errors: PropTypes.bool
}
const mapStateToProps = state => ({
    some: state.some
})
export default connect(mapStateToProps, null)(Header)