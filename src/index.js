import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import 'normalize.css';
import './main.less';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Routes/>
        </Router>
      </div>);
  }
}


const mountNode = document.getElementById('app');
ReactDOM.render(<App/>, mountNode);
