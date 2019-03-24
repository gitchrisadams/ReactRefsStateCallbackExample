import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux:
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from './redux/store';

import About from './components/About';

const store = createStore(reducer);

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/about" component={About} />
      </div>
    </Router>
    </Provider>
);

ReactDOM.render( <Root store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
