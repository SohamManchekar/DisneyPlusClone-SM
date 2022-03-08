import React from 'react';
import Slider from './Slider';
import {FaSearch} from 'react-icons/fa';

import './css/Searchpage.css';

const SearchPage = () => {

  return (
          <div className="search-page">
            <div className="search-slider">
                <Slider/>
            </div>
              <div className="search-section">
                   <div className="search-box">
                       <div className="search"><input type="text" className='search-content' placeholder='Search your favorite movies and series'/></div>
                       <div className="search-btn"><button className='btn-searching'><FaSearch/></button></div>
                   </div>
              </div>
          </div>
  );
};

export default SearchPage;
