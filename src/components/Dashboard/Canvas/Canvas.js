import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Stage, Layer, Rect } from 'react-konva';
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
        return(
            <div className='wrapper-canvas'>canvas</div>
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