import React from 'react';
import { Switch, Route } from 'react-router';

import NotFound from './Components/NotFound';

import Home from './Components/Home';
import Register from './Components/Register';
import Status from './Components/Status';
import Account from './Components/Account';
import Login from './Components/Login';

const Routes = () => (
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/login' exact component={Login} />
		<Route path='/register' exact component={Register} />
		<Route path='/status' exact component={Status} />
		<Route path='/account' exact component={Account} />

		{/* ELSE */}
		<Route path='*' exact component={NotFound} />
	</Switch>
)

export default Routes;