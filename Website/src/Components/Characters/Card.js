import React, { Fragment } from 'react';
import { NavLink }  from 'react-router-dom';

import TransferModal from './TransferModal';

const imgIcon = {
  maxWidth: 35,
  paddingRight: 10
}

const cardRow = {
  marginBottom: 20
}

export default class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Fragment>
        <div className="card" style={cardRow}>
          <div className="card-body">
            <h4 className="card-title">
              <img src="https://imgur.com/KStUHKg.png" alt="" style={imgIcon} /> 
              {this.props.name}
            </h4>
            <p className="card-text text-muted">
              Level {this.props.level} 
              &nbsp; - {this.props.race} 
              &nbsp; ({this.props.gender}) {this.props.class}
              <span className="card-subtitle text-muted">{this.props.realm}</span>
            </p>
            <NavLink to={"/account/characters/" + this.props.id } className="card-link">Modify</NavLink>
            <button onClick={this.toggle} className="btn btn-link card-link">Transfer</button>
            <a href="" className="card-link text-danger float-right">Remove</a>
          </div>
        </div>
        <TransferModal isOpen={this.state.modal} toggle={this.toggle} />
      </Fragment>
    );
  }
}
