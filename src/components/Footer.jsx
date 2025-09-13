import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img 
              src="https://i.ibb.co/GvdJj6fK/img-036.png" 
              alt="La Brioche Chaude" 
              className="footer-logo"
            />
            <p className="footer-description">
              Experience the finest French café culture with our premium coffee and freshly baked pastries.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <SafeIcon icon={FiFacebook} />
              </a>
              <a href="#" className="social-link">
                <SafeIcon icon={FiInstagram} />
              </a>
              <a href="#" className="social-link">
                <SafeIcon icon={FiTwitter} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#/">Home</a></li>
              <li><a href="#/menu">Menu</a></li>
              <li><a href="#/about">About Us</a></li>
              <li><a href="#/gallery">Gallery</a></li>
              <li><a href="#/reviews">Reviews</a></li>
              <li><a href="#/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <SafeIcon icon={FiPhone} />
                <span>+33 6 21 51 82 99</span>
              </div>
              <div className="contact-item">
                <SafeIcon icon={FiMail} />
                <span>info@labriochechaude.com</span>
              </div>
              <div className="contact-item">
                <SafeIcon icon={FiMapPin} />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3>Opening Hours</h3>
            <div className="hours">
              <div className="hour-item">
                <span>Monday - Friday</span>
                <span>7:00 AM - 8:00 PM</span>
              </div>
              <div className="hour-item">
                <span>Saturday - Sunday</span>
                <span>8:00 AM - 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {currentYear} La Brioche Chaude - CAFÉ. All rights reserved.</p>
          </div>
          <div className="credits">
            <p>
              Domain + Hosting + Design = <a href="https://www.account4web.ca" target="_blank" rel="noopener noreferrer">Account4Web Inc</a>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #2c1810;
          color: #f8f5f0;
          padding: 60px 0 20px;
          margin-top: 80px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-section h3 {
          color: #D2B48C;
          margin-bottom: 20px;
          font-size: 18px;
          font-weight: 600;
        }

        .footer-logo {
          height: 60px;
          margin-bottom: 20px;
          filter: brightness(0) invert(1);
        }

        .footer-description {
          margin-bottom: 20px;
          line-height: 1.6;
          color: #d0d0d0;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-link {
          width: 40px;
          height: 40px;
          background-color: #8B4513;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background-color: #A0522D;
          transform: translateY(-2px);
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links a {
          color: #d0d0d0;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #D2B48C;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #d0d0d0;
        }

        .contact-item svg {
          color: #8B4513;
          font-size: 16px;
        }

        .hours {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .hour-item {
          display: flex;
          justify-content: space-between;
          color: #d0d0d0;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .copyright p,
        .credits p {
          color: #d0d0d0;
          font-size: 14px;
        }

        .credits a {
          color: #D2B48C;
          text-decoration: none;
          font-weight: 600;
        }

        .credits a:hover {
          color: #F4A460;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 40px 0 20px;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;