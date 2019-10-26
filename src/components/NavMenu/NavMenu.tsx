import React from 'react';
import {Link} from 'react-router-dom';

export default class NavMenu extends React.Component {
  state = {
    toggle: false,
  };

  toggleMenu = (): void => {
    this.setState({toggle: !this.state.toggle});
  };

  render = (): JSX.Element => {
    return (
      <div>
        <ul
          className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${
            this.state.toggle ? 'toggled' : ''
          }`}
          id='accordionSidebar'>
          <div className='sidebar-brand d-flex align-items-center justify-content-center'>
            <div className='sidebar-brand-icon rotate-n-15'>
              <i className='fas fa-laugh-wink'></i>
            </div>
            <div className='sidebar-brand-text mx-3' style={{color: 'white'}}>
              Learning SVG
            </div>
          </div>
          <hr className='sidebar-divider my-0'></hr>
          <li className='nav-item active'>
            <Link to='/home' className='nav-link'>
              <span>Home</span>
            </Link>
          </li>
          <hr className='sidebar-divider'></hr>
          <div className='sidebar-heading'>Options</div>
          <li className='nav-item'>
            <Link to='/shapes' className='nav-link'>
              <span>Shapes</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/animations' className='nav-link'>
              <span>Animations</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/filters' className='nav-link'>
              <span>Filters</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/path' className='nav-link'>
              <span>Path</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/others' className='nav-link'>
              <span>Others</span>
            </Link>
          </li>
          <div className='text-center d-none d-md-inline'>
            <button className='rounded-circle border-0' id='sidebarToggle' onClick={this.toggleMenu}></button>
          </div>
        </ul>
      </div>
    );
  };
}
