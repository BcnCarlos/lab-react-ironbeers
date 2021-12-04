import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function NewBeer() {
  const history = useHistory();

  const [formState, setFormState] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', formState)
      .then((response) => {
        setFormState({});
        history.push('/');
        window.alert(response.data.message)
      })
      .catch(console.log);
  }

  function handleInput(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  return (
    <div>
        <Navbar />
      <h1> Add a new Beer </h1>

      <form onSubmit={handleSubmit}>
        <label> Name </label>
        <input
          type="text"
          name="name"
          onChange={handleInput}
          value={formState.name || ''}
        />

        <label> Tagline </label>
        <input
          type="text"
          name="tagline"
          onChange={handleInput}
          value={formState.tagline || ''}
        />

        <label> Description </label>
        <input
          type="text"
          name="description"
          onChange={handleInput}
          value={formState.description || ''}
        />

        <label> First Brewed </label>
        <input
          type="text"
          name="first_brewed"
          onChange={handleInput}
          value={formState.first_brewed || ''}
        />

        <label> Brewed Tips </label>
        <input
          type="text"
          name="brewers_tips"
          onChange={handleInput}
          value={formState.brewers_tips || ''}
        />

        <label> Attenuation Level </label>
        <input
          type="number"
          name="attenuation_level"
          onChange={handleInput}
          value={formState.attenuation_level || ''}
        />

        <label> Contributed By </label>
        <input
          type="text"
          name="contributed_by"
          onChange={handleInput}
          value={formState.contributed_by || ''}
        />

        <button type="submit"> Add New Beer</button>
      </form>
    </div>
  );
};