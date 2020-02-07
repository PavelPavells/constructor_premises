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
    handleTurnstileChange = event => {
        event.preventDefault();
        this.setState({ turnstile: !this.state.turnstile })
    }
    handleBarrierChange = event => {
        event.preventDefault();
        this.setState({ barrier: !this.state.barrier })
    }
    handleAnadromousChange = event => {
        event.preventDefault();
        this.setState({ anadromous: !this.state.anadromous })
    }
    handleWallChange = event => {
        event.preventDefault();
        this.setState({ wall: !this.state.wall })
    }
    handlePremisesChange = event => {
        event.preventDefault();
        this.setState({ premises: !this.state.premises })
    }
    render() {
        const { turnstile, barrier, anadromous,wall, premises } = this.state;
        return(
            <div className='wrapper-optionbar'>
                <div className='wrapper-optionbar__list'>
                    <div className='wrapper-optionbar__list-text'>
                        <div className='wrapper-optionbar__list-text__light'></div>
                        <div className='wrapper-optionbar__list-text__medium'></div>
                        <div className='wrapper-optionbar__list-text__bold'></div>
                    </div>

                    {/** ==================== TURNSTILE BLOCK ==================== */}

                    <div onClick={this.handleTurnstileChange} className='wrapper-optionbar__list-turnstile'>
                        <div className='photo'></div>
                        <span>Турникеты</span>
                    </div>
                        {turnstile ? (
                                <div className='wrapper-optionbar__list-turnstile__turnstile-figures'>
                                    <section className='wrapper-optionbar__list-turnstile__turnstile-figures__section-one'>
                                        <div>1</div>
                                        <div>2</div>
                                        <div>3</div>
                                    </section>
                                    <section className='wrapper-optionbar__list-turnstile__turnstile-figures__section-two'>
                                        <div>4</div>
                                        <div>5</div>
                                        <div>6</div>
                                    </section>
                                    <section className='wrapper-optionbar__list-turnstile__turnstile-figures__section-three'>
                                        <div>7</div>
                                        <div>8</div>
                                        <div>9</div>
                                    </section>
                                </div>
                            ) : null
                        }

                    {/** ==================== BARRIER BLOCK ==================== */}

                    <div onClick={this.handleBarrierChange} className='wrapper-optionbar__list-barrier'>
                        <div></div>
                        <span>Шлагбаумы</span>
                    </div>
                        {barrier ? (
                                <div className='wrapper-optionbar__list-barrier__barrier-figures'>
                                    <section className='wrapper-optionbar__list-barrier__barrier-figures__section-one'>
                                        <div>1</div>
                                        <div>2</div>
                                        <div>3</div>
                                    </section>
                                    <section className='wrapper-optionbar__list-barrier__barrier-figures__section-two'>
                                        <div>4</div>
                                        <div>5</div>
                                        <div>6</div>
                                    </section>
                                    <section className='wrapper-optionbar__list-barrier__barrier-figures__section-three'>
                                        <div>7</div>
                                        <div>8</div>
                                        <div>9</div>
                                    </section>
                                </div>
                            ) : null
                        }

                    {/** ==================== ANADROMOUS BLOCK ==================== */}

                    <div onClick={this.handleAnadromousChange} className='wrapper-optionbar__list-anadromous'>
                        <div></div>
                        <span>Проходные</span>
                    </div>
                        {anadromous ? (
                                <div className='wrapper-optionbar__list-anadromous__anadromous-figures'>
                                    <section className='wrapper-optionbar__list-anadromous__anadromous-figures__section-one'>
                                        <div>1</div>
                                        <div>2</div>
                                        <div>3</div>
                                    </section>
                                    <section className='wrapper-optionbar__list-anadromous__anadromous-figures__section-two'>
                                        <div>4</div>
                                        <div>5</div>
                                        <div>6</div>
                                    </section>
                                    <section className='wrapper-optionbar__list-anadromous__anadromous-figures__section-three'>
                                        <div>7</div>
                                        <div>8</div>
                                        <div>9</div>
                                    </section>
                                </div>
                            ) : null
                        }

                    {/** ==================== WALL BLOCK ==================== */}
                    
                    <div onClick={this.handleWallChange} className='wrapper-optionbar__list-wall'>
                        <div></div>
                        <span>Стены</span>
                    </div>
                        {wall ? (
                                <div className='wrapper-optionbar__list-wall__wall-figures'>
                                    <section className='wrapper-optionbar__list-wall__wall-figures__section-one'>
                                        <div>1</div>
                                        <div>2</div>
                                        <div>3</div>
                                    </section>
                                    <section className='wrapper-optionbar__list-wall__wall-figures__section-two'>
                                        <div>4</div>
                                        <div>5</div>
                                        <div>6</div>
                                    </section>
                                    <section className='wrapper-optionbar__list-wall__wall-figures__section-three'>
                                        <div>7</div>
                                        <div>8</div>
                                        <div>9</div>
                                    </section>
                                </div>
                            ) : null
                        }

                    {/** ==================== PREMISES BLOCK ==================== */}
                    
                    <div onClick={this.handlePremisesChange} className='wrapper-optionbar__list-premises'>
                        <div></div>
                        <span>Помещения</span>
                    </div>
                        {premises ? (
                                <div className='wrapper-optionbar__list-premises__premises-figures'>
                                    <section className='wrapper-optionbar__list-premises__premises-figures__section-one'>
                                        <div>1</div>
                                        <div>2</div>
                                        <div>3</div>
                                    </section>
                                    <section className='wrapper-optionbar__list-premises__premises-figures__section-two'>
                                        <div>4</div>
                                        <div>5</div>
                                        <div>6</div>
                                    </section>
                                    <section className='wrapper-optionbar__list-premises__premises-figures__section-three'>
                                        <div>7</div>
                                        <div>8</div>
                                        <div>9</div>
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
const mapStateToProps = state => ({
    some: state.some
})
export default connect(mapStateToProps, null)(OptionBar)