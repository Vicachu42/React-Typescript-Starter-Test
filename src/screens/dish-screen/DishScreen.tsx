import React, { useEffect, useState } from 'react';
import { Header } from '../../components/layout/header/Header';
import MenuCard from '../../components/layout/menu-cards/MenuCard'
import { Items } from '../../App'

interface Props {
  dishes?: Items[]
/*   dishes?: Dishes[] */
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
    <div>
      <Header />
      <h3>Hello from dishscreen</h3>
{/*       {dishes.length > 0 ? dishes.map((dish:Data) => console.log(dish.title)) : ('Loading')} */}
      <MenuCard items={dishes} />
    </div>
  );
};
