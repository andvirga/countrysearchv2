import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../common/Header';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import PageNotFound from '../common/PageNotFound';
import '../styles/App.css';
import DetailPage from './DetailPage';

export const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/detail/:code" render={(props) => <DetailPage {...props} />} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default App;
