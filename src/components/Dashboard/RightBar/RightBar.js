import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import './RightBar.scss';

class RightBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            some: false,
            zoom: 100
        }
    }
    handelChange = event => {
        event.preventDefault()
        this.setState(prevState => ({
            zoom: prevState.zoom++
        }))
    }
    render() {
        return(
            <div className='wrapper-rightbar'>
                {/*<div className='wrapper-rightbar__more-options'></div>*/}
                <div className='wrapper-rightbar__arrow-less'></div>
                <div className='wrapper-rightbar__percent'>100%</div>
                <div className='wrapper-rightbar__arrow-more'></div>
                <div className='wrapper-rightbar__colorize'></div>
                <div className='wrapper-rightbar__color-lens'></div>
                <div className='wrapper-rightbar__wb-sunny'></div>
                <div className='wrapper-rightbar__save'></div>
                {/*<div className='wrapper-rightbar__fullscreen'></div>*/}
                <div className='wrapper-rightbar__settings'></div>
            </div>
        )
    }
}
RightBar.propTypes = {
    some: PropTypes.bool
}
const mapStateToProps = state => ({
    some: state.some
})
export default connect(mapStateToProps, null)(RightBar)