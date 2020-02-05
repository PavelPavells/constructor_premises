import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Canvas.scss';

class Canvas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            some: false
        }
    }
    render() {
        return(
            <div className='wrapper-canvas'>canvas</div>
        )
    }
}
Canvas.propTypes = {
    some: PropTypes.bool.isRequired
}
const mapStateToProps = state => ({
    some: state.some
})
export default connect(mapStateToProps, null)(Canvas)