import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import './main.less';

export default class App extends React.Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <Routes/>
          </BrowserRouter>
        </div>);
  }
}
