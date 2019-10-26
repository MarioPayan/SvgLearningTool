import * as objects from './objects';

export type example = {
  header: string;
  svg: objects.shape;
};

export default [
  {
    header: 'Circle',
    svg: objects.circle,
  },
  {
    header: 'Rectangle',
    svg: objects.rectangle,
  },
  {
    header: 'Ellipse',
    svg: objects.ellipse,
  },
  {
    header: 'Line',
    svg: objects.line,
  },
  {
    header: 'Polygon',
    svg: objects.polygon,
  },
  {
    header: 'Polyline',
    svg: objects.polyline,
  },
  {
    header: 'Text',
    svg: objects.text,
  },
];
