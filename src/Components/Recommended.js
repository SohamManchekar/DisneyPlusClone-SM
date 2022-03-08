import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './css/movieComp.css';
import MovieComponent from './MovieComponent';
import { selectRecommendType } from '../users/movieInfo';



const Recommended = () => {
  const movies = useSelector(selectRecommendType);
  return (
        <>
             
           <h4 style={{color:"white"}}>Recommended For You</h4>
           <div className="container">
               {
                 movies && movies.map((movie,key) => {
                   return <Link to={"/detail/" + movie.id} key={key}><MovieComponent movie={movie} key={key}/></Link>
                 })
               }
           </div>
        </>
  );
};

export default Recommended;
