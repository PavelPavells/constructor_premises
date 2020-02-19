import React from 'react';
//import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Ruler from 'rc-ruler-slider/dist';
import 'rc-ruler-slider/dist/index.css';
import './Rules.scss';

class Rule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    /** ************* DRAG CHANGE ************* */
    handleDragChange = value => {
        console.log(value);
    }

    /** ************* DRAG END ************* */
    handleDragEnd = value => {
        console.log(value);
    }

    /** ************* DRAG START ************* */
    handleDragStart = value => {
        console.log(value);
    }

    /** ************* RENDER VALUE ************* */
    handleRenderValue = value => {
        return `${value}`;
    }
    render() {
        return (
            <div className='wrapper-rule'>
                <Ruler 
                    startValue={50}
                    onDrag={this.handleDragChange}
                    onDragEnd={this.handleDragEnd}
                    onDragStart={this.handleDragStart}
                    renderValue={this.handleRenderValue}
                    start={0}
                    end={100}
                    step={1}
                    className='wrapper-rule__styles'
                /> 
            </div>
        )
    }
}
export default connect(null, null)(Rule)