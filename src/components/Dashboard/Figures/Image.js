import React from 'react';

/** ************* IMPORT KONVA LIBRARY ************* */
import { Image } from 'react-konva';
import useImage from 'use-image'

/** ************* IMPORT PHOTO ************* */
import turnstille_01 from '../../../img/canvas-img/turnstille_01.png';
import turnstille_02 from '../../../img/canvas-img/turnstille_02.png';
import turnstille_03 from '../../../img/canvas-img/turnstille_03.png';

/** ************* IMAGE FIGURE 1 ************* */
export const Images1 = () => {
    const [ image ] = useImage(turnstille_01)
    return (
        <Image 
            image={image}
            draggable
        />
    )
}

/** ************* IMAGE FIGURE 2 ************* */
export const Images2 = () => {
    const [ image ] = useImage(turnstille_02)
    return (
        <Image 
            image={image}
            draggable
            x={100}
            y={200}
        />
    )
}

/** ************* IMAGE FIGURE 3 ************* */
export const Images3 = () => {
    const [ image ] = useImage(turnstille_03)
    return (
        <Image 
            image={image}
            draggable
            x={350}
            y={100}
        />
    )
}

//export { Images_1, Images_2, Images_3 }


// class Images extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             image: null,
//             isDragging: false,
//             x: 50,
//             y: 50
//         }
//     }
//     render() {
//         const { x, y } = this.state;
//         return (
//             <Image 
//                 x={x}
//                 y={y}
//                 image={turnstille_01}
//                 width={300}
//                 height={300}
//                 draggable
//                 onDragStart={() => {
//                     this.setState({ isDragging: true })
//                 }}
//                 onDragEnd={event => {
//                     this.setState({
//                         isDragging: false,
//                         x: event.target.x(),
//                         y: event.target.y()
//                     })
//                 }}
//             />
//         )
//     }
// }
// export default Images;