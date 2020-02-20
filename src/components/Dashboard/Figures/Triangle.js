import React from 'react';

/** ************* IMPORT KONVA LIBRARY ************* */
import { Triangle } from 'react-konva';

/** ************* TRIANGLE FIGURE ************* */
class Triangles extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isDragging: false,
        x: 300,
        y: 200
      }
    }
    render() {
      const { isDragging, x, y } = this.state;
      return(
        <Triangle 
			x={x}
			y={y}
			width={30}
			height={30}
			fill={isDragging ? '#DC2222' : '#404040'}
			draggable
			onDragStart={() => {
				this.setState({ isDragging: true })
			}}
			onDragEnd={event => {
				this.setState({
					isDragging: false,
					x: event.target.x(),
					y: event.target.y()
				})
			}}
        />
      )
    }
}
export default Triangles;