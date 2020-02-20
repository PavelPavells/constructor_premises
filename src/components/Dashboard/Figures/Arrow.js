import React from 'react';

/** ************* IMPORT KONVA LIBRARY ************* */
import { Arrow } from 'react-konva';

/** ************* ARROW FIGURE ************* */
class Arrows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDragging: false,
            x: 50,
            y: 50,
            width: 180,
            height: 180
        }
    }
    render() {
        const { isDragging, x, y, width, height } = this.state;
        return(
            <Arrow 
                x={x}
                y={y}
                points={[30, 30, width / 2, height / 2]}
                pointerLength={20}
                pointerWidth={20}
                fill={isDragging ? '#DC2222': '#404040'}
                stroke={'404040'}
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
export default Arrows;