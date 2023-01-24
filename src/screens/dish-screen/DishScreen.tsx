import React, { useEffect, useState } from 'react';
import { Header } from '../../components/layout/header/Header';
import { Items } from '../../App'
import styles from './DishScreen.module.css';

interface Props {
  dishes?: Items[]
}

export const DishScreen: React.FC<Props> = () => {
  const [dishes, setDishes] = useState<any[]>([])

  useEffect(() => {
    getDishes()
  }, [dishes])

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

  // Add conditional formatting for if the fetch fails or there is nothing to fetch

  return (
    <>
      <Header />
      <section className={styles.dishContainer}>
        <h2>Choose food</h2>
        {dishes.length >= 1 ? (
          <article className='card mb-3'>
            <h4 className='card-header'>Menu</h4>
            {dishes?.map((dish) => (
              <div key={dish.id} className='card-body'>
                <button
                  onClick={() => deleteDishes(dish.id)}
                  type='button'
                  className='btn btn-outline-danger'
                >
                  Delete
                </button>
                <h5 className='card-title'>{dish.title}</h5>
                <p className='card-text'>{dish.description}</p>
                <img
                  src={process.env.PUBLIC_URL + dish.url}
                  alt='menu-item'
                  className='d-block user-select-none' />
              </div>
            ))}
          </article>
        ) : (
          <article className='alert alert-dismissible alert-warning'>
            <h4 className="alert-heading">We're sorry</h4>
            <p className="mb-0">There are currently no dishes to choose from. </p>
          </article>
        )}
      </section>
    </>
  );
};