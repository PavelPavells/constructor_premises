import React from 'react';

/** ************* IMPORT KONVA LIBRARY ************* */
import { Line } from 'react-konva';

/** ************* LINE FIGURE ************* */
class Lines extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDragging: false,
            x: 630,
            y: 400
        }
    }
    render() {
        const { isDragging, x, y } = this.state;
        return (
            <Line 
                x={x}
                y={y}
                points={[5, 70, 140, 23, 250, 60, 300, 20]}
                //stroke={'#DC2222'}
                stroke={isDragging ? '#DC2222' : '#404040'}
                strokeWidth={10}
                lineCap={'round'}
                lineJoin={'round'}
                draggable
                onDragStart={() => {
                    this.setState({ isDragging: false })
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
export default Lines;