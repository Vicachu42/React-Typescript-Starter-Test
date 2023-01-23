import React, { useEffect, useState } from 'react';
import { Header } from '../../components/layout/header/Header';
import MenuCard from '../../components/layout/menu-cards/MenuCard'
import { Items } from '../../App'

interface Props {
  dishes?: Items[]
}

export const DishScreen: React.FC<Props> = () => {
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/dishes')
      .then(response => response.json())
      .then(result => setDishes(result))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Header />
      <h3>Hello from dishscreen</h3>
      <MenuCard items={dishes} />
    </>
  );
};
