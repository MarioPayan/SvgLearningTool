import React from 'react';
import './Path.scss';

export default class Path extends React.Component {
  render = (): JSX.Element => {
    return (
      <svg width='1100px' height='680px'>
        <text x='0' y='0'>
          <tspan x='65' y='75' className='svg-title'>
            Path
          </tspan>
          <tspan x='330' y='130'>
            The path element is the most powerful element
          </tspan>
          <tspan x='330' y='150'>
            in the SVG library of basic shapes.
          </tspan>
          <tspan x='330' y='170'>
            You can use it to create lines, curves, arcs and more.
          </tspan>
          <tspan x='470' y='200' className='svg-bold'>
            M = moveto
          </tspan>
          <tspan x='480' y='220' className='svg-bold'>
            L = lineto
          </tspan>
          <tspan x='490' y='240' className='svg-bold'>
            C = curveto
          </tspan>
          <tspan x='500' y='260' className='svg-bold'>
            A = elliptical Arc
          </tspan>
          <tspan x='510' y='280' className='svg-bold'>
            Z = closepath
          </tspan>
          <tspan x='610' y='200' className='svg-bold'>
            H = horizontal lineto
          </tspan>
          <tspan x='620' y='220' className='svg-bold'>
            V = vertical lineto
          </tspan>
          <tspan x='630' y='240' className='svg-bold'>
            S = smooth curveto
          </tspan>
          <tspan x='640' y='260' className='svg-bold'>
            Q = quadratic Bézier curve
          </tspan>
          <tspan x='650' y='280' className='svg-bold'>
            T = smooth quadratic Bézier curveto
          </tspan>
          <tspan x='180' y='360'>
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths'
              target='_blank'
              className='svg-link'
              rel='noopener noreferrer'>
              Full documentation
            </a>
          </tspan>
          <tspan x='30' y='390'>
            Paths create complex shapes by combining multiple straight lines or
            curved lines.
          </tspan>
          <tspan x='30' y='410'>
            Complex shapes composed only of straight lines can be created as
            polylines.
          </tspan>
          <tspan x='30' y='430'>
            While polylines and paths can create similar-looking shapes,
            polylines require
          </tspan>
          <tspan x='30' y='450'>
            a lot of small straight lines to simulate curves and don&apos;t
            scale well to larger sizes.
          </tspan>
          <tspan x='30' y='470'>
            A good understanding of paths is important when drawing SVGs.
          </tspan>
          <tspan x='30' y='490'>
            While creating complex paths using an XML editor or tspan editor is
            not recommended,
          </tspan>
          <tspan x='30' y='510'>
            understanding how they work will allow you to identify and repair
            display issues in SVGs.
          </tspan>
          <tspan x='480' y='620'>
            d=&quot;M600,500 l50,50 l-100,0 z&quot;
          </tspan>
        </text>
        <path d='M600,550 l50,50 l-100,0 z' />

        <path
          id='lineAB'
          d='M 100 350 l 150 -300'
          stroke='red'
          strokeWidth='3'
          fill='none'
        />
        <path
          id='lineBC'
          d='M 250 50 l 150 300'
          stroke='red'
          strokeWidth='3'
          fill='none'
        />
        <path
          d='M 175 200 l 150 0'
          stroke='green'
          strokeWidth='3'
          fill='none'
        />
        <path
          d='M 100 350 q 150 -300 300 0'
          stroke='blue'
          strokeWidth='5'
          fill='none'
        />
        <g stroke='black' strokeWidth='3' fill='black'>
          <circle id='pointA' cx='100' cy='350' r='3' />
          <circle id='pointB' cx='250' cy='50' r='3' />
          <circle id='pointC' cx='400' cy='350' r='3' />
        </g>
        <g
          fontSize='30'
          fontFamily='sans-serif'
          fill='black'
          stroke='none'
          textAnchor='middle'>
          <text x='100' y='350' dx='-30'>
            A
          </text>
          <text x='250' y='50' dy='-10'>
            B
          </text>
          <text x='400' y='350' dx='30'>
            C
          </text>
        </g>
      </svg>
    );
  };
}
