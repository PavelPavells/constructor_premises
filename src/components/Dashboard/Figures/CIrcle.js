import React from 'react';

/** ************* IMPORT KONVA LIBRARY ************* */
import { Circle } from 'react-konva';

/** ************* CIRCLE FIGURE ************* */
class Circles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDragging: false,
            x: 340,
            y: 440
        }
    }
    render() {
        const { isDragging, x, y } = this.state;
        return (
            <Circle 
                x={x}
                y={y}
                radius={60}
                fill={isDragging ? '#DC2222' : '#404040'}
                stroke={'#404040'}
                strokeWidth={2}
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
export default Circles;