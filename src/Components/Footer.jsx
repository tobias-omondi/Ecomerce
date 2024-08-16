import React from 'react';
import Stores from '../assets/FooterImage/footer1.png'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import BottomToTopBtn from './BackToTopButton';
import BackToTopButton from './BackToTopButton';

const Footer = () => {
  return (
    <footer className="section-p1" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className="col">
        <h4>Contact</h4>
        <p><strong>Address :</strong> J#2 OG view</p>
        <p><strong>Phone :</strong> +254 741041880</p>
        <p><strong>Hours :</strong> 24:00:00</p>
        <div className="followUs">
          <div className="icon">
            <FaFacebook className="i fab fa-facebook " />
            <FaTwitter className="i fab fa-twitter" />
            <FaTiktok className="i fab fa-tiktok" />
            <FaInstagram className="i fab fa-instagram" />
          </div>
        </div>
      </div>

      <div className="col">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
      </div>

      <div className="col">
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">My Wish List</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
      </div>

      <div className="col-install">
        <h1>Install App</h1>
        <p>From App Store & Google Play</p>
        <div className="row">
          <img src={Stores} alt="App Store & Google Play" />
        </div>
      </div>

      <div className="copyright">
        <p>@ 2024 OG React Ui  E-COMMERCE-TEMPLATE</p>
      </div>

      <BackToTopButton />
    </footer>
  );
};

export default Footer;