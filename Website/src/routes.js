import React from 'react';
import { Switch, Route } from 'react-router';

import NotFound from './Components/NotFound';
import NoAccess from './Components/NoAccess';

import Home from './Components/Home';
import Register from './Components/Register';
import Status from './Components/Status';
import Account from './Components/Account';
import Characters from './Components/Characters';
import CharacterEdit from './Components/Characters/Edit';
import Administration from './Components/Administration';
import Login from './Components/Login';

const Routes = () => (
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/login' exact component={Login} />
		<Route path='/register' exact component={Register} />
		<Route path='/status' exact component={Status} />

		<Route path='/account' exact component={Account} />
		<Route path='/account/characters' exact component={Characters} />
		<Route path='/account/characters/:id' exact component={CharacterEdit} />

		<Route path='/administration' exact component={Administration} />

    	{/* ELSE */}
		<Route path='/noaccess' exact component={NoAccess} />

		{/* ELSE */}
		<Route path='*' exact component={NotFound} />
	</Switch>
)

export default Routes;