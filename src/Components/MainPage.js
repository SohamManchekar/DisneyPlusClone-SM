import React from 'react';
import {IoMdClose} from "react-icons/io";
import './css/mainpage.css';

const MainPage = () => {

    const handlePopupToggleOpen = () => {
      document.getElementById("signinpopup").style.top = "300px";
    }

    const handlePopupToggleClose = () => {
      document.getElementById("signinpopup").style.top = "-140px";
    }
 
    const login = () =>{
      document.getElementById("loginPage").click();
    }
  return (
    <>
        <div className="main-page">
            <div className="logos-img">
                <img src="images/cta-logo-one.svg" alt="" />
            </div>
            <div className="sign-up-button">
                <button className='signup-btn' onClick={handlePopupToggleOpen}>GET ALL THERE</button>
            </div>
            <div className="sign-in-popup" id='signinpopup'>
                <div className="signin-popup-close"><button className='popup-close-btn' onClick={handlePopupToggleClose}><IoMdClose/></button></div>
                <div className="popup-text">Sign in</div>
                <div className="popup-signbtn"><button className='signin-btn' onClick={login}>Subscribe</button></div>
            </div>
            <div className="main-desc">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription.As of 05/03/22, the price of Disney+
            and The Disney Bundle will increase by ₹76.
            </div>
            <div className="other-logos">
                <img src="images/cta-logo-two.png" alt="" />
            </div>
        </div>
    </>
  )
}
export default MainPage;