import React from 'react'
import Navbarr from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { publicRoutes } from './Routes'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import NotFound from './pages/NotFound'

export default function App() {
	return (
		<div className='App'>
			<Router>
				<Navbarr />
				<Switch>
					{publicRoutes.map((route, index) => (
						<Route exact={route.exact} path={route.path} component={route.component} key={index} />
					))}
					<Route exact component={NotFound} key='404' />
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}
