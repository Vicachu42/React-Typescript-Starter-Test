import React, { useEffect, useState } from 'react';
import { Header } from '../../components/layout/header/Header';
import { Items } from '../../App';
import MenuCard from '../../components/layout/menu-cards/MenuCard';
import styles from './SportsScreen.module.css';

interface Props {
  sports?: Items[]
}

export const SportsScreen: React.FC<Props> = () => {
  const [sports, setSports] = useState([])

  useEffect(() => {
    getSports()
  }, [])

  function getSports() {
    fetch('http://localhost:3000/sports')
      .then(response => response.json())
      .then(result => setSports(result))
      .catch(err => console.log(err))
  }

  function deleteSports(id: number | null | undefined) {
    fetch(`http://localhost:3000/sports/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(result => console.log(result))
    getSports()
  }

  // Add conditional formatting for if the fetch fails 

  return (
    <>
      <Header />
      <section className={styles.sportsContainer}>
        <h2>Choose sport</h2>
        {sports.length >= 0 ? (
          <MenuCard items={sports} deleteSports={deleteSports} />
        ) : (
          <p>Hej</p>
        )}
      </section>
    </>
  );
};
