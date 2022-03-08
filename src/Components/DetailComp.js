import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import './css/Detail.css';
import { GrAdd } from 'react-icons/gr';

const DetailComp = () => {

// getting the data from firebase as match according to the id using params.matched id will show the particular data to user.
   const {id} = useParams();
   const [detailData, setDetailData] = useState({});

   useEffect(() => {
     db.collection("movies")
     .doc(id)
     .get()
     .then((doc) => {
       if(doc.exists){
         setDetailData(doc.data());
       } else {
         console.log("No such document in firebase");
       }
     })
     .catch((err) => {console.log(err);});
   }, [id]);

  return (
 
   <div className="detail-page" key={id}>
    <div className='movie-back-img'>
      <img src={detailData.backgroundImg} alt={detailData.title} />
    </div>
       
    <div className="movie-detail-content">
        <div className="movie-title-img"><img src={detailData.titleImg} alt={detailData.title} /></div>
          <div className="movie-detail-page">
              <div className="movie-play-trailer-watchlist">
                <div className="movie-p-t-w">
                  <button className='play-btn'><img src="/images/play-icon-white.png" alt="" />PLAY</button>
                </div>
                <div className="movie-p-t-w">
                  <button className='trail-btn'><img src="/images/play-icon-white.png" alt="" />TRAILER</button>
                </div>
                <div className="movie-w">
                  <button className='watchlist-btn'><GrAdd/></button>
                </div>
              </div>
              <div className="movie-details">
                <div className="movie-sub-title">{detailData.subTitle}</div>
                <div className="movie-desc">{detailData.description}</div>
              </div>
          </div>
    </div>
  </div>
  );
};

export default DetailComp;
