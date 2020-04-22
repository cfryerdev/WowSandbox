import React from 'react';
import { withRouter } from 'react-router-dom'
import { AccountConsumer } from '../../Contexts/AccountContext';

const Login = ({ props }) => {

  return  (
    <AccountConsumer>
        {({ logout }) => (
          <div className="text-center text-warning">
           Logging you out now... You will be redirected.
           <span style={{ display: 'none' }}>
             { setTimeout(() => { logout(() => { window.location.href = '/login'; }); }, 3000) }
           </span>
          </div>
        )}
    </AccountConsumer>
  );
};

export default withRouter(Login);
