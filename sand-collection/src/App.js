import React from 'react';
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import SandCollection from './Components/SandCollection';
import { Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const App = () => {
	return (
		<div className='body-app'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Marj's Sand Collection</title>
				<link rel='icon' type='image/png' href='favicon.png' sizes='16x16' />
			</Helmet>
			<Nav />
			<main>
				<Route path='/' exact render={() => <Redirect to='/home' />} />
				<Route path='/home' component={Home} />
				<Route path='/collection' component={SandCollection} />
			</main>
		</div>
	);
};

export default App;
