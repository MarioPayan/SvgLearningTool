import React from 'react';
import './Documentation.scss';

export default class Documentation extends React.Component {
  render = (): JSX.Element => {
    return (
      <svg width='1100px' height='680px'>
        <text x='65' y='75' className='svg-title'>
          What is SVG?
        </text>
        <text x='30' y='130'>
          Scalable Vector Graphics (SVG) is an XML-based markup
        </text>
        <text x='30' y='150'>
          language for describing two dimensional based vector graphics.
        </text>
        <text x='30' y='170' className='svg-bold'>
          SVG is essentially to graphics what HTML is to text.
        </text>
        <text x='90' y='210' transform='rotate(350 90 210)'>
          <a
            href='https://developer.mozilla.org/en-US/docs/Web/SVG'
            target='_blank'
            className='svg-link'
            rel='noopener noreferrer'>
            Source
          </a>
        </text>
        <text x='150' y='240' transform='rotate(350 150 240)'>
          <a
            href='https://developer.mozilla.org/en-US/docs/Web/SVG'
            target='_blank'
            className='svg-link'
            rel='noopener noreferrer'>
            Getting Started Tutorial
          </a>
        </text>
        <text x='30' y='270'>
          SVG is a text-based open Web standard. It is explicitly
        </text>
        <text x='30' y='290'>
          designed to work with other web standards such as CSS, DOM, and SMIL.
        </text>
        <text x='90' y='340' transform='rotate(350 90 330)'>
          <a
            href='http://www1.plurib.us/svg_gallery/'
            target='_blank'
            className='svg-link'
            rel='noopener noreferrer'>
            SVG Art Gallery
          </a>
        </text>
        <text x='180' y='370' transform='rotate(350 150 330)'>
          <a
            href='http://starkravingfinkle.org/projects/demo/svg-bubblemenu-in-html.xml'
            target='_blank'
            className='svg-link'
            rel='noopener noreferrer'>
            SVG Bubble Menu Example
          </a>
        </text>
        <text x='30' y='390'>
          SVG images and their related behaviors are defined in XML
        </text>
        <text x='30' y='410'>
          text files which means they can be searched, indexed,
        </text>
        <text x='30' y='430'>
          scripted and compressed. Additionally this means they can be
        </text>
        <text x='30' y='450'>
          created and edited with any text editor and with drawing software.{' '}
        </text>
        <text x='135' y='485' className='svg-note'>
          As you probably already noticed
        </text>
        <text x='135' y='500' className='svg-note'>
          all this page section was made with SVG
        </text>
        <text x='135' y='515' className='svg-note'>
          feel free to inspect the elements
        </text>
        <text x='30' y='550'>
          SVG is an open standard developed by the World Wide Web
        </text>
        <text x='30' y='570'>
          Consortium (W3C) since 1999.
        </text>
        <image
          x='600'
          y='50'
          href='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/SVG_logo.svg/800px-SVG_logo.svg.png'
          height='350'
          width='350'
        />
        <image
          x='700'
          y='450'
          href='https://d1.awsstatic.com/logos/customers/Alert-Logic-logo.77c92024a8f644a898189b5fe47bf846f41c5a21.png'
          height='150'
          width='150'>
          <animateTransform
            attributeName='transform'
            type='rotate'
            from='0 775 525'
            to='360 775 525'
            dur='240s'
            repeatCount='indefinite'
          />
        </image>
      </svg>
    );
  };
}
