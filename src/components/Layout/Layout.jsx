import React from 'react';
import Header from '../Header';
import './Layout.scss'

/**
 * Layout used in pages
 * @param {[]} children
 * @returns {*}
 * @constructor
 */
const Layout = ({
  children
}) => {
  return (
    <div className="layout">
      <Header/>
      <div className="layout-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;