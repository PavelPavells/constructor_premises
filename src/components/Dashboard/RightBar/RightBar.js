import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import {    
    toggleColorPicker, 
    togglePalette, 
    saveProject, 
    settings 
} from '../../../actions/toggleRightFunctions';

/** ************* IMPORT COMPONENTS ************* */
import ColorPicker from '../ColorPicker/ColorPicker';
import Pallette from '../Pallette/Pallette';

/** ************* RIGHTBAR STYLES ************* */
import './RightBar.scss';

class RightBar extends React.Component {

    /** ************* TOGGLE COLOR PICKER BLOCK ************* */
    handleChangeTogglePicker = () => {
        this.props.toggleColorPicker();
    }

    /** ************* TOGGLE PALLETTE BLOCK ************* */
    handleChangeTogglePallette = () => {
        this.props.togglePalette();
    }

    /** ************* TOGGLE SAVE PROJECT BLOCK ************* */
    handleChangeSaveProject = project => {
        let projects = {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6',
            '7': '7',
            '8': '8',
            '9': '9',
            '10': '10'
        }
        this.props.saveProject(projects);   //projects (list of projects)
    }

    /** ************* TOGGLE SETTINGS BLOCK ************* */
    handleChangeSettings = () => {
        this.props.settings();
    }
    render() {
        //console.log(this.props.toggleRight.toggleColorPicker);
        //const { toggleColorPicker } = this.props.toggleRight
        return(
            <div className='wrapper-rightbar'>
                {/*<div className='wrapper-rightbar__more-options'></div>
                <div className='wrapper-rightbar__arrow-less'></div>
                <div className='wrapper-rightbar__percent'>100%</div>
                <div className='wrapper-rightbar__arrow-more'></div>*/}
                <div onClick={this.handleChangeTogglePicker} className='wrapper-rightbar__colorize'>
                    <ColorPicker /> 
                </div>
                <div onClick={this.handleChangeTogglePallette} className='wrapper-rightbar__color-lens'>
                    <Pallette /> 
                </div>
                <div className='wrapper-rightbar__wb-sunny'></div>
                <div onClick={this.handleChangeSaveProject} className='wrapper-rightbar__save'></div>
                {/*<div className='wrapper-rightbar__fullscreen'></div>*/}
                <div onClick={this.handleChangeSettings} className='wrapper-rightbar__settings'></div>
            </div>
        )
    }
}
RightBar.propTypes = {
    toggleRight: PropTypes.object.isRequired,
    errors: PropTypes.object
}
const mapStateToProps = state => ({
    toggleRight: state.toggleRight
})
const mapDispatchToProps = { 
    toggleColorPicker, 
    togglePalette, 
    saveProject, 
    settings
}
export default connect(mapStateToProps, mapDispatchToProps)(RightBar)