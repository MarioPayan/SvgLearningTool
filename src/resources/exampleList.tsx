import {circle, rectangle, figure} from './objects';

export type example = {
  header: string;
  svg: figure;
};

export default [
  {
    header: 'Circle',
    svg: circle,
  },
  {
    header: 'Rectangle',
    svg: rectangle,
  },
];
