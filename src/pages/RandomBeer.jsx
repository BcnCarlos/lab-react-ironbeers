import React from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function RandomBeer() {
  const [RandomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      <Navbar />
      <h1>RandomBeer</h1>
      <img src={RandomBeer.image_url} alt="oneBeer" />
      <h1>{RandomBeer.name}</h1>
      <p>{RandomBeer.tagline}</p>
      <p>{RandomBeer.first_brewed}</p>
      <p>{RandomBeer.attenuation_level}</p>
      <p>{RandomBeer.description}</p>
      <p>{RandomBeer.contributed_by}</p>
    </div>
  );
}
