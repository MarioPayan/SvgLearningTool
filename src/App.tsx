import React from 'react';
import SvgCard from './components/index';
import examples from './resources/exampleList';
import './App.css';

class App extends React.Component {
  render(): JSX.Element {
    return (
      <div className='App'>
        <div className='row'>
          {examples.map(example => (
            <div className='col'>
              <SvgCard header={example.header} svg={example.svg} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
