import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './Hello';

import 'normalize.css';
import './main.less';

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
      </div>);
  }
}


const mountNode = document.getElementById('app');
ReactDOM.render(<App/>, mountNode);
