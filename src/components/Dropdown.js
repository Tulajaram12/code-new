import React from 'react'
// import {Dropdown} from 'react-dropdown';
import 'react-dropdown/style.css';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
 
export default function dropdown() {
  return (   

              <NavDropdown id="dropdown-basic-button" className='dropup' title="Categories">
        <div id='dropdown-menu'>
            <dropdownMenu href="#/action-1" title='New joinee'>New Joinee</dropdownMenu>
            <dropdownMenu href="#/action-1">Anniversary</dropdownMenu>
            <dropdownMenu href="#/action-1">Occasion-based</dropdownMenu>
            <dropdownMenu href="#/action-1">festive</dropdownMenu>
            <dropdownMenu href="#/action-1">General</dropdownMenu>
            <dropdownMenu href="#/action-1">Eco-Friendly</dropdownMenu>
            {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
        </div>
             </NavDropdown>
        



                        // const options = [
                        //   'one', 'two', 'three'
                        // ];
                        // const defaultOption = options[0];
                        // <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;





                        /*<div className="dropdown">
                        <button className="dropbtn">Dropdown
                          <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                          <a href="#">Link 1</a>
                          <a href="#">Link 2</a>
                          <a href="#">Link 3</a>
                        </div>
   <                    /div> */
                    
                        /* <li>Categories</li> */
                        // <div>
                        //   <div className='Categories'>
                        //                      <li className="dropdown">
                        //                          <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
                        //                            Categories
                        //                          </button> 
                        //                           <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1"> 
                        //                           <li><a className="dropdown-item" >New Joinee</a></li>
                        //                           <li><a className="dropdown-item" >Anniversary</a></li>
                        //                           <li><a className="dropdown-item" >Occasion-based</a></li>
                        //                           <li><a className="dropdown-item" >festive</a></li>
                        //                           <li><a className="dropdown-item" >General</a></li>
                        //                           <li><a className="dropdown-item" >Eco-Friendly</a></li>
                        //                          </ul>
                        //                     </li> 
                        //                     </div>
                        // </div>
  )
}
