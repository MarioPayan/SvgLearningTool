import React from 'react';
import NavMenu from './components/NavMenu/NavMenu';
import SvgCard from './components/index';
import examples from './resources/exampleList';
import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends React.Component {
  render(): JSX.Element {
    return (
      <div className='App'>
        <div id='wrapper'>
          <BrowserRouter>
            <NavMenu />
            <Switch>
              <Route path='/home'>Falta: Documentacion</Route>
              <Route path='/shapes'>
                <div id='content-wrapper' className='d-flex flex-column'>
                  <div id='content'>
                    <div className='row'>
                      {examples.map((example, index) => (
                        <div className='col' key={index}>
                          <SvgCard header={example.header} svg={example.svg} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                Faltan: image
              </Route>
              <Route path='/animations'>
                Falta: animate (customize) animateMotion (customize) animateTransform (customize)
              </Route>
              <Route path='/filters'>Falta: filter (customize)</Route>
              <Route path='/path'>Falta: path (customize) textPath (customize)</Route>
              <Route path='/others'>
                Faltan: script switch use title style defs -> pattern defs -> linearGradient defs -> radialGradient
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
