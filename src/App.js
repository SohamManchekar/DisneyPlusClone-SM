import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import DetailComp from './Components/DetailComp';
import Header from './Components/Header';
import Home from './Components/Home';
import MainPage from './Components/MainPage';
import MoviesPage from './Components/MoviesPage';
import OriginalsPage from './Components/OriginalsPage';
import SearchPage from './Components/SearchPage';
import SeriesPage from './Components/SeriesPage';


function App() {

  return (
   <Router>
     <div className="App">
     <Header/>
     <Switch>
        <Route path="/search">
          <SearchPage/>
        </Route>
        <Route path="/detail/:id">
          <DetailComp/>
        </Route>
        <Route path="/originals">
          <OriginalsPage/>
        </Route>
        <Route path="/movies">
          <MoviesPage/>
        </Route>
        <Route path="/series">
          <SeriesPage/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/">
          <MainPage/>
        </Route>
     </Switch>
     </div>
   </Router>
  );
}

export default App;
