import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {SelectUserName,SelectUserPhoto,setUserLoginDetails,setUserSignOut} from "../users/userInfo";
import { auth, provider } from '../firebase';
import MenuHead from './MenuHead';
import { FaBars, FaTimes } from 'react-icons/fa';
import './css/header.css';
import "./css/mainpage.css";

const Header = () => {
  const userName = useSelector(SelectUserName);
  const userPhoto = useSelector(SelectUserPhoto);
  const dispatch = useDispatch();
  const history = useHistory(); 

  // redirect user to home page if login successfull
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if(user){
        setUser(user)
        history.push("/home");
      }
    });
  }, [userName]);
  

  // create a user
  const setUser = (user) => {
  dispatch(
      setUserLoginDetails({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
      })
  );
}

 // handling the google authentication
 const handleAuthentication = () => {
   // sign in 
   if(!userName){
  auth.signInWithPopup(provider)
  .then((result) => setUser(result.user))
  .catch((err) => console.log(err));
   } 

   // sign out
   else if (userName){
     auth.signOut()
     .then(() => {dispatch(setUserSignOut());
     history.push("/");
     })
     .catch((err) => alert(err));
   }
}

  const handleUserProfDet = () => {
  let userProf = document.getElementById("userProf");
    if(userProf.style.top === "80px"){
      userProf.style.top = "-140px";
    } else{
      userProf.style.top = "80px";
    }
  }

  return (
   <>
        {!userName ? 
           <div className="mainpage-head">
            <div className="main-logo">
                <img src="images/logo.svg" alt="" />
             </div>
             <div className="login">
                 <button className="log" onClick={handleAuthentication} id="loginPage">Login</button>
            </div> 
        </div> : 
         <div className="header">
            <div className="menu-open">
                <button className='menu-btn' onClick={() => document.getElementById('menuList').style.top = "0px"}><FaBars/></button>
            </div>
             <div className="head-logo"> 
                     <img src="images/logo.svg" alt="" />               
             </div>
             <div className="menu-bar-head">
               <MenuHead/>
             </div>
                <div className="user-logo" onClick={handleUserProfDet}>
                    <img src={userPhoto} alt={userName} />
                </div>
                    <div className="user-Details" id='userProf'>
                      <div className="user-logo-name">
                        <div className="user-img"><img src={userPhoto} alt={userName} /></div>
                        <div className="user-name">{userName}</div>
                      </div>
                      <div className="sign-out">
                        <button className='signout-btn' onClick={handleAuthentication}>Sign Out</button>
                      </div>
                    </div>
             <div className="menubar-head" id='menuList'>
                  <MenuHead/>
                  <div className="menu-close">
                    <button className='menu-btn' onClick={() => document.getElementById('menuList').style.top = "-260px"}><FaTimes/></button>
                  </div>
               </div>  
         </div>
         }
         </>
  );
};

export default Header;


