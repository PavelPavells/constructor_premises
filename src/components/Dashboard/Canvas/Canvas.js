import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
import { 
    toggleArrowBack,
    toggleArrowGo,
    toggleRules,
    toggleLayers
} from '../../../actions/toggleBottomFunctions';

/** ************* IMPORT ZOOM LIBRARY ************* */
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

/** ************* IMPORT KONVA LIBRARY ************* */
import { Stage, Layer } from 'react-konva';   /** RECT, TRANSFORMER */

/** ************* MAIN BLOCKS ON DASHBOARD ************* */
import Rect from '../Figures/Rect';
import Arrow from '../Figures/Arrow';
import Circle from '../Figures/Circle';
import Image from '../Figures/Image';
import Line from '../Figures/Line';
import Text from '../Figures/Text';


/** ************* IMPORT STYLES FOR CANVAS ************* */
import './Canvas.scss';
import grid from '../../../img/grid.svg';

class Canvas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDragging: false,
            x: 450,
            y: 250,
            xrect: 100,
            yrect: 100,
            xcircle: 100,
            ycircle: 100
        }
    }

    /** ************* TOGGLE RULE ************* */
    handleChangeRule = event => {
        event.preventDefault();
        this.props.toggleRules();
    }
    /** ************* TOGGLE LAYERS ************* */
    handleChangeLayers = event => {
        event.preventDefault();
        this.props.toggleLayers()
    }
    render() {
        console.log(this.props)
        return(
            <div className='wrapper-canvas'>
                <div style={{'display': 'block', 'position': 'absolute', 'z-index': '1000'}}>
                    <Stage width={1050} height={550}>
                        <Layer>
                            <Rect />
                            <Arrow />
                            <Circle />
                            <Line />
                            {/*<Image />*/}
                            <Text />
                        </Layer>
                    </Stage>
                </div>
                <TransformWrapper
                    defaultScale={1}
                    defaultPositionX={0}
                    defaultPositionY={0}
                >
                    {({ zoomIn, zoomOut, resetTransform, ...rest}) => (
                        <React.Fragment>
                            <TransformComponent>
                                <div className='canvas'>
                                    <img src={grid} alt=''/>
                                </div>
                            </TransformComponent>
                            <div className="wrapper-canvas__tools">
                                <div className='wrapper-canvas__tools__arrow-back'></div>
                                <div className='wrapper-canvas__tools__arrow-forward'></div>
                                <div className='wrapper-canvas__tools__format-paint' onClick={this.handleChangeRule}></div>
                                <div className='wrapper-canvas__tools__layers' onClick={this.handleChangeLayers}></div>
                                <div className='wrapper-canvas__tools__button-plus' onClick={zoomIn}></div>
                                <div className='wrapper-canvas__tools__button-minus' onClick={zoomOut}></div>
                                <div className='wrapper-canvas__tools__button-reset' onClick={resetTransform}></div>
                            </div>
                        </React.Fragment>
                    )}           
                </TransformWrapper>
            </div>
        )
    }
}
Canvas.propTypes = {
    toggleBottom: PropTypes.object,
    toggleRight: PropTypes.object,
    errors: PropTypes.object
}
const mapStateToProps = state => ({
    toggleBottom: state.toggleBottom,
    toggleRight: state.toggleRight
})
const mapDispatchToProps = { 
    toggleArrowBack,
    toggleArrowGo,
    toggleRules,
    toggleLayers
}
export default connect(mapStateToProps, mapDispatchToProps)(Canvas)