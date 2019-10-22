export type figure = {
  tag: string;
  width?: string;
  height?: string;
  points?: string;
  x?: string;
  y?: string;
  r?: string;
  x1?: string;
  x2?: string;
  y1?: string;
  y2?: string;
  rx?: string;
  ry?: string;
  cx?: string;
  cy?: string;

  text?: string;

  clipPath?: string;
  clipRule?: string;
  color?: string;
  colorInterpolation?: string;
  colorRendering?: string;
  cursor?: string;
  display?: string;
  fill?: string;
  fillOpacity?: string;
  fillRule?: string;
  filter?: string;
  mask?: string;
  opacity?: string;
  pointerEvents?: string;
  shapeRendering?: string;
  stroke?: string;
  strokeDasharray?: string;
  strokeDashoffset?: string;
  strokeLinecap?: string;
  strokeLinejoin?: string;
  strokeMiterlimit?: string;
  strokeOpacity?: string;
  strokeWidth?: string;
  transform?: string;
  vectorEffect?: string;
  visibility?: string;
};

export const circle: figure = {
  tag: 'circle',
  cx: '135',
  cy: '70',
  r: '50',
  fill: 'red',
  stroke: 'black',
  strokeWidth: '4',
};

export const rectangle: figure = {
  tag: 'rect',
  x: '88',
  y: '20',
  rx: '20',
  ry: '20',
  width: '100',
  height: '100',
  fill: 'rgb(0,0,255)',
  stroke: 'rgb(0,0,0)',
  strokeWidth: '3',
  fillOpacity: '0.1',
  strokeOpacity: '0.9',
};

export const line: figure = {
  tag: 'line',
  x1: '40',
  x2: '210',
  y1: '40',
  y2: '100',
  stroke: 'purple',
  strokeWidth: '20',
  strokeOpacity: '0.9',
};

export const ellipse: figure = {
  tag: 'ellipse',
  cx: '135',
  cy: '70',
  rx: '100',
  ry: '40',
  fill: 'green',
  fillOpacity: '0.7',
  stroke: 'blue',
  strokeWidth: '6',
  strokeOpacity: '0.2',
};

export const polygon: figure = {
  tag: 'polygon',
  points: '130,0 70,141 220,51 40,51 190,141',
  stroke: 'black',
  strokeWidth: '2',
  strokeOpacity: '0.5',
  fill: 'grey',
  fillRule: 'evenodd',
};

export const polyline: figure = {
  tag: 'polyline',
  points: '5,5 20,5 20,45 75,45 75,130 150,130 150,45 250,20',
  stroke: 'orange',
  strokeWidth: '4',
  strokeOpacity: '',
  fill: 'white',
  fillRule: '',
};

export const text: figure = {
  tag: 'text',
  text: 'Sample text',
  x: '100',
  y: '10',
  fill: 'red',
  transform: 'rotate(30 20,40)',
};

export const stuff2: figure = {
  tag: 'stuff',
};

export const stuff3: figure = {
  tag: 'stuff',
};

export const stuff4: figure = {
  tag: 'stuff',
};

export const stuff5: figure = {
  tag: 'stuff',
};

export const stuff6: figure = {
  tag: 'stuff',
};
