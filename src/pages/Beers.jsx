import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Beers(){

    const [allBeers, setAllBeers] = useState([]);

    // This effect will run only once after the initial render 
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log("response.data", response.data);
        setAllBeers(response.data);
      })
      .catch(console.log);
  }, []);       // <--  [] means: Run the effect only once, after initial render


return(

    <div>
    <Navbar />
    <h1> List of All Beers </h1>



     {allBeers.map((oneBeer) => (
        <div key={oneBeer._id} className="card">
          <h1>{oneBeer.name}</h1>
          <Link to={`/Beers/${oneBeer._id}`}>
            <img src={oneBeer.image_url} alt="clickfordetails" />
          </Link>
          <h3>{oneBeer.tagline}</h3>
          <p>Created by: {oneBeer.contributed_by}</p>
        </div>
      ))}
    </div>

)


}