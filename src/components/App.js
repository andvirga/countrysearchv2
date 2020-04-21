import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../common/Header';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ToDoListPage from './ToDoListPage';
import PageNotFound from '../common/PageNotFound';
import CountryDetail from './CountryDetail';
import '../styles/App.css';

export const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/todo" component={ToDoListPage} />
      <Route path="/detail" component={CountryDetail} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default App;
