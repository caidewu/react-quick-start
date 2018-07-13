import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Hello from './pages/Hello';
import About from './pages/About';
import NotFound from './pages/NotFound';

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
  {
    component: NotFound,
  }
];

export default () => {
  return (<div>
    <Link to="/">index</Link> | <Link to="/about">about</Link>
    <Switch>
    {routes.map((route, index) => (
      <Route key={index} path={route.path} exact={route.exact} component={route.component} />
    ))}
    </Switch>
  </div>);
}

