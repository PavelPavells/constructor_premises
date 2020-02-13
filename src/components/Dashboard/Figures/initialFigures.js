/********************* NAMING FIGURES *********************

 * id: '`{rect}`' - КВАДРАТ
 * id: '`{circle}`' - КРУГ
 * id: '`{ellipse}`' -  ЭЛЛИПС
 * id: '`{wedge}`' - КЛИН
 * id: '`{text}`' - ТЕКСТ
 * id: '`{regularPolygon}` - ОБЫЧНЫЙ ПОЛИГОН'
 * id: '`{arrow}`' - СТРЕЛКА
 * id: '`{simpleLine}`' - ПРОСТАЯ ЛИНИЯ
 * id: '`{Polygon}`' - ПОЛИГОН
 * 
 ******************************************/


export const initialFigures = [
    {
        x: 10,
        y: 10,
        width: 100,
        height: 100,    
        fill: 'green',
        id: 'rect1'
    },
    {
        x: 0,
        y: 0,
        width: 50,
        height: 50,
        fill: 'red',
        id: 'rect2'
    },
    {
        x: 5,
        y: 5,
        width: 20,
        height: 20,
        fill: 'orange',
        id: 'rect3'
    }, 
    {
        x: 25,
        y: 25,
        width: 50,
        height: 50,
        radius: 70,
        fill: 'green',
        id: 'circle1'
    },
    {
        x: 25,
        y: 25,
        width: 100,
        height: 100,
        radius: 70,
        fill: 'yellow',
        id: 'circle2'
    },
    {
        x: 25,
        y: 25,
        width: 100,
        height: 100,
        radiusX: 100,
        radiusY: 50,
        fill: 'pink',
        id: 'ellipse1'
    },
    {
        x: 50,
        y: 50,
        width: 150,
        height: 150,
        radiusX: 100,
        radiusY: 50,
        fill: 'yellow',
        id: 'ellipse2'
    },
    {
        x: 30,
        y: 30,
        radius: 70,
        angle: 60,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        rotation: -120,
        id: 'wedge1'
    },
    {
        x: 30,
        y: 30,
        radius: 170,
        angle: 160,
        fill: 'green',
        stroke: 'yellow',
        strokeWidth: 1,
        rotation: 120,
        id: 'wedge2'
    },
    {
        x: 20,
        y: 50,
        text: 'HELLO TEXT SOMETHING DOING',
        fontSize: 18,
        fontFamily: 'Montserrat',
        fill: '#555',
        width: 300,
        padding: 20,
        align: 'center',
        id: 'text1'
    },
    {
        x: 10,
        y: 30,
        text: 'HELLO TEXT SOMETHING DOING',
        fontSize: 14,
        fontFamily: 'Montserrat',
        fill: '#555',
        width: 200,
        padding: 10,
        align: 'center'
    },
    {
        
    }
]