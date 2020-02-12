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
    }
]