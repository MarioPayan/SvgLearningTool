import React from 'react';
import './WhySvg.scss';

export default class WhySvg extends React.Component {
  render = (): JSX.Element => {
    return (
      <svg width='1100px' height='680px'>
        <text x='0' y='0'>
          <tspan x='700' y='75' className='svg-title'>
            Why SVG?
          </tspan>
          <tspan x='50' y='40' className='svg-subtitle'>
            Scalability
          </tspan>
          <tspan x='50' y='70'>
            One the major benefits of SVG is that they are resolution
            independent.
          </tspan>
          <tspan x='50' y='90'>
            This means that unlike file types such as JPG or PNG, SVGs retain
            the same
          </tspan>
          <tspan x='50' y='110'>
            quality no matter what screen resolution or size they are being at.
          </tspan>
          <tspan x='150' y='170' className='svg-subtitle'>
            File size
          </tspan>
          <tspan x='150' y='200'>
            Using SVGs can result in smaller file sizes than other file types
            when optimized properly.
          </tspan>
          <tspan x='150' y='220'>
            This is helpful when dealing with higher resolution screens, since
            SVGs don’t need to be
          </tspan>
          <tspan x='150' y='240'>
            created at larger sizes to accommodate the difference like raster
            images do.
          </tspan>
          <tspan x='100' y='300' className='svg-subtitle'>
            Editing capabilities
          </tspan>
          <tspan x='100' y='330'>
            SVG files are unique in that they can be edited in graphic editing
            programs (such as Illustrator or Sketch)
          </tspan>
          <tspan x='100' y='350'>
            like other images, but also in a text editor where the markup can be
            adjusted directly.
          </tspan>
          <tspan x='200' y='410' className='svg-subtitle'>
            Performance
          </tspan>
          <tspan x='200' y='440'>
            Using inline SVG is beneficial to the performance of a website
            because it eliminates
          </tspan>
          <tspan x='200' y='460'>
            the HTTP request needs to load in an image file. Since no file needs
            to download,
          </tspan>
          <tspan x='200' y='480'>
            this results in smaller loading times for a page.
          </tspan>
          <tspan x='150' y='540' className='svg-subtitle'>
            Style control
          </tspan>
          <tspan x='150' y='570'>
            Another benefit of using the inline SVG method is that it allows you
            to control
          </tspan>
          <tspan x='150' y='590'>
            the styles within your image. You can control properties such as
            fill color,
          </tspan>
          <tspan x='150' y='610'>
            stroke color, sizing, and more through CSS
          </tspan>
        </text>
      </svg>
    );
  };
}
