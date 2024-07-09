import React from 'react';
import "./footer.css";
import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footericons">
        <a href="https://github.com/"><FaGithub className="footerIcon" /></a> 
        <a href="https://twitter.com/"><FaTwitter className="footerIcon" /></a>
        <a href="https://www.linkedin.com/in/"><FaLinkedin className="footerIcon" /></a>
      </div>
      <div className="fText">Group 11</div>
    </div>
  );
};

export default Footer;