import React from 'react';
import {FaFacebookF,FaTwitter} from "react-icons/fa";
import "./css/footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-head">
           <div className="footer-lists">
                <ul>
                    <li><a href="/aboutus">About Disney Plus Clone</a></li>
                    <li><a href="/term">Terms Of Use</a></li>
                    <li><a href="/policy">Privacy Policy</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/feedback">Feedback</a></li>
                    <li><a href="/career">Careers</a></li>
                </ul>
           </div>
           <div className="footer-connect">
               <div className="footer-text">Connect with us</div>
                <div className="footer-logo">
                    <div className="media-logo">
                        <button className='soc-med-logo'><FaFacebookF/></button>
                    </div>
                    <div className="media-logo">
                        <button className='soc-med-logo'><FaTwitter/></button>
                    </div>
                </div>
           </div>
        </div>
        <div className="copyright-text">© Disney Plus Clone 2022. All Rights Reserved</div> 
    </div>
  )
}

export default Footer