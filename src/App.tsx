import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {
  SvgFullCard,
  SvgSingleCard,
  NavMenu,
  Introduction,
} from './components/index';
import {
  generalExamples,
  animationExamples,
  filterExamples,
} from './resources/exampleList';
import './App.scss';

class App extends React.Component {
  bodyContent = (content: JSX.Element[]): JSX.Element => {
    return (
      <div id='content-wrapper' className='d-flex flex-column'>
        <div id='content'>
          <div className='row'>{content}</div>
        </div>
      </div>
    );
  };

  render(): JSX.Element {
    return (
      <div className='App'>
        <div id='wrapper'>
          <BrowserRouter>
            <NavMenu />
            <Switch>
              <Route path='/home'>Under construction</Route>
              <Route path='/introduction'>
                <Introduction />
              </Route>
              <Route path='/playground'>
                {this.bodyContent(
                  generalExamples.map((example, index) => (
                    <div className='col' key={index}>
                      <SvgFullCard header={example.header} svg={example.svg} />
                    </div>
                  ))
                )}
              </Route>
              <Route path='/shapes'>
                {this.bodyContent(
                  generalExamples.map((example, index) => (
                    <div className='col' key={index}>
                      <SvgSingleCard
                        header={example.header}
                        svg={example.svg}
                      />
                    </div>
                  ))
                )}
              </Route>
              <Route path='/animations'>
                {this.bodyContent(
                  animationExamples.map((example, index) => (
                    <div className='col' key={index}>
                      <SvgSingleCard
                        header={example.header}
                        svg={example.svg}
                      />
                    </div>
                  ))
                )}
              </Route>
              <Route path='/filters'>
                {this.bodyContent(
                  filterExamples.map((example, index) => (
                    <div className='col' key={index}>
                      <SvgSingleCard
                        header={example.header}
                        svg={example.svg}
                      />
                    </div>
                  ))
                )}
              </Route>
              <Route path='/path'>
                Falta: path
                (https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths,
                https://www.w3schools.com/graphics/svg_path.asp), textPath
                (customize), g
              </Route>
              <Route path='/others'>
                Faltan: script, switch, use, title, style, defs/pattern,
                defs/linearGradient, defs/radialGradient
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
