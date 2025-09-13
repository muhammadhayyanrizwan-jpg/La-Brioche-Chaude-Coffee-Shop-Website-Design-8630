import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiUsers, FiAward, FiHeart } = FiIcons;

const About = () => {
  const stats = [
    { icon: FiClock, number: '15+', label: 'Years of Excellence' },
    { icon: FiUsers, number: '10K+', label: 'Happy Customers' },
    { icon: FiAward, number: '25+', label: 'Awards Won' },
    { icon: FiHeart, number: '100%', label: 'Made with Love' }
  ];

  const team = [
    {
      name: 'Jean-Baptiste Martin',
      role: 'Head Chef & Owner',
      image: 'https://i.ibb.co/39wjhVQ8/img-533.jpg',
      description: 'With over 20 years of experience in French pastry making, Jean-Baptiste brings authentic flavors to every creation.'
    },
    {
      name: 'Marie Dubois',
      role: 'Master Barista',
      image: 'https://i.ibb.co/mVd91Vv8/img-375.jpg',
      description: 'Marie is our coffee expert, ensuring every cup meets the highest standards of quality and taste.'
    },
    {
      name: 'Pierre Laurent',
      role: 'Sous Chef',
      image: 'https://i.ibb.co/ccQHnXX4/img-016.jpg',
      description: 'Pierre specializes in traditional French baking techniques, bringing centuries-old recipes to life.'
    }
  ];

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-content animate-fadeInUp">
          <h1>About La Brioche Chaude</h1>
          <p>A story of passion, tradition, and exceptional French café culture</p>
        </div>
      </div>

      <div className="container">
        {/* Our Story Section */}
        <section className="our-story">
          <div className="story-content">
            <div className="story-text animate-slideInLeft">
              <h2>Our Story</h2>
              <p>
                La Brioche Chaude was born from a simple dream: to bring the authentic taste and warmth 
                of a traditional French café to our community. Founded in 2008 by Jean-Baptiste Martin, 
                a passionate chef trained in the finest patisseries of Paris, our café has become a 
                beloved gathering place for coffee lovers and food enthusiasts.
              </p>
              <p>
                Every morning before dawn, our skilled bakers begin crafting fresh croissants, pain au chocolat, 
                and other French delicacies using time-honored techniques passed down through generations. 
                Our commitment to quality extends to our coffee, where we source only the finest beans 
                and roast them to perfection.
              </p>
              <p>
                What sets us apart is not just our authentic recipes, but our dedication to creating 
                a warm, welcoming atmosphere where every guest feels like family. From the aroma of 
                fresh-baked bread to the perfect crema on your espresso, every detail is carefully 
                crafted to provide an unforgettable experience.
              </p>
            </div>
            <div className="story-image animate-slideInRight">
              <img src="https://i.ibb.co/Kjssk66r/img-707.jpg" alt="Our café story" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="stat-icon">
                  <SafeIcon icon={stat.icon} />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Values Section */}
        <section className="values-section">
          <h2 className="section-title animate-fadeInUp">Our Values</h2>
          <div className="values-grid">
            <div className="value-card animate-slideInLeft">
              <h3>Quality First</h3>
              <p>
                We never compromise on quality. From sourcing the finest ingredients to maintaining 
                the highest standards in preparation, excellence is our promise to you.
              </p>
            </div>
            <div className="value-card animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <h3>Authentic Tradition</h3>
              <p>
                Our recipes honor the rich tradition of French baking and coffee culture, bringing 
                you authentic flavors that have been perfected over centuries.
              </p>
            </div>
            <div className="value-card animate-slideInRight" style={{animationDelay: '0.4s'}}>
              <h3>Community Focus</h3>
              <p>
                We believe in building connections and fostering community. Our café is a place where 
                neighbors become friends and memories are made over great food and coffee.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2 className="section-title animate-fadeInUp">Meet Our Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card animate-fadeInUp" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-content">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        .about-page {
          padding-top: 0;
        }

        .about-hero {
          height: 60vh;
          background: linear-gradient(rgba(44, 24, 16, 0.7), rgba(44, 24, 16, 0.5)),
                      url('https://i.ibb.co/ZzKwRCH9/img-539.jpg');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .about-hero-content h1 {
          font-size: 3rem;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .about-hero-content p {
          font-size: 1.2rem;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .our-story {
          padding: 100px 0;
        }

        .story-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .story-text h2 {
          color: #2c1810;
          font-size: 2.5rem;
          margin-bottom: 30px;
        }

        .story-text p {
          color: #666;
          line-height: 1.8;
          margin-bottom: 25px;
          font-size: 1.1rem;
        }

        .story-image img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 15px;
        }

        .stats-section {
          padding: 80px 0;
          background-color: #f8f5f0;
          margin: 0 -20px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .stat-card {
          text-align: center;
          background-color: white;
          padding: 40px 20px;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .stat-icon {
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

        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2c1810;
          margin-bottom: 10px;
        }

        .stat-label {
          color: #666;
          font-weight: 600;
        }

        .values-section {
          padding: 100px 0;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          color: #2c1810;
          margin-bottom: 60px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .value-card {
          background-color: white;
          padding: 40px 30px;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          text-align: center;
        }

        .value-card h3 {
          color: #2c1810;
          font-size: 1.5rem;
          margin-bottom: 20px;
        }

        .value-card p {
          color: #666;
          line-height: 1.6;
        }

        .team-section {
          padding: 100px 0;
          background-color: #f8f5f0;
          margin: 0 -20px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .team-card {
          background-color: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-5px);
        }

        .team-image {
          height: 250px;
          overflow: hidden;
        }

        .team-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .team-content {
          padding: 30px;
          text-align: center;
        }

        .team-content h3 {
          color: #2c1810;
          font-size: 1.3rem;
          margin-bottom: 5px;
        }

        .team-content h4 {
          color: #8B4513;
          font-size: 1rem;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .team-content p {
          color: #666;
          line-height: 1.5;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .about-hero-content h1 {
            font-size: 2.5rem;
          }

          .story-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .story-text h2 {
            font-size: 2rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default About;