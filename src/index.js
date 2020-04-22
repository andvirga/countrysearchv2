import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './components/App';
import configureStore from './redux/configureStore';
import './styles/index.css';
// import * as serviceWorker from '../serviceWorker';
const initialState = {
  countryReducer: {
    countries: [],
    filter: {},
  }
};

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
