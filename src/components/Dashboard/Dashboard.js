import React from 'react'
import PropTypes from 'prop-types';
import './Dashboard.scss';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            some: false
        }
    }
    render() {
        return(
            <div>HELLO DASHBOARD</div>
        )
    }
}
Dashboard.propTypes = {
    dashboard: PropTypes.array.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    dashboard: state.dashboard
})
export default connect(
    mapStateToProps,
    null
)(Dashboard)