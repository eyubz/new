import React from 'react';
import { FaEnvelope, FaFacebook, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="column">
          <FaEnvelope size={30} color="white" />
        </div>
        <div className="column">
          <FaFacebook size={30} color="white" />
        </div>
        <div className="column">
          <FaPhone size={30} color="white" />
        </div>
      </div>
      <div className="row">
        <div className="column">Email: babinet348@gmail.com</div>
        <div className="column">Facebook: Binyam Abinet</div>
        <div className="column">Phone: +251 910 806 054</div>
      </div>
      <div className="row">
        <p>Lets lighten up the generation!</p>
      </div>
    </footer>
  );
};

export default Footer;
