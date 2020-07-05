import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; // Redux store
import { reducer } from './reducers/reducer';
import { Provider } from 'react-redux'; // Provider wrapping <App /> below. 
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer); // Calling createStore, line 3 above. 
// console.log(store.getState())

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	rootElement
);
