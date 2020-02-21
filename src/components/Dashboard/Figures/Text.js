import React from 'react';

/** ************* IMPORT KONVA LIBRARY ************* */
import { Text } from 'react-konva';

/** ************* RECT FIGURE ************* */
class Texts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDragging: false,
            x: 460,
            y: 140
        }
    }
    render() {
        const { isDragging, x, y } = this.state;
        return (
            <Text 
                text={'Текст для переноса'}
                x={x}
                y={y}
                fontSize={30}
                strokeWidth={4}
                fill={isDragging ? '#404040' : 'green'}
                draggable
                onDragStart={() => {
                    this.setState({
                        isDragging: true
                    })
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
export default Texts;