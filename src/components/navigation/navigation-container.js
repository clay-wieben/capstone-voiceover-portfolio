import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../style/navigation.scss';
import '../../style/media-queries.scss';
import Logo from '../../../src/assets/images/branding/CW-Logo.svg';

const NavBar = () => {
  return (
    <div className='nav-wrapper'>
      <div className='left-side'>
        <img src={Logo} alt='logo' />
        <NavLink to='/' className='brand-name'>
          CLAY WIEBEN
        </NavLink>
      </div>

      <div className='right-side'>
        <div className='nav-link-wrapper'>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
        </div>

        <div className='nav-link-wrapper'>
          <NavLink to='/portfolio' className='nav-link'>
            Portfolio
          </NavLink>
        </div>

        <div className='nav-link-wrapper'>
          <NavLink to='/about' className='nav-link'>
            About
          </NavLink>
        </div>

        <div className='nav-link-wrapper'>
          <NavLink to='/contact' className='nav-link'>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
