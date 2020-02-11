import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import grid from '../../../img/grid.svg';
//import { Stage, Layer, Rect, Transformer } from 'react-konva';
//import konva from 'konva';
import './Canvas.scss';

// GLOBAL VARIABLE
//const WIDTH = 20;
//const HEIGHT = 20;
//const grid = [['white', 'white'], ['white', 'white']];

class Canvas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            some: false,
            errors: {}
        }
    }
    render() {
        //let width = window.getComputedStyle('canvas').innerWidth;
        //console.log(width)
        return(
            <div className='wrapper-canvas'>
                <TransformWrapper
                    defaultScale={1}
                    defaultPositionX={100}
                    defaultPositionY={200}
                >
                    {({zoomIn, zoomOut, resetTransform, ...rest}) => (
                        <React.Fragment>
                            <TransformComponent>
                                <div className='canvas'>
                                    <img src={grid} alt=''/>
                                </div>
                            </TransformComponent>
                            <div className="wrapper-canvas__tools">
                                <div className='wrapper-canvas__tools__arrow-back'></div>
                                <div className='wrapper-canvas__tools__arrow-forward'></div>
                                <div className='wrapper-canvas__tools__format-paint'></div>
                                <div className='wrapper-canvas__tools__layers'></div>
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
    some: PropTypes.bool,
    errors: PropTypes.object
}
const mapStateToProps = state => ({
    some: state.some,
    errors: state.errors
})
export default connect(mapStateToProps, null)(Canvas)