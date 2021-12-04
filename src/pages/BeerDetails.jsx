import React from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Beer() {
  const { id } = useParams(); //const {id} = useParams()
  const [oneBeer, setOneBeer] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        setOneBeer(response.data);
      })
      .catch(console.log);
  }, [id]);

  return (
    <div>
      <Navbar />
      <img src={oneBeer.image_url} alt="oneBeer" />
      <h1>{oneBeer.name}</h1>
      <p>{oneBeer.tagline}</p>
      <p>{oneBeer.first_brewed}</p>
      <p>{oneBeer.attenuation_level}</p>
      <p>{oneBeer.description}</p>
      <p>{oneBeer.contributed_by}</p>
    </div>
  );
}