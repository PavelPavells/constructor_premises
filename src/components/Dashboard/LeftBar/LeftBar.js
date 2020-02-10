import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loading_project from '../../../img/folder_open.svg';
import new_project from '../../../img/new_project.svg';
import './LeftBar.scss';

class LeftBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            some: false
        }
    }
    
    // TOGGLE OPTION BAR
    toggleOptionBar = event => {
        event.preventDefault();
        let toggleOptionBlock = document.getElementsByClassName('wrapper-dashboard__option-left')[0];
        toggleOptionBlock.classList.toggle('toggle-optionbar')
    }
    render() {
        return(
            <div className='wrapper-leftbar'>
                <nav  className='wrapper-leftbar__navigation'>
                    <img src={loading_project} alt='Загрузить' />
                    <img onClick={this.toggleOptionBar} src={new_project} alt='Новый проект' />
                </nav>
                <section className='wrapper-leftbar__profile'></section>
            </div>
        )
    }
}
LeftBar.propTypes = {
    some: PropTypes.bool
}
const mapStateToprops = state => ({
    some: state.some
})
export default connect(mapStateToprops, null)(LeftBar)