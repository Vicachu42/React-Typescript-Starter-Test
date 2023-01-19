import React, { useEffect, useState } from 'react';
import { Items } from '../../App';
import { Header } from '../../components/layout/header/Header';
import MenuCard from '../../components/layout/menu-cards/MenuCard';

interface Props {
  sports?: Items[]
}

export const SportsScreen: React.FC<Props> = () => {
  const [sports, setSports] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/sports')
      .then(response => response.json())
      .then(result => setSports(result))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Header />
      <h3>Hello from sports-screen</h3>
      <MenuCard items={sports} />
    </div>
  );
};
