import React, { useState, useEffect } from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiCoffee, FiHeart, FiAward } = FiIcons;

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://i.ibb.co/mVc9tKHk/img-325.jpg',
    'https://i.ibb.co/nM474qdW/img-330.jpg',
    'https://i.ibb.co/f5VVqNK/img-331.jpg',
    'https://i.ibb.co/SDHzNz2M/img-332.jpg',
    'https://i.ibb.co/TBwQ3xm9/img-333.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: FiCoffee,
      title: 'Premium Coffee',
      description: 'Freshly roasted beans from the finest coffee regions around the world.'
    },
    {
      icon: FiHeart,
      title: 'Made with Love',
      description: 'Every cup and pastry is crafted with passion and attention to detail.'
    },
    {
      icon: FiAward,
      title: 'Award Winning',
      description: 'Recognized for excellence in coffee brewing and French pastry making.'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`hero-image ${index === currentImageIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <div className="hero-overlay" />
        </div>
        
        <div className="hero-content animate-fadeInUp">
          <h1 className="hero-title">Welcome to La Brioche Chaude</h1>
          <p className="hero-subtitle">
            Experience the authentic taste of France with our premium coffee and freshly baked pastries
          </p>
          <div className="hero-buttons">
            <a href="#/menu" className="btn">View Our Menu</a>
            <a href="#/contact" className="btn btn-secondary">Visit Us Today</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title animate-fadeInUp">Why Choose La Brioche Chaude?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card animate-slideInLeft" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="feature-icon">
                  <SafeIcon icon={feature.icon} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text animate-slideInLeft">
              <h2>Our Story</h2>
              <p>
                Since our establishment, La Brioche Chaude has been serving the finest French coffee and pastries. 
                Our commitment to quality and authentic French café culture has made us a beloved destination 
                for coffee enthusiasts and food lovers alike.
              </p>
              <p>
                Every morning, our skilled bakers and baristas work tirelessly to bring you the perfect blend 
                of tradition and innovation, ensuring each visit is a delightful experience.
              </p>
              <a href="#/about" className="btn">Learn More About Us</a>
            </div>
            <div className="about-image animate-slideInRight">
              <img src="https://i.ibb.co/4wtkn04N/img-336.jpg" alt="Our café interior" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title animate-fadeInUp">What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card animate-slideInLeft">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} />
                ))}
              </div>
              <p>"The best coffee in town! The atmosphere is cozy and the pastries are absolutely divine."</p>
              <div className="customer">
                <h4>Marie Dubois</h4>
                <span>Regular Customer</span>
              </div>
            </div>
            
            <div className="testimonial-card animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} />
                ))}
              </div>
              <p>"A true French café experience. The croissants remind me of my trips to Paris!"</p>
              <div className="customer">
                <h4>Jean-Pierre Martin</h4>
                <span>Food Critic</span>
              </div>
            </div>
            
            <div className="testimonial-card animate-slideInRight" style={{animationDelay: '0.4s'}}>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} />
                ))}
              </div>
              <p>"Perfect place for meetings or just relaxing. The staff is incredibly friendly and professional."</p>
              <div className="customer">
                <h4>Sophie Laurent</h4>
                <span>Business Owner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home {
          overflow-x: hidden;
        }

        .hero {
          height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }

        .hero-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .hero-image.active {
          opacity: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(rgba(44, 24, 16, 0.7), rgba(44, 24, 16, 0.5));
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          padding: 0 20px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .hero-subtitle {
          font-size: 1.3rem;
          margin-bottom: 40px;
          line-height: 1.6;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .features {
          padding: 100px 0;
          background-color: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          color: #2c1810;
          margin-bottom: 60px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .feature-card {
          text-align: center;
          padding: 40px 20px;
          border-radius: 10px;
          background-color: #f8f5f0;
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          background-color: #8B4513;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: white;
          font-size: 2rem;
        }

        .feature-card h3 {
          color: #2c1810;
          margin-bottom: 15px;
          font-size: 1.5rem;
        }

        .feature-card p {
          color: #666;
          line-height: 1.6;
        }

        .about-preview {
          padding: 100px 0;
          background-color: #f8f5f0;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-text h2 {
          color: #2c1810;
          font-size: 2.5rem;
          margin-bottom: 30px;
        }

        .about-text p {
          color: #666;
          line-height: 1.8;
          margin-bottom: 20px;
          font-size: 1.1rem;
        }

        .about-image img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 10px;
        }

        .testimonials {
          padding: 100px 0;
          background-color: white;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .testimonial-card {
          background-color: #f8f5f0;
          padding: 40px 30px;
          border-radius: 10px;
          text-align: center;
        }

        .stars {
          display: flex;
          justify-content: center;
          gap: 5px;
          margin-bottom: 20px;
          color: #FFD700;
          font-size: 1.2rem;
        }

        .testimonial-card p {
          color: #666;
          font-style: italic;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 1.1rem;
        }

        .customer h4 {
          color: #2c1810;
          margin-bottom: 5px;
        }

        .customer span {
          color: #8B4513;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .section-title {
            font-size: 2rem;
          }

          .about-text h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;