import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {
  SvgFullCard,
  SvgSingleCard,
  NavMenu,
  Introduction,
} from './components/index';
import {generalExamples, animationExamples} from './resources/exampleList';
import './App.scss';

class App extends React.Component {
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
                <div id='content-wrapper' className='d-flex flex-column'>
                  <div id='content'>
                    <div className='row'>
                      {generalExamples.map((example, index) => (
                        <div className='col' key={index}>
                          <SvgFullCard
                            header={example.header}
                            svg={example.svg}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Route>
              <Route path='/shapes'>
                <div id='content-wrapper' className='d-flex flex-column'>
                  <div id='content'>
                    <div className='row'>
                      {generalExamples.map((example, index) => (
                        <div className='col' key={index}>
                          <SvgSingleCard
                            header={example.header}
                            svg={example.svg}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Route>
              <Route path='/animations'>
                <div id='content-wrapper' className='d-flex flex-column'>
                  <div id='content'>
                    <div className='row'>
                      {animationExamples.map((example, index) => (
                        <div className='col' key={index}>
                          <SvgSingleCard
                            header={example.header}
                            svg={example.svg}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Route>
              <Route path='/filters'>Falta: filter (customize)</Route>
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
