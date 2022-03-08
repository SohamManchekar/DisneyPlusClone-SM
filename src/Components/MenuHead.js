import React from 'react';
import {Link} from 'react-router-dom';
import './css/header.css';

const MenuHead = () => {
    
  return (
                <div className="menu-lists">
                    <div className="list">
                        <div className="list-img"><img src="images/home-icon.svg" alt="Home page" /></div>
                        <div className="list-title" onClick={() => document.getElementById('menuList').style.top = "-310px"}><Link to="/home">HOME</Link></div>
                    </div>
                    <div className="list">
                        <div className="list-img"><img src="images/search-icon.svg" alt="Search section" /></div>
                        <div className="list-title" onClick={() => document.getElementById('menuList').style.top = "-310px"}><Link to="/search">SEARCH</Link></div>
                    </div>
                    <div className="list">
                        <div className="list-img"><img src="images/original-icon.svg" alt="Originals section" /></div>
                        <div className="list-title" onClick={() => document.getElementById('menuList').style.top = "-310px"}><Link to="/originals">ORIGINALS</Link></div>
                    </div>
                    <div className="list">
                        <div className="list-img"><img src="images/movie-icon.svg" alt="Movies Section" /></div>
                        <div className="list-title" onClick={() => document.getElementById('menuList').style.top = "-310px"}><Link to="/movies">MOVIES</Link></div>
                    </div>
                    <div className="list">
                        <div className="list-img"><img src="images/series-icon.svg" alt="Series section" /></div>
                        <div className="list-title" onClick={() => document.getElementById('menuList').style.top = "-310px"}><Link to="/series">SERIES</Link></div>
                    </div>
                 </div>
                 
  );
};

export default MenuHead;


