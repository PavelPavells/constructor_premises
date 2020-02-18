import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ZOOM LIBRARY ************* */
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

/** ************* IMPORT KONVA LIBRARY ************* */
//import Square from '../Figures/Rect';
//import { Stage, Layer, Rect, Transformer } from 'react-konva';
//import konva from 'konva';

/** ************* MAIN BLOCKS ON DASHBOARD ************* */
//import Rule from '../Rules/Rules';

/** ************* IMPORT STYLES FOR CANVAS ************* */
import './Canvas.scss';
import grid from '../../../img/grid.svg';

class Canvas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            some: true,
            errors: {}
        }
    }
    handleChangeRule = event => {
        event.preventDefault();
        //this.setState({ some: !this.state.some })
    }
    render() {
        console.log(this.props)
        return(
            <div className='wrapper-canvas'>
                <TransformWrapper
                    defaultScale={1}
                    defaultPositionX={0}
                    defaultPositionY={0}
                >
                    {({handleChangeRule, zoomIn, zoomOut, resetTransform, ...rest}) => (
                        //console.log(rest)
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
                                <div className='wrapper-canvas__tools__format-paint' onClick={handleChangeRule}></div>
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