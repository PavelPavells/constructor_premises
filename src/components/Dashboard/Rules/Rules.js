import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Ruler from 'rc-ruler-slider/dist';
import 'rc-ruler-slider/dist/index.css';
import './Rules.scss';

class Rule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            some: true,
            errors: {}
        }
    }
    handleDragChange = value => {
        console.log(value);
    }
    handleDragEnd = value => {
        console.log(value);
    }
    handleDragStart = value => {
        console.log(value);
    }
    handleRenderValue = value => {
        return `${value}`;
    }
    //handleChangeRule = event => {
        //event.preventDefault();
        //this.setState({ some: !this.state.some })
    //}
    render() {
        const { some } = this.state;
        return (
            <div onClick={this.handleChangeRule} className='wrapper-rule'>
                {some ? 
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
                : null}
            </div>
        )
    }
}
Rule.propTypes = {
    some: propTypes.bool,
    errors: propTypes.object
}
const mapStateToProps = state => ({
    some: state.some,
    errors: state.errors
})
export default connect(mapStateToProps, null)(Rule)