import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import { AccountConsumer } from '../../Contexts/AccountContext';

const Login = ({ props }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return  (
    <AccountConsumer>
        {({ isLoggedIn, login, errors }) => (
          <div>
            <h4 style={{ marginBottom: 20, paddingBottom: 10, borderBottom: '1px solid #777' }}>
              Login to WoWSandbox
            </h4>
            {
              errors && errors.map((err, i) => {
                return <div key={i} className="alert alert-warning">{err}</div>
              })
            }
            <div className="form-group">
              <label>Account Name</label>
              <input className="form-control" placeholder="Enter account name" onChange={(e)=>setUsername(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="form-group" style={{ marginTop: 40 }}>
              <button className="btn btn-primary" 
                onClick={() => {
                  login(username, password, () => {
                    window.location.href = '/account';
                  });
                }}>
                Sign In
              </button> 
            </div>
          </div>
        )}
    </AccountConsumer>
  );
};

export default withRouter(Login);
