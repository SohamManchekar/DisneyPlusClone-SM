import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Hover from './Hover';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommended from './Recommended';
import Slider from './Slider';
import Trending from './Trending';
import db from "../firebase";
import { setMoviesType } from '../users/movieInfo';
import { SelectUserName } from '../users/userInfo';
import Footer from './Footer';

const Home = () => {

    const dispatch = useDispatch();
    const userName = useSelector(SelectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trendings = [];

      useEffect(() => {
          db.collection("movies").onSnapshot((snapshot) => {
              snapshot.docs.map((doc) => {
                 switch(doc.data().type){
                    case "recommend":
                      recommends = [...recommends,{id: doc.id, ...doc.data()}];
                      break;

                    case 'new' :
                        newDisneys = [...newDisneys,{id: doc.id, ...doc.data()}];
                        break;

                        case 'original' :
                            originals = [...originals,{id: doc.id, ...doc.data()}];
                            break;

                            case 'trending' :
                                trendings = [...trendings,{id: doc.id, ...doc.data()}];
                                break;
                 }
              });  

          dispatch(setMoviesType({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trendings
        })
        );
    });
}, [userName]);


  return (
        <>
            <Container>
                <Slider/>
                <Hover/>
                <Recommended/>
                <NewDisney/>
                <Originals/>
                <Trending/>
                <Footer/>
            </Container>
        </>
  );
};

export default Home;

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0px 3.6vw;
    position: relative;
    display:block;
    overflow-x: hidden;

    &:before {
        background: url("/images/home-background.png") center center / cover 
        no-repeat fixed;
        content: "";
        position:absolute;
        inset:0px;
        opacity: 1;
        z-index: -1;
    }

`;
