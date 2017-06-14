import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './modules'


/* eslint-disable */
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
/* eslint-enable */

const store = createStore(reducers, enhancer)


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
