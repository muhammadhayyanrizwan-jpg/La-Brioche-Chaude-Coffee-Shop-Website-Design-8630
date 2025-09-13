import React, { useState } from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiClock, FiSend } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      details: ['+33 6 21 51 82 99'],
      description: 'Call us for reservations or inquiries'
    },
    {
      icon: FiMail,
      title: 'Email',
      details: ['info@labriochechaude.com'],
      description: 'Send us an email anytime'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      details: ['123 Rue de la Paix', 'Paris, France 75001'],
      description: 'Visit us in the heart of Paris'
    },
    {
      icon: FiClock,
      title: 'Opening Hours',
      details: [
        'Mon-Fri: 7:00 AM - 8:00 PM',
        'Sat-Sun: 8:00 AM - 9:00 PM'
      ],
      description: 'We are open 7 days a week'
    }
  ];

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-content animate-fadeInUp">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with La Brioche Chaude</p>
        </div>
      </div>

      <div className="container">
        {/* Contact Info Cards */}
        <div className="contact-info-grid">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="contact-card animate-slideInLeft" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="contact-icon">
                <SafeIcon icon={info.icon} />
              </div>
              <h3>{info.title}</h3>
              <div className="contact-details">
                {info.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
              <span className="contact-description">{info.description}</span>
            </div>
          ))}
        </div>

        {/* Contact Form and Map Section */}
        <div className="contact-content">
          <div className="contact-form-section animate-slideInLeft">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn submit-btn">
                <SafeIcon icon={FiSend} />
                Send Message
              </button>
            </form>
          </div>

          <div className="map-section animate-slideInRight">
            <h2>Find Us</h2>
            <div className="map-container">
              <img 
                src="https://i.ibb.co/Y4gskLgq/img-373.jpg" 
                alt="Café location map" 
                className="map-image"
              />
              <div className="map-overlay">
                <div className="location-marker">
                  <SafeIcon icon={FiMapPin} />
                  <span>La Brioche Chaude</span>
                </div>
              </div>
            </div>
            
            <div className="location-details">
              <h3>Visit Our Café</h3>
              <p>
                Located in the charming streets of Paris, our café offers a warm and 
                welcoming atmosphere perfect for enjoying our premium coffee and pastries. 
                We're easily accessible by metro and have nearby parking available.
              </p>
              <div className="directions">
                <h4>Getting Here:</h4>
                <ul>
                  <li>Metro: Line 1, 4, 7, 11, 14 - Châtelet Station</li>
                  <li>Bus: Lines 21, 27, 38, 85</li>
                  <li>Parking: Available at nearby Place Vendôme</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-page {
          padding-top: 0;
        }

        .contact-hero {
          height: 60vh;
          background: linear-gradient(rgba(44, 24, 16, 0.7), rgba(44, 24, 16, 0.5)),
                      url('https://i.ibb.co/NzwHzhV/img-374.jpg');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .contact-hero-content h1 {
          font-size: 3rem;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .contact-hero-content p {
          font-size: 1.2rem;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px;
        }

        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
        }

        .contact-card {
          background-color: white;
          padding: 40px 30px;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          background-color: #8B4513;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: white;
          font-size: 1.5rem;
        }

        .contact-card h3 {
          color: #2c1810;
          font-size: 1.3rem;
          margin-bottom: 15px;
        }

        .contact-details p {
          color: #2c1810;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .contact-description {
          color: #666;
          font-size: 0.9rem;
          margin-top: 10px;
          display: block;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: flex-start;
        }

        .contact-form-section h2,
        .map-section h2 {
          color: #2c1810;
          font-size: 2rem;
          margin-bottom: 30px;
        }

        .contact-form {
          background-color: white;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group label {
          display: block;
          color: #2c1810;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #8B4513;
        }

        .submit-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
          width: 100%;
          padding: 15px;
          font-size: 16px;
        }

        .map-container {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          margin-bottom: 30px;
          height: 300px;
        }

        .map-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .map-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(rgba(44, 24, 16, 0.3), rgba(44, 24, 16, 0.1));
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .location-marker {
          background-color: #8B4513;
          color: white;
          padding: 15px 20px;
          border-radius: 25px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        .location-details {
          background-color: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .location-details h3 {
          color: #2c1810;
          font-size: 1.3rem;
          margin-bottom: 15px;
        }

        .location-details p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .directions h4 {
          color: #2c1810;
          margin-bottom: 10px;
        }

        .directions ul {
          list-style: none;
          padding: 0;
        }

        .directions li {
          color: #666;
          margin-bottom: 5px;
          padding-left: 15px;
          position: relative;
        }

        .directions li::before {
          content: '•';
          color: #8B4513;
          position: absolute;
          left: 0;
        }

        @media (max-width: 768px) {
          .contact-hero-content h1 {
            font-size: 2.5rem;
          }

          .contact-info-grid {
            grid-template-columns: 1fr;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-form {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;