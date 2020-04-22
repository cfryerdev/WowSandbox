import React, { Fragment } from 'react';
import logo from "../Content/Images/logo.png";

import Navigation from './Navigation';

export default ({ children }) => 
<Fragment >
	<Navigation />
  <div className="text-center">
    <img alt="" src={logo} 
      style={{ maxHeight: 180, paddingTop: 20, paddingBottom: 20 }} />
  </div>
	<div className="container">
		{children}
	</div>
  <footer className="text-center text-muted" style={{ padding: 20 }}>
    Copyright 2020 - cfryerdev
  </footer>
</Fragment>