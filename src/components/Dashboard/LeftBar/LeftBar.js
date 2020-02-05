import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loading_project from '../../../img/loading_project.svg';
import new_project from '../../../img/new_project.svg';
import './LeftBar.scss';

class LeftBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            some: false
        }
    }
    render() {
        return(
            <div className='wrapper-leftbar'>
                
                <nav className='wrapper-leftbar__navigation'>
                    <img src={loading_project} alt='Загрузить' />
                    <img src={new_project} alt='Новый проект' />
                </nav>
            </div>
        )
    }
}
LeftBar.propTypes = {
    some: PropTypes.bool.isRequired
}
const mapStateToprops = state => ({
    some: state.some
})
export default connect(mapStateToprops, null)(LeftBar)