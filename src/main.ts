
import Konva from 'konva';

// first we need to create a stage
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

// then create layer
const layer = new Konva.Layer();

// create our shape

const lemon = new Konva.Shape({
  x: stage.width() / 2,
  y: stage.height() / 2,

  draggable: true,

  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 3,

  sceneFunc: (context, shape) => {
    context.beginPath();

    // Left tip
    context.moveTo(-130, 0);
    context.lineTo(-110, -12);

    // Upper curve
    context.bezierCurveTo(-80, -70, 80, -70, 110, -12);

    // Right tip
    context.lineTo(130, 0);
    context.lineTo(110, 12);

    // Lower curve
    context.bezierCurveTo(80, 70, -80, 70, -110, 12);

    context.closePath();
    context.fillStrokeShape(shape);
  }
});

layer.add(lemon);

lemon.on('mouseover', () => {
  document.body.style.cursor = 'pointer';
});

lemon.on('mouseout', () => {
  document.body.style.cursor = 'default';
});



lemon.on('mousedown', () => {
  lemon.to({
    scaleX: 1.1,
    scaleY: 1.1,
    duration: 0.2
  });
});

lemon.on('mouseup', () => {
  lemon.to({
    scaleX: 1,
    scaleY: 1,
    duration: 0.2
  });
});

lemon.on('mouseleave', () => {
  lemon.to({
    scaleX: 1,
    scaleY: 1,
    duration: 0.2
  });
});



// add the layer to the stage
stage.add(layer);
