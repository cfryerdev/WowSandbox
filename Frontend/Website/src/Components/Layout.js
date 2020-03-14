import React, { Fragment } from 'react';

import Navigation from './Navigation';

export default ({ children }) => 
<Fragment >
	<Navigation />
  <div className="text-center">
    <img alt="" src="https://i.imgur.com/hetEZqu.png" 
      style={{ maxWidth: 250, paddingTop: 20, paddingBottom: 20 }} />
  </div>
	<div className="container">
		{children}
	</div>
  <footer className="text-center text-muted" style={{ padding: 20 }}>
    Copyright 2018 - cfryerdev
  </footer>
</Fragment>