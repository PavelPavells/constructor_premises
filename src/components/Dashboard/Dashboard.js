import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LeftBar from './LeftBar/LeftBar';
import Header from './Header/Header';
import Canvas from './Canvas/Canvas';
import RightBar from './RightBar/RightBar';
import './Dashboard.scss';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            some: false
        }
    }
    render() {
        return(
            <div className='wrapper-dashboard'>
                <header className='wrapper-dashboard__header'>
                    <Header />
                </header>
                <main className='wrapper-dashboard__main'>
                    <div className='wrapper-dashboard__main-canvas'>
                        <nav className='wrapper-dashboard__navigation-left'>
                            <LeftBar />
                        </nav>
                        <section className='wrapper-dashboard__canvas'>
                            <Canvas />
                        </section>
                        <nav className='wrapper-dashboard__navigation-right'>
                            <RightBar />
                        </nav>
                    </div>
                </main>
            </div>
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