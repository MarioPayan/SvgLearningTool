import React from 'react';
import {Card} from 'react-bootstrap';
import SvgFullCard from '../SvgFullCard/SvgFullCard';

export default class SvgSingleCard extends SvgFullCard {
  render = (): JSX.Element => {
    return (
      <Card
        style={{
          width: '21rem',
          marginTop: '1rem',
          marginLeft: '1rem',
          marginBottom: '1rem',
        }}>
        <Card.Header>{this.props.header}</Card.Header>
        <Card.Body style={{padding: '0rem'}}>
          <svg width='18rem' height='9rem'>
            {React.createElement(
              this.props.svg.tag,
              this.props.svg,
              this.props.svg.text,
              React.createElement(
                this.props.svg.animations[0].tag,
                this.props.svg.animations[0]
              )
            )}
          </svg>
        </Card.Body>
        <Card.Footer
          className='text-muted overflow-auto'
          style={{height: '5rem', padding: '0rem'}}>
          <code>{this.getHtmlCode()}</code>
        </Card.Footer>
      </Card>
    );
  };
}
