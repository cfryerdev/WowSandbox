import React, { Fragment } from 'react';
import { toast, ToastContainer } from "react-toastify";
import Navigation from './Navigation';

export default ({ children }) => 
<Fragment >
  <ToastContainer autoClose={3000} position="top-right"/>
	<Navigation />
  <div className="text-center">
    <img src="https://imgur.com/H5CXLIb.png" alt=""
      style={{ maxHeight: 160, paddingTop: 20, paddingBottom: 20 }} />
  </div>
	<div className="container">
		{children}
	</div>
  <footer className="text-center text-muted" style={{ padding: 20 }}>
    Copyright 2018 - WowSandbox
  </footer>
</Fragment>