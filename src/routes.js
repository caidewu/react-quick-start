import React from 'react';
import { Route, Link } from 'react-router-dom';
import Hello from './Hello';
import About from './About';

const routes = [
  {
    path: '/',
    exact: true,
    component: Hello,
  },
  {
    path: '/about',
    component: About,
  },
];

export default () => {
  return (<div>
    <Link to="/">index</Link> | <Link to="/about">about</Link>
    {routes.map((route, index) => (
      <Route key={index} path={route.path} exact={route.exact} component={route.component} />
    ))}
  </div>);
}

