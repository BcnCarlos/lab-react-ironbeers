import React from "react";
import beersimg from "../assets/beers.png"
import newbeersimg from "../assets/new-beer.png"
import randombeersimg from "../assets/random-beer.png"
import {Link} from "react-router-dom" 



export default function Homepage(){
    
    return (
    <div>          
        
        <img src={beersimg} alt="beerimage"/>
        <br></br>
        <Link to="/beers"> View All Beers </Link> 
        <br></br>
      
        <img src={newbeersimg} alt="newbeersimg" />
        <br></br>
        <Link to="/beers/new-beer"> Add A New Beer </Link> 
        <br></br>
       
        <img src={randombeersimg} alt="randombeersimg" />
        <br></br>
        <Link to="/beers/random-beer"> Select Random Beeer </Link> 
        <br></br>
        
    </div>
    );

}