import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      {/*       <h3>Your navigation between sports and dish screen goes here</h3> */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dishscreen">Menu</Link>
        </li>
        <li>
          <Link to="/sportsscreen">Sports Selection</Link>
        </li>
      </ul>
    </div>
  );
};
