import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { Container } from 'reactstrap'
import store from './redux'

const rootElement = document.getElementById('root')
ReactDOM.render(
	<StrictMode>
		<Provider store={store}>
			<Container>
				<App />
			</Container>
		</Provider>
	</StrictMode>,
	rootElement
)
