import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './RightBar.scss';

class RightBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            some: false
        }
    }
    render() {
        return(
            <div className='wrapper-rightbar'>right bar</div>
        )
    }
}
RightBar.propTypes = {
    some: PropTypes.bool.isRequired
}
const mapStateToProps = state => ({
    some: state.some
})
export default connect(mapStateToProps, null)(RightBar)