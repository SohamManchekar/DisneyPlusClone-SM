import React from 'react';
import './css/Section.css';
import Recommended from './Recommended';
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import Footer from './Footer';

const MoviesPage = () => {
  return (
    <div className="show-content-section">
    <div className="show-content">
          <div className="content-img">
              <img src="images/slider-badging.jpg" alt="" />
          </div>
     <div className="top-head">Watch Your Favorite Movies Right now</div>
                      <Recommended/>
                     <NewDisney/>
                      <Originals/>
                      <Trending/>
         </div>
         <Footer/>
    </div>
  );
};

export default MoviesPage;
