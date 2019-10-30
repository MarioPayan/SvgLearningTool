import * as objects from './objects';

export type example = {
  header: string;
  svg: objects.shape;
};

export const generalExamples: example[] = [
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
  {
    header: 'Image',
    svg: objects.image,
  },
];

const replaceAnimation = (
  shape: objects.shape,
  animation: objects.animation
): objects.shape => {
  const newShape = Object.assign({}, shape);
  newShape.animations = [Object.assign({}, animation)];
  return newShape;
};

const replaceFilter = (
  shape: objects.shape,
  filter: objects.filter
): objects.shape => {
  const newShape = Object.assign({}, shape);
  newShape.filter = `url(#${filter.id})`;
  newShape.filters = [Object.assign({}, filter)];
  return newShape;
};

export const animationExamples: example[] = [
  {
    header: 'Animate on X',
    svg: replaceAnimation(objects.rectangle, {
      tag: 'animate',
      attributeName: 'x',
      from: '0',
      to: '200',
      dur: '5s',
      repeatCount: 'indefinite',
    }),
  },
  {
    header: 'Animate on Y',
    svg: replaceAnimation(objects.rectangle, {
      tag: 'animate',
      attributeName: 'y',
      from: '0',
      to: '100',
      dur: '5s',
      repeatCount: 'indefinite',
    }),
  },
  {
    header: 'AnimateTransform (rotate)',
    svg: replaceAnimation(objects.rectangle, {
      tag: 'animateTransform',
      attributeName: 'transform',
      type: 'rotate',
      from: '0 138 70',
      to: '360 138 70',
      dur: '5s',
      repeatCount: 'indefinite',
    }),
  },
  {
    header: 'AnimateTransform (scale)',
    svg: replaceAnimation(objects.rectangle, {
      tag: 'animateTransform',
      attributeName: 'transform',
      type: 'scale',
      from: '0 0',
      to: '1 1',
      dur: '5s',
      repeatCount: 'indefinite',
    }),
  },
  {
    header: 'AnimateTransform (translate)',
    svg: replaceAnimation(objects.rectangle, {
      tag: 'animateTransform',
      attributeName: 'transform',
      type: 'translate',
      from: '0, 0',
      to: '100,-50',
      dur: '5s',
      repeatCount: 'indefinite',
    }),
  },
  {
    header: 'AnimateTransform (skewX)',
    svg: replaceAnimation(objects.rectangle, {
      tag: 'animateTransform',
      attributeName: 'transform',
      type: 'skewX',
      from: '0',
      to: '35',
      dur: '5s',
      repeatCount: 'indefinite',
    }),
  },
  {
    header: 'AnimateTransform (skewY)',
    svg: replaceAnimation(objects.rectangle, {
      tag: 'animateTransform',
      attributeName: 'transform',
      type: 'skewY',
      from: '0',
      to: '35',
      dur: '5s',
      repeatCount: 'indefinite',
    }),
  },
  {
    header: 'AnimateMotion',
    svg: replaceAnimation(objects.rectangle, {
      tag: 'animateMotion',
      attributeName: '0',
      path: 'M-40,0 A120,120 -45 0,1 110 10 A120,120 -45 0,1 10,110Z',
      dur: '5s',
      repeatCount: 'indefinite',
    }),
  },
];

export const filterExamples: example[] = [
  {
    header: 'Filter (feGaussianBlur)',
    svg: replaceFilter(objects.rectangle, {
      tag: 'feGaussianBlur',
      id: 'feGaussianBlur',
      stdDeviation: '2',
    }),
  },
  {
    header: 'Filter (feTurbulence)',
    svg: replaceFilter(objects.rectangle, {
      tag: 'feTurbulence',
      id: 'feTurbulence',
      type: 'turbulence',
      baseFrequency: '0.09',
      numOctaves: '3',
    }),
  },
  {
    header: 'Filter (feDisplacementMap)',
    svg: replaceFilter(objects.rectangle, {
      tag: 'feDisplacementMap',
      id: 'feDisplacementMap',
      scale: '50',
      xChannelSelector: 'B',
      yChannelSelector: 'R',
    }),
  },
  {
    header: 'Filter (feTile)',
    svg: replaceFilter(objects.rectangle, {
      tag: 'feTile',
      id: 'feTile',
      in: 'SourceGraphic',
      x: '50',
      y: '50',
      width: '100',
      height: '100',
    }),
  },
  {
    header: 'Filter (feOffset)',
    svg: replaceFilter(objects.rectangle, {
      tag: 'feOffset',
      id: 'feOffset',
      in: 'SourceGraphic',
      dx: '50',
      dy: '50',
    }),
  },
  {
    header: 'Filter (feMorphology)',
    svg: replaceFilter(objects.rectangle, {
      tag: 'feMorphology',
      id: 'feMorphology1',
      operator: 'erode',
      radius: '2',
    }),
  },
  {
    header: 'Filter (feMorphology)',
    svg: replaceFilter(objects.rectangle, {
      tag: 'feMorphology',
      id: 'feMorphology2',
      operator: 'dilate',
      radius: '2',
    }),
  },
];
