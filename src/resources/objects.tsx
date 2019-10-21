export type ellipse = {
  cx: string;
  cy: string;
  rx: string;
  ry: string;
  fill?: string;
  fillOpacity?: string;
  stroke?: string;
  strokeWidth?: string;
  strokeOpacity?: string;
};

export type line = {
  x1: string;
  x2: string;
  y1: string;
  y2: string;
  stroke?: string;
  strokeWidth?: string;
  strokeOpacity?: string;
};

export type polygon = {
  points: string; //100,10 40,198 190,78 10,78 160,198
  stroke?: string;
  strokeWidth?: string;
  strokeOpacity?: string;
  fillRule?: string; //nonzero, evenodd
};

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
  fill?: string;
  fillOpacity?: string;
  fillRule?: string;
  stroke?: string;
  strokeWidth?: string;
  strokeOpacity?: string;
};

export const circle: figure = {
  tag: 'circle',
  cx: '143',
  cy: '70',
  r: '50',
  fill: 'red',
  stroke: 'black',
  strokeWidth: '4',
};

export const rectangle: figure = {
  tag: 'rect',
  x: '95',
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
