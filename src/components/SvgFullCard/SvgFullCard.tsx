import React from 'react';
import {Card, InputGroup, FormControl, CardGroup} from 'react-bootstrap';
import {shape, animation, filter} from '../../resources/objects';

type cardProps = {
  header: string;
  svg: shape;
};

export default class SvgFullCard extends React.Component<cardProps> {
  state = {
    svg: this.props.svg,
  };

  docURL = 'https://developer.mozilla.org/en-US/docs/Web/SVG';

  handleChangeSvg = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof shape
  ): void => {
    if (e && e.target) {
      const newSvg: shape = this.state.svg;
      (newSvg as any)[key] = e.target.value;
      this.setState({svg: newSvg});
    }
  };

  handleChangeAnimation = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    key: keyof animation
  ): void => {
    if (e && e.target) {
      const newAnimation = Object.assign({}, this.state.svg.animations[index]);
      newAnimation[key] = e.target.value;
      const newSvg = this.state.svg;
      newSvg.animations[index] = newAnimation;
      this.setState({svg: newSvg});
    }
  };

  getHtmlCode = (
    defaultHtmlElement: shape | animation | filter | null = null
  ): string => {
    const htmlElement: shape | animation | filter =
      defaultHtmlElement || this.state.svg;
    let props = '';
    let tag = '';
    let content = '';
    let filter = '';
    const animations: string[] = [];
    Object.keys(htmlElement).map((key: string) => {
      if (key === 'tag') {
        tag = htmlElement.tag;
      } else if (key === 'text') {
        content = (htmlElement as any)[key];
      } else if (key === 'animations') {
        (htmlElement as shape).animations.forEach((animation: animation) => {
          if (animation.attributeName) {
            animations.push(this.getHtmlCode(animation));
          }
        });
      } else if (key === 'filters') {
        const tmpFilter = (htmlElement as shape).filters[0];
        if (tmpFilter) {
          filter = `<filter id=${tmpFilter.id}>${this.getHtmlCode(
            tmpFilter
          )}</filter>`;
        }
      } else if (key === 'id') {
      } else {
        const value = (htmlElement as any)[key];
        if (value) {
          const prop = key.replace(/([A-Z])/g, '-$1').toLowerCase();
          props = ` ${props} ${prop}="${value}"`;
        }
      }
      return '';
    });
    const animationString = animations.reduce(
      (acc, value) => `${acc} ${value}`,
      ''
    );
    return `${filter} <${tag} ${props}>${animationString}${content}</${tag}>`;
  };

  getDocLinkSvg = (name: string): string => {
    let docLink = '';
    if (name === 'tag') {
      docLink = `${this.docURL}/Element/${this.state.svg.tag}`;
    } else {
      const formattedName = name.replace(/([A-Z])/g, '-$1').toLowerCase();
      docLink = `${this.docURL}/Attribute/${formattedName}`;
    }
    return docLink;
  };

  getDocLinkAnimation = (name: string, index: number): string => {
    let docLink = '';
    if (name === 'tag') {
      docLink = `${this.docURL}/Element/${this.state.svg.animations[index].tag}`;
    } else {
      docLink = `${this.docURL}/Attribute/${name}`;
    }
    return docLink;
  };

  render = (): JSX.Element => {
    return (
      <CardGroup style={{width: '60rem', padding: '1rem'}}>
        <Card style={{width: '18rem'}}>
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
                ),
                React.createElement(
                  this.props.svg.animations[1].tag,
                  this.props.svg.animations[1]
                ),
                React.createElement(
                  this.props.svg.animations[2].tag,
                  this.props.svg.animations[2]
                ),
                React.createElement(
                  this.props.svg.animations[3].tag,
                  this.props.svg.animations[3]
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
        <Card
          bg='light'
          className='overflow-auto'
          style={{padding: '1rem', height: '18rem'}}>
          {Object.keys(this.state.svg).map((key, index) => {
            return (
              key !== 'animations' && (
                <InputGroup className='mb-2' key={index}>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <a
                        href={this.getDocLinkSvg(key)}
                        target='_blank'
                        rel='noopener noreferrer'>
                        {key}
                      </a>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    disabled={key === 'tag'}
                    value={(this.state.svg as any)[key]}
                    onChange={(
                      e: React.ChangeEvent<HTMLInputElement>
                    ): void => {
                      this.handleChangeSvg(e, key as keyof shape);
                    }}
                  />
                </InputGroup>
              )
            );
          })}
        </Card>
        <Card
          bg='light'
          className='overflow-auto'
          style={{padding: '1rem', height: '18rem'}}>
          {this.state.svg.animations.map((_, index) =>
            Object.keys(this.state.svg.animations[index]).map(key => (
              <InputGroup className='mb-2' key={`${index}-${key}`}>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <a
                      href={this.getDocLinkAnimation(key, index)}
                      target='_blank'
                      rel='noopener noreferrer'>
                      {key}
                    </a>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  disabled={key === 'tag'}
                  value={(this.state.svg.animations[index] as any)[key]}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                    this.handleChangeAnimation(
                      e,
                      index,
                      key as keyof animation
                    );
                  }}
                />
              </InputGroup>
            ))
          )}
        </Card>
      </CardGroup>
    );
  };
}
