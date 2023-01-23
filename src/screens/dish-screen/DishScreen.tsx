import React, { useEffect, useState } from 'react';
import { Header } from '../../components/layout/header/Header';
import { Items } from '../../App'
import MenuCard from '../../components/layout/menu-cards/MenuCard'
import styles from './DishScreen.module.css';

interface Props {
  dishes?: Items[]
}

export const DishScreen: React.FC<Props> = () => {
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    getDishes()
  }, [])

  function getDishes() {
    fetch('http://localhost:3000/dishes')
      .then(response => response.json())
      .then(result => setDishes(result))
      .catch(err => console.log(err))
  }

  function deleteDishes(id: number | null | undefined) {
    fetch(`http://localhost:3000/dishes/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(result => console.log(result))
    getDishes()
  }

  // Add conditional formatting for if the fetch fails 

  return (
    <>
      <Header />
      <section className={styles.dishContainer}>
        <h2>Choose food</h2>
        {dishes.length >= 0 ? (
          <MenuCard items={dishes} deleteDishes={deleteDishes} />
        ) : (
          <p>Hej</p>
        )}
      </section>
    </>
  );
};
