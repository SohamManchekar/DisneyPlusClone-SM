import React from 'react';
import Recommended from './Recommended';
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import './css/Section.css';
import Footer from './Footer';

const SeriesPage = () => {
  return (
    <div className="show-content-section">
    <div className="show-content">
          <div className="content-img">
              <img src="images/slider-scale.jpg" alt="" />
          </div>
     <div className="top-head">Watch Your Favorite Series Right now </div>
                    <Recommended/>
                     <NewDisney/>
                      <Originals/>
                      <Trending/>
         </div>
         <Footer/>
    </div>
  );
};

export default SeriesPage;
