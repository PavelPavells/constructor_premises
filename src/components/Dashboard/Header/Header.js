import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../../img/logo-white.svg';
import './Header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            some: false
        }
    }
    render() {
        return(
            <div className='wrapper-header'>
                <div className='wrapper-header__logo'>
                    <img src={logo} alt='' />
                </div>
            </div>
        )
    }
}
Header.propTypes = {
    some: PropTypes.bool.isRequired
}
const mapStateToProps = state => ({
    some: state.some
})
export default connect(mapStateToProps, null)(Header)