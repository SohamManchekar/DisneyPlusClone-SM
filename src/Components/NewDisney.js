import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './css/movieComp.css';
import MovieComponent from './MovieComponent';
import { selectnewDisneyType } from '../users/movieInfo';



const NewDisney = () => {
  const movies = useSelector(selectnewDisneyType)
  return (
        <>
           <h4 style={{color:"white"}}>New To Disney+</h4>
           <div className="container">
              {
                 movies && movies.map((movie, key) => {
                   return <Link to={"/detail/" + movie.id} key={key}><MovieComponent movie={movie} key={key}/></Link>
                 })
               }
           </div>
        </>
  );
};

export default NewDisney;
