import React from 'react';

/** ************* IMPORT PHOTO ************* */
//import Picture from '../../../img/loading_project.svg';

/** ************* IMPORT KONVA LIBRARY ************* */
import { Image } from 'react-konva';
import turnstille_01 from '../../../img/canvas-img/turnstille_01.png';
//import turnstille_02 from '../../../img/canvas-img/turnstille_02.png';
//import turnstille_03 from '../../../img/canvas-img/turnstille_03.png';

/** ************* IMAGE FIGURE ************* */
class Images extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDragging: false,
            x: 50,
            y: 50
        }
    }
    render() {
        const { x, y } = this.state;
        return (
            <Image 
                x={x}
                y={y}
                image={turnstille_01}
                width={300}
                height={300}
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
export default Images;