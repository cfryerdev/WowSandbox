import React, { Fragment } from 'react';
import { NavLink }  from 'react-router-dom';
import FetchContainer from '../../Containers/FetchContainer';

export default class Edit extends React.Component {

  render() {
    return (
      <Fragment>

        <NavLink to="/account/characters">Back to Characters</NavLink>
        <br />
        <br />

        <h4>Settings</h4>

        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Enter name" />
        </div>

        <div className="form-group">
          <label>Level</label>
          <input type="number" className="form-control" placeholder="Enter level" />
        </div>

        <div className="form-group">
          <label>Gold</label>
          <input type="number" className="form-control" placeholder="Enter gold amount" />
        </div>

        <br />
        <div className="text-center">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary">Bags</button>
            <button type="button" className="btn btn-secondary">Inventory</button>
            <button type="button" className="btn btn-secondary">Extras</button>
          </div>
        </div>

        <br />
        <br />
        <h4>
          Character Makeup
        </h4>
        
        <div className="form-group">
          <label>Gender</label>
          <select className="form-control">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="form-group">
          <label>Race</label>
          <select className="form-control">
            <option>Human</option>
            <option>Orc</option>
            <option>Dwarf</option>
            <option>Undead</option>
            <option>Night Elf</option>
            <option>Tauren</option>
            <option>Gnome</option>
            <option>Troll</option>
            <option>Draenei</option>
            <option>Blood Elf</option>
            <option>Worgen</option>
            <option>Goblin</option>
            <option>Pandaren</option>
          </select>
        </div>

        <div className="form-group">
          <label>Class</label>
          <select className="form-control">
            <option>Warrior</option>
            <option>Paladin</option>
            <option>Hunter</option>
            <option>Rogue</option>
            <option>Priest</option>
            <option>Death Knight</option>
            <option>Shaman</option>
            <option>Mage</option>
            <option>Warlock</option>
            <option>Monk</option>
            <option>Druid</option>
            <option>Demon Hunter</option>
          </select>
        </div>

        <br />
        <h4>
          Location
          <a href="#" className="float-right" style={{ fontSize: 14 }}>Lookup</a>
        </h4>

        <div className="form-group">
          <label>Latitude</label>
          <input type="number" className="form-control" placeholder="Enter latitude" />
        </div>

        <div className="form-group">
          <label>Longitude</label>
          <input type="number" className="form-control" placeholder="Enter longitude" />
        </div>


        <br />
        <button type="submit" className="btn btn-primary">Update</button>
        <button type="submit" className="btn btn-warning float-right">Clear Talents</button>

      </Fragment>
    );
  }
}
