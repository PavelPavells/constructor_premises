import React from "react";
//import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
import { ChromePicker } from "react-color";
import "./ColorPicker.scss";

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false
  };

  /** ************* TOGGLE COLOR PICKER ************* */
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  /** ************* TOGGLE COLOR PICKER WINDOW ************* */
  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  render() {
    const popover = {
      position: "absolute",
      zIndex: "10000",
      right: '35px'
    };
    const cover = {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px"
    };
    return (
      <div>
        <div className='wrapper-colorpicker' onClick={this.handleClick}></div>
        {this.state.displayColorPicker ? (
          <div style={popover}>
            <div style={cover} onClick={this.handleClose} />
            <ChromePicker />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ColorPicker;