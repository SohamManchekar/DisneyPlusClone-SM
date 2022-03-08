import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './css/movieComp.css';
import MovieComponent from './MovieComponent';
import { selectTrendingType } from '../users/movieInfo';


const Trending = () => {
  const movies = useSelector(selectTrendingType);
  return (
        <>
           <h4 style={{color:"white"}}>Trending</h4>
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

export default Trending;
