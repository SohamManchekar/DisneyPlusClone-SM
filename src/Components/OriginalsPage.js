import React from 'react';
import Recommended from './Recommended';
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import './css/Section.css';
import Footer from './Footer';

const OriginalsPage = () => {
  return (
    <div className="show-content-section">
      <div className="show-content">
            <div className="content-img">
                <img src="images/slider-badag.jpg" alt="" />
            </div>
       <div className="top-head">Disney Plus Originals</div>
                    <Recommended/>
                     <NewDisney/>
                      <Originals/>
                      <Trending/>
           </div>
           <Footer/>
      </div>
  );
};

export default OriginalsPage;
