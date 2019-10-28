export type animation = {
  tag: string;
  attributeName: string;
  type?: string;
  from?: string;
  to?: string;
  dur?: string;
  repeatCount?: string;
  path?: string;
};

export type filter = {
  tag: string;
  stdDeviation?: string;
};

export type shape = {
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
  href?: string;
  animations: animation[];
  filters: filter[];
};

const animate: animation = {
  tag: 'animate',
  attributeName: '',
  from: '',
  to: '',
  dur: '5s',
  repeatCount: 'indefinite',
};

const animateTransform: animation = {
  tag: 'animateTransform',
  attributeName: '',
  type: '',
  from: '',
  to: '',
  dur: '5s',
  repeatCount: 'indefinite',
};

const animations = [
  Object.assign({}, animate),
  Object.assign({}, animate),
  Object.assign({}, animateTransform),
  Object.assign({}, animateTransform),
];

export const circle: shape = {
  tag: 'circle',
  animations: Array.from(animations),
  filters: [],
  cx: '135',
  cy: '70',
  r: '50',
  fill: 'red',
  stroke: 'black',
  strokeWidth: '4',
};

export const rectangle: shape = {
  tag: 'rect',
  animations: Array.from(animations),
  filters: [],
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

export const line: shape = {
  tag: 'line',
  animations: Array.from(animations),
  filters: [],
  x1: '40',
  x2: '210',
  y1: '40',
  y2: '100',
  stroke: 'purple',
  strokeWidth: '20',
  strokeOpacity: '0.9',
};

export const ellipse: shape = {
  tag: 'ellipse',
  animations: Array.from(animations),
  filters: [],
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

export const polygon: shape = {
  tag: 'polygon',
  animations: Array.from(animations),
  filters: [],
  points: '130,0 70,141 220,51 40,51 190,141',
  stroke: 'black',
  strokeWidth: '2',
  strokeOpacity: '0.5',
  fill: 'grey',
  fillRule: 'evenodd',
};

export const polyline: shape = {
  tag: 'polyline',
  animations: Array.from(animations),
  filters: [],
  points: '5,5 20,5 20,45 75,45 75,130 150,130 150,45 250,20',
  stroke: 'orange',
  strokeWidth: '4',
  strokeOpacity: '',
  fill: 'white',
  fillRule: '',
};

export const text: shape = {
  tag: 'text',
  animations: Array.from(animations),
  filters: [],
  text: 'Sample text',
  x: '100',
  y: '10',
  fill: 'red',
  transform: 'rotate(30 20,40)',
};

export const image: shape = {
  tag: 'image',
  animations: Array.from(animations),
  filters: [],
  x: '75',
  y: '10',
  width: '150',
  height: '150',
  href:
    'https://d1.awsstatic.com/logos/customers/Alert-Logic-logo.77c92024a8f644a898189b5fe47bf846f41c5a21.png',
};
