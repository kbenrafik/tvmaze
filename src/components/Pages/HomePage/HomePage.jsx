import React from 'react';
import {
  Link
} from 'react-router-dom';
import Layout from '../../Layout';
import './HomePage.scss';

/**
 * Home page
 * @returns {null|*}
 * @constructor
 */
const HomePage = () => {
  return (
    <Layout>
      <div className="home-page">
        <Link to="/show/6771" className="home-page__link">The Powerpuff Girls</Link>
        <Link to="/show/33452" className="home-page__link">Harley Quinn</Link>
        <Link to="/show/10" className="home-page__link">Grimm</Link>
      </div>
    </Layout>
  );
};

export default HomePage;