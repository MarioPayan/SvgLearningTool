import React from 'react';
import './Others.scss';

export default class Others extends React.Component {
  render = (): JSX.Element => {
    return (
      <svg width='1100px' height='680px'>
        <text x='0' y='0'>
          <tspan x='65' y='75' className='svg-title'>
            Helpful things
          </tspan>
          <tspan x='30' y='130'>
            &lt;
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/SVG/Element/script'
              target='_blank'
              rel='noopener noreferrer'>
              script
            </a>
            &gt;
          </tspan>
          <tspan x='70' y='150'>
            You can script SVG elements
          </tspan>
          <tspan x='30' y='170'>
            &lt;/script&gt;
          </tspan>
          <tspan x='330' y='200'>
            &lt;
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use'
              target='_blank'
              rel='noopener noreferrer'>
              use
            </a>
            &nbsp;href=&apos;#referenceToMyElement&apos; &gt;
          </tspan>
          <tspan x='370' y='220'>
            You can duplicate an element and use it in other places
          </tspan>
          <tspan x='330' y='240'>
            &lt;/use&gt;
          </tspan>
          <tspan x='30' y='270'>
            &lt;
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/SVG/Element/title'
              target='_blank'
              rel='noopener noreferrer'>
              title
            </a>
            &gt;
          </tspan>
          <tspan x='70' y='290'>
            You can put titles to your svg (as an alt for a img)
          </tspan>
          <tspan x='30' y='310'>
            &lt;/title&gt;
          </tspan>
          <tspan x='330' y='340'>
            &lt;
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/SVG/Element/style'
              target='_blank'
              rel='noopener noreferrer'>
              style
            </a>
            &gt;
          </tspan>
          <tspan x='370' y='360'>
            You can use styles on your SVGs
          </tspan>
          <tspan x='330' y='380'>
            &lt;/style&gt;
          </tspan>
          <tspan x='30' y='410'>
            &lt;
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs'
              target='_blank'
              rel='noopener noreferrer'>
              defs
            </a>
            &gt;
          </tspan>
          <tspan x='70' y='430'>
            You define SVG to use them in the future
          </tspan>
          <tspan x='30' y='450'>
            &lt;/defs&gt;
          </tspan>
          <tspan x='330' y='480'>
            &lt;
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/SVG/Element/switch'
              target='_blank'
              rel='noopener noreferrer'>
              switch
            </a>
            &gt;
          </tspan>
          <tspan x='370' y='500'>
            You can use switch to render or not SVGs after a param evaluation
          </tspan>
          <tspan x='330' y='520'>
            &lt;/switch&gt;
          </tspan>
          <tspan x='30' y='550'>
            &lt;
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g'
              target='_blank'
              rel='noopener noreferrer'>
              g
            </a>
            &gt;
          </tspan>
          <tspan x='70' y='570'>
            You can use g as a container for several SVG elements
          </tspan>
          <tspan x='30' y='590'>
            &lt;/g&gt;
          </tspan>
        </text>
      </svg>
    );
  };
}
