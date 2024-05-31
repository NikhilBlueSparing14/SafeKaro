import React from 'react';
import logo from '../../assets/logo2.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer id='Footer'>
      <div className='row'>
        <div className='col'>
          <img src={logo} alt='logo' className='logo' />
          <div className='map-container'>
            <iframe
              title='location-map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.668229157834!2d75.81384511451869!3d26.91243468312247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d3a91536cd%3A0x6b67f0ec1e445c4!2sSansar%20Chandra%20Rd%2C%20Jalupura%2C%20Jaipur%2C%20Rajasthan%20302001%2C%20India!5e0!3m2!1sen!2sus!4v1622551603778!5m2!1sen!2sus'
              width='100%'
              height='200'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
            ></iframe>
          </div>
        </div>
        <div className='col'>
          <h3>Office <div className='underline'><span></span></div></h3>
          <p>Royal World</p>
          <p>Sansar Chandra Road</p>
          <p>Jalupura,Jaipur,Rajasthan</p>
          <p className='email-id'>safekaro@gmail.com</p>
          <h4>+91 -0123456789</h4>
        </div>
        <div className='col'>
          <h3>Links <div className='underline'><span></span></div></h3>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/aboutus'>AboutUs</a></li>
            <li><a href='/serivices'>Services</a></li>
            <li><a href='/partnerregistration'>Partner Register</a></li>
            <li><a href='/blog'>Blogs</a></li>
          </ul>
        </div>
        <div className='col'>
          <h3>NewsLetter <div className='underline'><span></span></div> </h3>
          <form>
            <i className='far fa-envelope'></i>
            <input type='email' placeholder='Enter your EmailID' required />
            <button type='submit'><i className='fas fa-arrow-right'></i></button>
          </form>
          <div className='social-icons'>
            <i className='fab fa-facebook icons'></i>
            <i className='fab fa-twitter icons'></i>
            <i className='fab fa-whatsapp icons'></i>
            <i className='fab fa-instagram icons'></i>
          </div>
        </div>
      </div>
      <hr />
      <br/>
      <p className='copyright'>SafeKaro ©️ 2024 - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
