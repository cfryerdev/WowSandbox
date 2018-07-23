import React, { Fragment } from 'react';
import FontAwesome from 'react-fontawesome';

const blogCard = {
  marginBottom: 20
}

export default () => 
<Fragment>
  <div className="card" style={blogCard}>
    <div className="card-body">
      <h4 className="card-title"><FontAwesome name='comments' style={{ paddingRight: 8 }}/> Project Board Created</h4>
      <h6 className="card-subtitle mb-2 text-muted">June 30th 2018</h6>
      <p className="card-text">
        I created the project's task tracking board. This is where I am tracking my ideas and things I 
        would like to tackle. This is in now way a promise to build. I want to keep this project fun.
      </p>
      <a target="_blank" href="https://github.com/cfryerdev/wuncraft/projects/1" className="card-link">Visit Board</a>
    </div>
  </div>

  <div className="card" style={blogCard}>
    <div className="card-body">
      <h4 className="card-title"><FontAwesome name='comments' style={{ paddingRight: 8 }}/> Repository Created</h4>
      <h6 className="card-subtitle mb-2 text-muted">June 30th 2018</h6>
      <p className="card-text">
        I stood up the repository that this project will be housed out of. It is currently empty but I
        plan on pushing the first commit once the react website and the nodejs service are working. I 
        havent decided what functionality will be in that first push...
      </p>
      <a target="_blank" href="https://github.com/cfryerdev/wuncraft" className="card-link">Visit GitHub</a>
    </div>
  </div>

  <div className="card" style={blogCard}>
    <div className="card-body">
      <h4 className="card-title"><FontAwesome name='comments' style={{ paddingRight: 8 }}/> Project Created...</h4>
      <h6 className="card-subtitle mb-2 text-muted">June 30th 2018</h6>
      <p className="card-text">
        Starting a new fun project after I saw some dated websites when looking at WoW private servers.
        I am about 3 hours in, I plan on replacing the entire stack which appears to be a ton of php 
        (which talks directly to the database, yuck) ... I am using React 16.4 / Node 8 / Bootstrap 4 / Font Awesome 5.
      </p>
    </div>
  </div>

</Fragment>