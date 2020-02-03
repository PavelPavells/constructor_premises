import React from 'react';
import PropTypes from 'prop-types';
import './Register.scss';
import { connect } from 'react-redux';

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            some: false
        }
    }
    render() {
        return(
            <div>HELLO REGISTER</div>
        )
    }
}
Register.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    register: state.register,
    errors: state.register
})
export default connect(
    mapStateToProps,
    null
)(Register)