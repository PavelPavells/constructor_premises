import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//MAIN BLOCKS ON DASHBOARD
import LeftBar from './LeftBar/LeftBar';
import OptionBar from './OptionBar/OptionBar';
import Header from './Header/Header';
import Canvas from './Canvas/Canvas';
import RightBar from './RightBar/RightBar';

// DATA FOR FIGURES
import { initialFigures } from '../Dashboard/Figures/initialFigures';

// STYLES FOR DASHBOARD
import './Dashboard.scss';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            some: false,
            toggleOptionBar: true
        }
    }
    render() {
        //const { toggleOptionBar } = this.state;
        console.log(initialFigures)
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
                        <nav className='wrapper-dashboard__option-left'>
                            <OptionBar />
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
    dashboard: PropTypes.array,
    errors: PropTypes.object
}
const mapStateToProps = state => ({
    dashboard: state.dashboard
})
export default connect(
    mapStateToProps,
    null
)(Dashboard)