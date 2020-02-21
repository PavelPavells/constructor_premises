import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** ************* IMPORT ACTIONS FROM ACTION FOLDER ************* */
 import {
    toggleTurnstilleBlock,
    toggleRoomBlock,
    toggleAnadromousBlock,
    toggleWallBlock,
    toggleFencingBlock 
} from '../../../actions/toggleOptionFunctions';

/** ************* IMPORT STYLES FOR OPTIONBAR ************* */
import './OptionBar.scss';

class OptionBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    /** ********** TOGGLE TURNSTILLE OPTION ********** */
    handleTurnstileChange = () => {
        let arrowTurnstile = document.getElementsByClassName('wrapper-optionbar__list-turnstile__photo')[0];
        arrowTurnstile.classList.toggle('transform-photo');
        this.props.toggleTurnstilleBlock();
    }

    /** ********** TOGGLE ROOM OPTION ********** */
    handleBarrierChange = () => {
        let arrowBarrier = document.getElementsByClassName('wrapper-optionbar__list-barrier__photo')[0];
        arrowBarrier.classList.toggle('transform-photo');
        this.props.toggleRoomBlock();
    }

    /** ********** TOGGLE ANADROMOUS OPTION ********** */
    handleAnadromousChange = () => {
        let arrowAnadromous = document.getElementsByClassName('wrapper-optionbar__list-anadromous__photo')[0];
        arrowAnadromous.classList.toggle('transform-photo');
        this.props.toggleAnadromousBlock();
    }

    /** ********** TOGGLE WALL OPTION ********** */
    handleWallChange = () => {
        let arrowWall = document.getElementsByClassName('wrapper-optionbar__list-wall__photo')[0];
        arrowWall.classList.toggle('transform-photo');
        this.props.toggleWallBlock();
    }

    /** ********** TOGGLE FENCING OPTION ********** */
    handlePremisesChange = () => {
        let arrowPremises = document.getElementsByClassName('wrapper-optionbar__list-premises__photo')[0];
        arrowPremises.classList.toggle('transform-photo');
        this.props.toggleFencingBlock();
    }
    render() {
        //console.log(this.props);
        const { 
            toggleTurnstilleBlock, 
            toggleRoomBlock, 
            toggleAnadromousBlock, 
            toggleWallBlock, 
            toggleFencingBlock 
        } = this.props.toggleOption;
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
                        {toggleTurnstilleBlock ? (
                                <div className='wrapper-optionbar__list-turnstile__turnstile-figures'>
                                    <section className='wrapper-optionbar__list-turnstile__turnstile-figures__section-one'>
                                        <div className='section-one__wrapper-photo-left'><div className='photo'></div></div>
                                        <div className='section-one__wrapper-photo-right'><div className='photo'></div></div>
                                    </section>
                                    <section className='wrapper-optionbar__list-turnstile__turnstile-figures__section-two'>
                                        <div className='section-two__wrapper-photo-left'><div className='photo'></div></div>
                                        <div className='section-two__wrapper-photo-right'><div className='photo'></div></div>
                                    </section>
                                    <section className='wrapper-optionbar__list-turnstile__turnstile-figures__section-three'>
                                        <div className='section-three__wrapper-photo-left'><div className='photo'></div></div>
                                        <div className='section-three__wrapper-photo-right'><div className='photo'></div></div>
                                    </section>
                                </div>
                            ) : null
                        }

                    {/** ==================== ROOM BLOCK ==================== */}

                    <div onClick={this.handleBarrierChange} className='wrapper-optionbar__list-barrier'>
                        <div className='wrapper-optionbar__list-barrier__photo'></div>
                        <span>Помещения</span>
                    </div>
                        {toggleRoomBlock ? (
                                <div className='wrapper-optionbar__list-barrier__barrier-figures'>
                                    <section className='wrapper-optionbar__list-barrier__barrier-figures__section-one'>
                                        <div className='section-one__wrapper-photo-left'><div className='photo'></div></div>
                                        <div className='section-one__wrapper-photo-right'><div className='photo'></div></div>
                                    </section>
                                    <section className='wrapper-optionbar__list-barrier__barrier-figures__section-two'>
                                        <div className='section-two__wrapper-photo-left'><div className='photo'></div></div>
                                        <div className='section-two__wrapper-photo-right'><div className='photo'></div></div>
                                    </section>
                                    <section className='wrapper-optionbar__list-barrier__barrier-figures__section-three'>
                                        <div className='section-three__wrapper-photo-left'><div className='photo'></div></div>
                                        <div className='section-three__wrapper-photo-right'><div className='photo'></div></div>
                                    </section>
                                </div>
                            ) : null
                        }

                    {/** ==================== ANADROMOUS BLOCK ==================== */}

                    <div onClick={this.handleAnadromousChange} className='wrapper-optionbar__list-anadromous'>
                        <div className='wrapper-optionbar__list-anadromous__photo'></div>
                        <span>Проходные</span>
                    </div>
                        {toggleAnadromousBlock ? (
                                <div className='wrapper-optionbar__list-anadromous__anadromous-figures'>
                                    <section className='wrapper-optionbar__list-anadromous__anadromous-figures__section-one'>
                                        <div className='section-one__wrapper-photo-left'><div className='photo'></div></div>
                                        <div className='section-one__wrapper-photo-right'><div className='photo'></div></div>
                                    </section>
                                    <section className='wrapper-optionbar__list-anadromous__anadromous-figures__section-two'>
                                        <div className='section-two__wrapper-photo-left'><div className='photo'></div></div>
                                        <div className='section-two__wrapper-photo-right'><div className='photo'></div></div>
                                    </section>
                                    <section className='wrapper-optionbar__list-anadromous__anadromous-figures__section-three'>
                                        <div className='section-three__wrapper-photo-left'><div className='photo'></div></div>
                                        <div className='section-three__wrapper-photo-right'><div className='photo'></div></div>
                                    </section>
                                </div>
                            ) : null
                        }

                    {/** ==================== WALL BLOCK ==================== */}
                    
                    <div onClick={this.handleWallChange} className='wrapper-optionbar__list-wall'>
                        <div className='wrapper-optionbar__list-wall__photo'></div>
                        <span>Стены</span>
                    </div>
                        {toggleWallBlock ? (
                                <div className='wrapper-optionbar__list-wall__wall-figures'>
                                    <section className='wrapper-optionbar__list-wall__wall-figures__section-one'>
                                        <div className='section-one__wrapper-photo-left'><div className='photo'></div></div>
                                        <div className='section-one__wrapper-photo-right'><div className='photo'></div></div>
                                    </section>
                                    <section className='wrapper-optionbar__list-wall__wall-figures__section-two'>
                                        <div className='section-two__wrapper-photo-left'><div className='photo'></div></div>
                                        <div className='section-two__wrapper-photo-right'><div className='photo'></div></div>
                                    </section>
                                    <section className='wrapper-optionbar__list-wall__wall-figures__section-three'>
                                        <div className='section-three__wrapper-photo-left'><div className='photo'></div></div>
                                        <div className='section-three__wrapper-photo-right'><div className='photo'></div></div>
                                    </section>
                                </div>
                            ) : null
                        }

                    {/** ==================== FENCING BLOCK ==================== */}
                    
                    <div onClick={this.handlePremisesChange} className='wrapper-optionbar__list-premises'>
                        <div className='wrapper-optionbar__list-premises__photo'></div>
                        <span>Ограждения</span>
                    </div>
                        {toggleFencingBlock ? (
                                <div className='wrapper-optionbar__list-premises__premises-figures'>
                                    <section className='wrapper-optionbar__list-premises__premises-figures__section-one'>
                                        <div className='section-one__wrapper-photo-left'><div className='photo'></div></div>
                                        <div className='section-one__wrapper-photo-right'><div className='photo'></div></div>
                                    </section>
                                    <section className='wrapper-optionbar__list-premises__premises-figures__section-two'>
                                        <div className='section-two__wrapper-photo-left'><div className='photo'></div></div>
                                        <div className='section-two__wrapper-photo-right'><div className='photo'></div></div>
                                    </section>
                                    <section className='wrapper-optionbar__list-premises__premises-figures__section-three'>
                                        <div className='section-three__wrapper-photo-left'><div className='photo'></div></div>
                                        <div className='section-three__wrapper-photo-right'><div className='photo'></div></div>
                                    </section>
                                </div>
                            ) : null
                        }
                </div>
            </div>
        )
    }
}
OptionBar.propTypes = {
    toogleOption: PropTypes.object,
    errors: PropTypes.object
}
const mapStateToProps = state => ({
    toggleOption: state.toggleOption
})
const mapDispatchToProps = {
    toggleTurnstilleBlock,
    toggleRoomBlock,
    toggleAnadromousBlock,
    toggleWallBlock,
    toggleFencingBlock 
}
export default connect(mapStateToProps, mapDispatchToProps)(OptionBar)