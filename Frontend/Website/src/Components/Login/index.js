import React, { useState } from 'react';
import { AccountConsumer } from '../../Contexts/AccountContext';

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  handleLogin = () => {

  }

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
            <div class="form-group">
              <label>Account Name</label>
              <input className="form-control" placeholder="Enter account name" onChange={setUsername} />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" onChange={this.setPassword} />
            </div>
            <div class="form-group" style={{ marginTop: 40 }}>
              <button onClick={handleLogin} className="btn btn-primary">
                Sign In
              </button> 
            </div>
          </div>
        )}
    </AccountConsumer>
  )
}