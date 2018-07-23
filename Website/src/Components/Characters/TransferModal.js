import React, { Fragment } from 'react';
import { NavLink }  from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class TransferModal extends React.Component {

  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Transfer Character</ModalHeader>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Name: <span className="text-muted float-right"> SomeAccountName</span>
          </li>
          <li className="list-group-item">
            Realm: <span className="text-muted float-right"> Some Realm</span>
          </li>
        </ul>
        <ModalBody>
          <h6 className="text-warning">
            This may take up to 3 minutes to take effect. You should log out of your game and log back in.
          </h6>

          <div className="form-group">
            <label>New Realm</label>
            <select className="form-control">
              <option>Realmn 001</option>
              <option>Realmn 002</option>
              <option>Realmn 003</option>
              <option>Realmn 004</option>
              <option>Realmn 005</option>
              <option>Realmn 006</option>
            </select>
          </div>
          
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>{' '}
          <Button color="success" onClick={this.props.toggle}>Transfer</Button>
        </ModalFooter>
      </Modal>
    );
  }
}
