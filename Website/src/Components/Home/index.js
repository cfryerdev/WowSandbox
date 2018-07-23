import React, { Fragment } from 'react';
import Blog from './Blog';

export default () => 
<Fragment>
  <h4 style={{ marginBottom: 20, paddingBottom: 10, borderBottom: '1px solid #777' }}>
    Welcome to WowSandbox
    <div className="text-muted" style={{ fontSize: 12 }}>
      The modern World of Warcraft Private Server web host.
    </div>
  </h4>
  <Blog />
</Fragment>