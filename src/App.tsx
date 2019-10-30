import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {
  SvgFullCard,
  SvgSingleCard,
  NavMenu,
  WhatIsSvg,
  WhySvg,
  Path,
  PathExample,
  Others,
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
              <Route path='/why-svg'>
                <WhySvg />
              </Route>
              <Route path='/what-is-svg'>
                <WhatIsSvg />
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
                <Path />
              </Route>
              <Route path='/path-example'>
                <PathExample />
              </Route>
              <Route path='/others'>
                <Others />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
