import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AccountProvider } from "./Contexts/AccountContext";
import Layout from './Components/Layout';

import './Content/bootstrap.css';
import './Content/bootstrap.site.css';

import Home from './Components/Home';
import Register from './Components/Register';
import Status from './Components/Status';
import Account from './Components/Account';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Addons from './Components/Addons';

const NotFound = () => (
	<div className="text-center">
	  Oops what you are looking for, does not exist.
	</div>
  );

class App extends Component {
  render() {
    return (
		<BrowserRouter>
			<AccountProvider>
				<Layout>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/login' exact component={Login} />
						<Route path='/logout' exact component={Logout} />
						<Route path='/register' exact component={Register} />
						<Route path='/status' exact component={Status} />
						<Route path='/account' exact component={Account} />
						<Route path='/addons' exact component={Addons} />
						<Route path='*' exact component={NotFound} />
					</Switch>
				</Layout>
			</AccountProvider>
		</BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
