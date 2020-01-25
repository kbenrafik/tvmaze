import React from 'react';
import {
  Link
} from 'react-router-dom';
import logo from './images/logo.svg';
import './Header.scss';

/**
 * Header of app
 * @returns {*}
 * @constructor
 */
const Header = () => {
  return (
    <header className="header">
      <Link
        className="header__logo-link"
        to="/">
        <img src={logo} alt="RTL.nl" className="header__logo" />
      </Link>
    </header>
  );
};

export default Header;