import React from 'react';
import './PathExample.scss';

export default class Path extends React.Component {
  render = (): JSX.Element => {
    return (
      <svg width='1100px' height='680px' viewBox='0 0 1100 680'>
        <g>
          <path
            className='stems'
            fill='none'
            stroke='#7AA20D'
            strokeWidth='8'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M54.817,169.848
            c0,0,77.943-73.477,82.528-104.043
            c4.585-30.566,46.364,91.186,27.512,121.498'
          />
          <path
            className='leaf'
            fill='#7AA20D'
            stroke='#7AA20D'
            strokeWidth='4'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M134.747,62.926
            c-1.342-6.078,0.404-12.924,5.762-19.681
            c11.179-14.098,23.582-17.539,40.795-17.846
            c0.007,0,22.115-0.396,26.714-20.031
            c-2.859,12.205-5.58,24.168-9.774,36.045
            c-6.817,19.301-22.399,48.527-47.631,38.028
            C141.823,75.784,136.277,69.855,134.747,62.926
            z'
          />
        </g>
        <g>
          <path
            className='r-cherry'
            fill='#ED6E46'
            stroke='#ED6E46'
            strokeWidth='12'
            d='M164.836,193.136
            c1.754-0.12,3.609-0.485,5.649-1.148
            c8.512-2.768,21.185-6.985,28.181,3.152
            c15.076,21.845,5.764,55.876-18.387,66.523
            c-27.61,12.172-58.962-16.947-56.383-45.005
            c1.266-13.779,8.163-35.95,26.136-27.478
            C155.46,191.738,159.715,193.485,164.836,193.136
            z'
          />
          <path
            className='l-cherry'
            fill='#ED6E46'
            stroke='#ED6E46'
            strokeWidth='12'
            d='M55.99,176.859
            c1.736,0.273,3.626,0.328,5.763,0.135
            c8.914-0.809,22.207-2.108,26.778,9.329
            c9.851,24.647-6.784,55.761-32.696,60.78
            c-29.623,5.739-53.728-29.614-44.985-56.399
            c4.294-13.154,15.94-33.241,31.584-20.99
            C47.158,173.415,50.919,176.062,55.99,176.859
            z'
          />
        </g>
        <text x='250' y='50'>
          <tspan x='350' y='50'>
            &lt;g&gt;
          </tspan>
          <tspan x='380' y='70'>
            &lt;path
          </tspan>
          <tspan x='410' y='90'>
            className=&apos;stems&apos;
          </tspan>
          <tspan x='410' y='110'>
            fill=&apos;none&apos;
          </tspan>
          <tspan x='410' y='130'>
            stroke=&apos;#7AA20D&apos;
          </tspan>
          <tspan x='410' y='150'>
            strokeWidth=&apos;8&apos;
          </tspan>
          <tspan x='410' y='170'>
            strokeLinecap=&apos;round&apos;
          </tspan>
          <tspan x='410' y='190'>
            strokeLinejoin=&apos;round&apos;
          </tspan>
          <tspan x='410' y='210'>
            d=&apos;M54.817,169.848
          </tspan>
          <tspan x='440' y='230'>
            c0,0,77.943-73.477,82.528-104.043
          </tspan>
          <tspan x='440' y='250'>
            c4.585-30.566,46.364,91.186,27.512,121.498&apos;
          </tspan>
          <tspan x='380' y='270'>
            /&gt;
          </tspan>
          <tspan x='410' y='290'>
            &lt;path
          </tspan>
          <tspan x='410' y='310'>
            className=&apos;leaf&apos;
          </tspan>
          <tspan x='410' y='330'>
            fill=&apos;#7AA20D&apos;
          </tspan>
          <tspan x='410' y='350'>
            stroke=&apos;#7AA20D&apos;
          </tspan>
          <tspan x='410' y='370'>
            strokeWidth=&apos;4&apos;
          </tspan>
          <tspan x='410' y='390'>
            strokeLinecap=&apos;round&apos;
          </tspan>
          <tspan x='410' y='410'>
            strokeLinejoin=&apos;round&apos;
          </tspan>
          <tspan x='410' y='430'>
            d=&apos;M134.747,62.926
          </tspan>
          <tspan x='440' y='450'>
            c-1.342-6.078,0.404-12.924,5.762-19.681
          </tspan>
          <tspan x='440' y='470'>
            c11.179-14.098,23.582-17.539,40.795-17.846
          </tspan>
          <tspan x='440' y='490'>
            c0.007,0,22.115-0.396,26.714-20.031
          </tspan>
          <tspan x='440' y='510'>
            c-2.859,12.205-5.58,24.168-9.774,36.045
          </tspan>
          <tspan x='440' y='530'>
            c-6.817,19.301-22.399,48.527-47.631,38.028
          </tspan>
          <tspan x='440' y='550'>
            C141.823,75.784,136.277,69.855,134.747,62.926
          </tspan>
          <tspan x='440' y='570'>
            z&apos;
          </tspan>
          <tspan x='380' y='590'>
            /&gt;
          </tspan>
          <tspan x='350' y='610'>
            &lt;/g&gt;
          </tspan>
        </text>
      </svg>
    );
  };
}
