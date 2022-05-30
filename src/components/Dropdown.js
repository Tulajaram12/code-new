import React from 'react'
// import {Dropdown} from 'react-dropdown';
import 'react-dropdown/style.css';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
 
export default function dropdown() {
  return (   

              <NavDropdown id="dropdown-basic-button" className='dropup' title="Categories">
        <div id='dropdown-menu'>
            <dropdownMenu href="#/action-1" title='Gifts for New joinee'>New Joinee</dropdownMenu>
            <dropdownMenu href="#/action-1">Anniversary</dropdownMenu>
            <dropdownMenu href="#/action-1" title='gifts for Special Ocasions'>Occasion-based</dropdownMenu>
            <dropdownMenu href="#/action-1" title='gifts for Festivals'>festive</dropdownMenu>
            <dropdownMenu href="#/action-1">General</dropdownMenu>
            <dropdownMenu href="#/action-1">Eco-Friendly</dropdownMenu>
        </div>
             </NavDropdown>
  );
}