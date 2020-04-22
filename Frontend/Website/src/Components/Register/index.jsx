import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom'
import { AccountConsumer } from '../../Contexts/AccountContext';

const Register = ({ props }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return  (
    <AccountConsumer>
        {({ isLoggedIn, register, errors }) => (
          <Fragment>
          <h4 style={{ marginBottom: 20, paddingBottom: 10, borderBottom: '1px solid #777' }}>
            Register and gain access to WoWSandbox
          </h4>
          {
              errors && errors.map((err, i) => {
                return <div key={i} className="alert alert-warning">{err}</div>
              })
            }
          <div className="form-group">
              <label>Email address</label>
              <input className="form-control" placeholder="Enter email address" onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Account Name</label>
              <input className="form-control" placeholder="Enter account name" onChange={(e)=>setUsername(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password"
                 onChange={(e)=>setPassword(e.target.value)} />
            </div>

            <div className="form-group" style={{ marginTop: 40 }}>
              <button className="btn btn-primary" 
                onClick={() => {
                  register(email, username, password, () => {
                    window.location.href = '/account';
                  });
                }}>
                 Register
              </button> 
            </div>

            <div className="alert alert-info">
              <strong>Reminder:</strong> Set your realmlist to 127.0.0.1<br />
              <strong>Location:</strong> [~\World of Warcraft\Data\enUS\realmlist.wtf]
            </div>
        </Fragment>
        )}
    </AccountConsumer>
  );
};

export default withRouter(Register);
