import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import combineReducers from './reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(combineReducers, applyMiddleware(thunk, logger));

const history = createBrowserHistory();

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
