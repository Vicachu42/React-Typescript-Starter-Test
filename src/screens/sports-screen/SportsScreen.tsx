import React, { useEffect, useState } from 'react';
import { Header } from '../../components/layout/header/Header';
import { Items } from '../../App';
import styles from './SportsScreen.module.css';

interface Props {
  sports?: Items[]
}

export const SportsScreen: React.FC<Props> = () => {
  const [sports, setSports] = useState<any[]>([])

  useEffect(() => {
    getSports()
  }, [sports])

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
      .catch(err => console.log(err))
    getSports()
  }

  return (
    <>
      <Header />
      <section className={styles.sportsContainer}>
        <h2>Choose sport</h2>
        {sports.length >= 1 ? (
          <article className='card mb-3'>
            <h4 className='card-header'>Menu</h4>
            {sports?.map((sport) => (
              <div key={sport.id} className='card-body'>
                <button
                  onClick={() => deleteSports(sport.id)}
                  type='button'
                  className='btn btn-outline-danger'
                >
                  Delete
                </button>
                <h5 className='card-title'>{sport.title}</h5>
                <p className='card-text'>{sport.description}</p>
                <img
                  src={process.env.PUBLIC_URL + sport.url}
                  alt='menu-item'
                  className='d-block user-select-none' />
              </div>
            ))}
          </article>
        ) : (
          <article className='alert alert-dismissible alert-warning'>
            <h4 className="alert-heading">We're sorry</h4>
            <p className="mb-0">There are currently no sports to choose from.</p>
          </article>
        )}
      </section>
    </>
  );
};
