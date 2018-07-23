import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import Routes from './routes';

import AuthorizationInterceptor from './Interceptors/Authorization';
import HttpInterceptor from './Interceptors/Http';

import 'react-toastify/dist/ReactToastify.css';

import './Content/Styles/bootstrap.css';
import './Content/Styles/bootstrap.site.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
    AuthorizationInterceptor.init();
    HttpInterceptor.init();
  }

  componentWillUnmount() {
    AuthorizationInterceptor.unregister();
    HttpInterceptor.unregister();
  }

  render() {
    return (
				<BrowserRouter>
					<Layout>
						<Routes />
					</Layout>
				</BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
