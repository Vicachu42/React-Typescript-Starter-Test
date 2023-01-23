import React from 'react';
import styles from './Home.module.css'
import { Header } from '../components/layout/header/Header';

export const Home = () => {
  return (
    <>
      <Header />
      <section className={styles.homeContainer}>
        <div>
          <h1>Welcome to Pablo's Sportsbar</h1>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
          </p>
          <img src={process.env.PUBLIC_URL + '/assets/food_for_readme.jpg'} alt='readme-food' />
        </div>
      </section>
    </>
  );
};
