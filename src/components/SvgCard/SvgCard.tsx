import React from 'react';
import {Card, InputGroup, FormControl, CardGroup} from 'react-bootstrap';
import {figure} from '../../resources/objects';

type cardProps = {
  header: string;
  svg: figure;
};

export default class SvgCard extends React.Component<cardProps> {
  state = {
    svg: this.props.svg,
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: string): void => {
    if (e && e.target) {
      const newSvg = this.state.svg;
      (this.state.svg as any)[key] = e.target.value;
      this.setState({svg: newSvg});
    }
  };

  getHtml = (): string => {
    let html = '';
    let tag = '';
    Object.keys(this.state.svg).map((key: string) => {
      if (key === 'tag') {
        tag = (this.state.svg as any)[key];
      } else {
        const value = (this.state.svg as any)[key];
        if (value) {
          const prop = key.replace(/([A-Z])/g, '-$1').toLowerCase();
          html = ` ${html} ${prop}=${value}`;
        }
      }
    });
    html = `<${tag} ${html}></${tag}>`;
    return html;
  };

  render = (): JSX.Element => {
    return (
      <CardGroup>
        <Card style={{width: '18rem'}}>
          <Card.Header>{this.props.header}</Card.Header>
          <Card.Body style={{padding: '0rem'}}>
            <svg width='18rem' height='9rem'>
              {React.createElement(this.props.svg.tag, this.props.svg)}
            </svg>
          </Card.Body>
          <Card.Footer className='text-muted overflow-auto' style={{height: '5rem', padding: '0rem'}}>
            <code>{this.getHtml()}</code>
          </Card.Footer>
        </Card>
        <Card bg='light' className='overflow-auto' style={{padding: '1rem', height: '18rem'}}>
          {Object.keys(this.state.svg).map(key => (
            <InputGroup className='mb-2'>
              <InputGroup.Prepend>
                <InputGroup.Text>{key}</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                disabled={key === 'tag'}
                value={(this.state.svg as any)[key]}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  this.handleChange(e, key);
                }}
              />
            </InputGroup>
          ))}
        </Card>
      </CardGroup>
    );
  };
}
