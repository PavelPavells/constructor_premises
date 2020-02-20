import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './OptionBar.scss';

class OptionBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            turnstile: false,
            barrier: false,
            anadromous: false,
            wall: false,
            premises: false
        }
    }

    /** ********** TOGGLE TURNSTILE OPTION ********** */
    handleTurnstileChange = event => {
        event.preventDefault();
        let arrowTurnstile = document.getElementsByClassName('wrapper-optionbar__list-turnstile__photo')[0];
        arrowTurnstile.classList.toggle('transform-photo');
        this.setState({ turnstile: !this.state.turnstile });
    }

    /** ********** TOGGLE BARRIER OPTION ********** */
    handleBarrierChange = event => {
        event.preventDefault();
        let arrowBarrier = document.getElementsByClassName('wrapper-optionbar__list-barrier__photo')[0];
        arrowBarrier.classList.toggle('transform-photo');
        this.setState({ barrier: !this.state.barrier });
    }

    /** ********** TOGGLE ANADROMOUS OPTION ********** */
    handleAnadromousChange = event => {
        event.preventDefault();
        let arrowAnadromous = document.getElementsByClassName('wrapper-optionbar__list-anadromous__photo')[0];
        arrowAnadromous.classList.toggle('transform-photo');
        this.setState({ anadromous: !this.state.anadromous });
    }

    /** ********** TOGGLE WALL OPTION ********** */
    handleWallChange = event => {
        event.preventDefault();
        let arrowWall = document.getElementsByClassName('wrapper-optionbar__list-wall__photo')[0];
        arrowWall.classList.toggle('transform-photo');
        this.setState({ wall: !this.state.wall });
    }

    /** ********** TOGGLE PREMISES OPTION ********** */
    handlePremisesChange = event => {
        event.preventDefault();
        let arrowPremises = document.getElementsByClassName('wrapper-optionbar__list-premises__photo')[0];
        arrowPremises.classList.toggle('transform-photo');
        this.setState({ premises: !this.state.premises });
    }
    render() {
        const { turnstile, barrier, anadromous, wall, premises } = this.state;
        return(
            <div className='wrapper-optionbar'>
                <div className='wrapper-optionbar__list'>
                    <div className='wrapper-optionbar__list-text'>
                        <div className='wrapper-optionbar__list-text__light'></div>
                        <div className='wrapper-optionbar__list-text__medium'></div>
                        <div className='wrapper-optionbar__list-text__bold'></div>
                    </div>

                    {/** ********** TURNSTILE BLOCK ********** */}

                    <div onClick={this.handleTurnstileChange} className='wrapper-optionbar__list-turnstile'>
                        <div className='wrapper-optionbar__list-turnstile__photo'></div>
                        <span>Турникеты</span>
                    </div>
                        {turnstile ? (
                                <div className='wrapper-optionbar__list-turnstile__turnstile-figures'>
                                    <section className='wrapper-optionbar__list-turnstile__turnstile-figures__section-one'>
                                        <div className='photo-top__left'><div className='photo'></div></div>
                                        <div className='photo-top__right'><div className='photo'></div></div>
                                    </section>
                                    <section className='wrapper-optionbar__list-turnstile__turnstile-figures__section-two'>
                                        <div className='photo-center__left'><div className='photo'></div></div>
                                        <div className='photo-center__right'><div className='photo'></div></div>
                                    </section>
                                    <section className='wrapper-optionbar__list-turnstile__turnstile-figures__section-three'>
                                        <div className='photo-bottom__left'><div className='photo'></div></div>
                                        <div className='photo-bottom__right'><div className='photo'></div></div>
                                    </section>
                                </div>
                            ) : null
                        }

                    {/** ==================== BARRIER BLOCK ==================== */}

                    <div onClick={this.handleBarrierChange} className='wrapper-optionbar__list-barrier'>
                        <div className='wrapper-optionbar__list-barrier__photo'></div>
                        <span>Шлагбаумы</span>
                    </div>
                        {barrier ? (
                                <div className='wrapper-optionbar__list-barrier__barrier-figures'>
                                    <section className='wrapper-optionbar__list-barrier__barrier-figures__section-one'>
                                        <div>Figure</div>
                                        <div>Figure</div>
                                    </section>
                                    <section className='wrapper-optionbar__list-barrier__barrier-figures__section-two'>
                                        <div>Figure</div>
                                        <div>Figure</div>
                                    </section>
                                    <section className='wrapper-optionbar__list-barrier__barrier-figures__section-three'>
                                        <div>Figure</div>
                                        <div>Figure</div>
                                    </section>
                                </div>
                            ) : null
                        }

                    {/** ==================== ANADROMOUS BLOCK ==================== */}

                    <div onClick={this.handleAnadromousChange} className='wrapper-optionbar__list-anadromous'>
                        <div className='wrapper-optionbar__list-anadromous__photo'></div>
                        <span>Проходные</span>
                    </div>
                        {anadromous ? (
                                <div className='wrapper-optionbar__list-anadromous__anadromous-figures'>
                                    <section className='wrapper-optionbar__list-anadromous__anadromous-figures__section-one'>
                                        <div>Figure</div>
                                        <div>Figure</div>
                                    </section>
                                    <section className='wrapper-optionbar__list-anadromous__anadromous-figures__section-two'>
                                        <div>Figure</div>
                                        <div>Figure</div>
                                    </section>
                                    <section className='wrapper-optionbar__list-anadromous__anadromous-figures__section-three'>
                                        <div>Figure</div>
                                        <div>Figure</div>
                                    </section>
                                </div>
                            ) : null
                        }

                    {/** ==================== WALL BLOCK ==================== */}
                    
                    <div onClick={this.handleWallChange} className='wrapper-optionbar__list-wall'>
                        <div className='wrapper-optionbar__list-wall__photo'></div>
                        <span>Стены</span>
                    </div>
                        {wall ? (
                                <div className='wrapper-optionbar__list-wall__wall-figures'>
                                    <section className='wrapper-optionbar__list-wall__wall-figures__section-one'>
                                        <div>Figure</div>
                                        <div>Figure</div>
                                    </section>
                                    <section className='wrapper-optionbar__list-wall__wall-figures__section-two'>
                                        <div>Figure</div>
                                        <div>Figure</div>
                                    </section>
                                    <section className='wrapper-optionbar__list-wall__wall-figures__section-three'>
                                        <div>Figure</div>
                                        <div>Figure</div>
                                    </section>
                                </div>
                            ) : null
                        }

                    {/** ==================== PREMISES BLOCK ==================== */}
                    
                    <div onClick={this.handlePremisesChange} className='wrapper-optionbar__list-premises'>
                        <div className='wrapper-optionbar__list-premises__photo'></div>
                        <span>Помещения</span>
                    </div>
                        {premises ? (
                                <div className='wrapper-optionbar__list-premises__premises-figures'>
                                    <section className='wrapper-optionbar__list-premises__premises-figures__section-one'>
                                        <div>Figure</div>
                                        <div>Figure</div>
                                    </section>
                                    <section className='wrapper-optionbar__list-premises__premises-figures__section-two'>
                                        <div>Figure</div>
                                        <div>Figure</div>
                                    </section>
                                    <section className='wrapper-optionbar__list-premises__premises-figures__section-three'>
                                        <div>Figure</div>
                                        <div>Figure</div>
                                    </section>
                                </div>
                            ) : null
                        }
                    {/*<div className='wrapper-optionbar__list-3dmodel'>
                        3D-Модель
                    </div>*/}
                </div>
            </div>
        )
    }
}
OptionBar.propTypes = {
    some: PropTypes.bool
}
export default connect(null, null)(OptionBar)