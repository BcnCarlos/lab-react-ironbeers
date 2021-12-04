import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import Beers from './pages/Beers.jsx';
import BeerDetails from './pages/BeerDetails.jsx';
import RandomBeer from './pages/RandomBeer.jsx';
import NewBeer from './pages/NewBeer.jsx';


function App() {
  return (

    <div className="App">
      <Switch>

        <Route path={'/beers/new-beer'} component={NewBeer} />

        <Route path={'/beers/random-beer'} component={RandomBeer} />

        <Route path={'/beers/:id'} component={BeerDetails} />

        <Route path={'/beers'} component={Beers} />

        <Route exact path={'/'} component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
