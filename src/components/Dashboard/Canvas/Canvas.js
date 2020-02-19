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
import { Stage, Layer, Text, Rect, Circle } from 'react-konva';   /** RECT, TRANSFORMER */

/** ************* MAIN BLOCKS ON DASHBOARD ************* */
//import Square from '../Figures/Rect';

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
                    <Stage width={1130} height={600}>
                        <Layer>
                            <Text
                                text="DRAGGABLE"
                                x={this.state.x}
                                y={this.state.y}
                                fontSize={30}
                                strokeWidth={4}
                                draggable
                                fill={this.state.isDragging ? '#404040' : 'black'}
                                onDragStart={() => {
                                this.setState({
                                    isDragging: true
                                });
                                }}
                                onDragEnd={e => {
                                this.setState({
                                    isDragging: false,
                                    x: e.target.x(),
                                    y: e.target.y()
                                });
                                }}
                            />
                            <Rect 
                                x={250}
                                y={250}
                                width={150}
                                height={150}
                                fill={'#404040'}
                                stroke='black'
                                strokeWidth={4}
                                draggable
                                onDragStart={() => {
                                this.setState({
                                    isDragging: true
                                });
                                }}
                                onDragEnd={e => {
                                this.setState({
                                    isDragging: false,
                                    xrect: e.target.x(),
                                    yrect: e.target.y()
                                });
                                }}
                            />
                            <Circle 
                                x={this.state.xcircle}
                                y={this.state.ycircle}
                                radius={70}
                                fill={'#404040'}
                                stroke={'black'}
                                strokeWidth={4}
                                draggable
                                onDragStart={() => {
                                this.setState({
                                    isDragging: true
                                });
                                }}
                                onDragEnd={e => {
                                this.setState({
                                    isDragging: false,
                                    xcircle: e.target.x(),
                                    ycircle: e.target.y()
                                });
                                }}
                            />
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
                            {/*<div onClick={handleChangeRule}>{some ? <Rule /> : null}</div>*/}
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