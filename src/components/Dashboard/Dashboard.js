import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
// import {
//     toggleColorPicker,
//     togglePalette,
//     saveProject,
//     settings 
// } from '../../actions/toggleRightFunctions';
// import { 
//     toggleArrowBack,
//     toggleArrowGo,
//     toggleRules,
//     toggleLayers
// } from '../../actions/toggleBottomFunctions';

/** ************* MAIN BLOCKS FOR DASHBOARD ************* */
import LeftBar from './LeftBar/LeftBar';
import OptionBar from './OptionBar/OptionBar';
import Header from './Header/Header';
import Canvas from './Canvas/Canvas';
import Rules from './Rules/Rules';
import RightBar from './RightBar/RightBar';

/** ************* DATA FOR FIGURES ************* */
//import { initialFigures } from '../Dashboard/Figures/initialFigures';
//import Square from './Figures/Rect';

/** ************* DASHBOARD STYLES ************* */
import './Dashboard.scss';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        //console.log(this.props)
        const { toggleRules } = this.props.toggleBottom
        return(
            <div className='wrapper-dashboard'>
                <header className='wrapper-dashboard__header'>
                    <Header />
                </header>
                <main className='wrapper-dashboard__main'>
                    <div className='wrapper-dashboard__main-canvas'>
                        <nav className='wrapper-dashboard__navigation-left'>
                            <LeftBar />
                        </nav>
                        <nav className='wrapper-dashboard__option-left'>
                            <OptionBar />
                        </nav>            
                        <section className='wrapper-dashboard__canvas'>
                            {toggleRules ? <Rules /> : null}
                            <Canvas />
                        </section>
                        <nav className='wrapper-dashboard__navigation-right'>
                            <RightBar />
                        </nav>
                    </div>
                </main>
            </div>
        )
    }
}
Dashboard.propTypes = {
    toggleBottom: PropTypes.object,
    toggleRight: PropTypes.object,
    errors: PropTypes.object
}
const mapStateToProps = state => ({
    toggleBottom: state.toggleBottom,
    toggleRight: state.toggleRight
})
//const mapDispatchToProps = {
//     toggleColorPicker,
//     togglePalette,
//     saveProject,
//     settings,
//     toggleArrowBack,
//     toggleArrowGo,
//     toggleRules,
//     toggleLayers
//}
export default connect(
    mapStateToProps,
    null
)(Dashboard)