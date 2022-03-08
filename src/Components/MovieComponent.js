import React from 'react';
import './css/movieComp.css';

const MovieComponent = ({movie}) => {

  return (
            <div className="content" key={movie.id}>    
              <img src={movie.cardImg} alt={movie.title} />
          </div>
          
  );
};

export default MovieComponent;
