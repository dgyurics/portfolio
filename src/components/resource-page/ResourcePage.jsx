import React from 'react';
import NavBar from '../navigation/Navigation';
import './ResourcePage.css';

const ResourcePage = () => (
  <div className="resource-page">
    <NavBar />
    <div className="resource-page__container">
      <div className="resource-page__main" />
    </div>
    <div className="resource-footer no-touch">
      <span>Coming soon</span>
    </div>
  </div>
);

export default ResourcePage;
