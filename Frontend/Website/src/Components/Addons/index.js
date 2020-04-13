import React, { Fragment } from 'react';

import files from "./files.json";

export default class Timeline extends React.Component {
  
	constructor(props, state) {
		super(props, state);
		this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div class="alert alert-info">
          <strong>Extract Location:</strong> [~\World of Warcraft\Interface\AddOns\]
        </div>
        <div className="list-group">
        {
          files.map((item, i) => {
              return <a href={`files\\${item.file}`} 
                          className="list-group-item list-group-item-action flex-column align-items-start bg-light">
                        <div className="d-flex w-100  justify-content-between">
                          <h5 className="mb-1">📦 {item.name}</h5>
                          { item.isRecommended && <small>⭐</small> }
                        </div>
                        <small>{item.description}</small>
                     </a>
          })
        }
        </div>
      </Fragment>
    );
  }

}