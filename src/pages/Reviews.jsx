import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiUser } = FiIcons;

const Reviews = () => {
  const reviews = [
    {
      name: 'Marie Dubois',
      rating: 5,
      date: 'December 2024',
      review: 'Absolutely wonderful! The croissants are the best I\'ve had outside of Paris. The atmosphere is cozy and the staff is incredibly friendly. This has become my daily stop for coffee.',
      avatar: 'https://i.ibb.co/gFTHFcCw/img-363.jpg'
    },
    {
      name: 'Jean-Pierre Martin',
      rating: 5,
      date: 'November 2024',
      review: 'As a food critic, I can confidently say this is the most authentic French café experience you\'ll find. The attention to detail in both food preparation and presentation is exceptional.',
      avatar: 'https://i.ibb.co/QvW61Tz6/img-364.jpg'
    },
    {
      name: 'Sophie Laurent',
      rating: 5,
      date: 'November 2024',
      review: 'Perfect place for business meetings or just relaxing with a book. The coffee is consistently excellent and the pastries are fresh every morning. Highly recommended!',
      avatar: 'https://i.ibb.co/FqxxVtpB/img-365.jpg'
    },
    {
      name: 'Thomas Rousseau',
      rating: 5,
      date: 'October 2024',
      review: 'The pain au chocolat here is incredible! Flaky, buttery, and with just the right amount of chocolate. The espresso is perfectly balanced. This place feels like a little piece of France.',
      avatar: 'https://i.ibb.co/MkY95p1c/img-366.jpg'
    },
    {
      name: 'Camille Moreau',
      rating: 5,
      date: 'October 2024',
      review: 'I come here every weekend with my family. The kids love the hot chocolate and I love the café au lait. The outdoor seating is lovely and the service is always prompt and friendly.',
      avatar: 'https://i.ibb.co/r2BJpS6g/img-367.jpg'
    },
    {
      name: 'Antoine Durand',
      rating: 5,
      date: 'September 2024',
      review: 'The quality here is unmatched. You can taste the difference in every bite and sip. The macarons are works of art and the coffee beans are clearly premium quality.',
      avatar: 'https://i.ibb.co/Hp39qFLB/img-368.jpg'
    },
    {
      name: 'Isabelle Bernard',
      rating: 5,
      date: 'September 2024',
      review: 'Such a charming place! The décor is elegant yet cozy, and the staff makes you feel like family. The tarte tatin is absolutely divine - just like my grandmother used to make.',
      avatar: 'https://i.ibb.co/DDJTc7G1/img-369.jpg'
    },
    {
      name: 'Olivier Petit',
      rating: 5,
      date: 'August 2024',
      review: 'I\'ve been coming here for years and the quality never disappoints. The baristas are true artists and the bakers are masters of their craft. This is what a real café should be.',
      avatar: 'https://i.ibb.co/vCVt0zxM/img-370.jpg'
    },
    {
      name: 'Nathalie Girard',
      rating: 5,
      date: 'August 2024',
      review: 'The atmosphere here is perfect for both work and relaxation. Free WiFi, comfortable seating, and the best coffee in town. The éclairs are my personal favorite!',
      avatar: 'https://i.ibb.co/wNMdNc1G/img-371.jpg'
    }
  ];

  const averageRating = 5.0;
  const totalReviews = reviews.length;

  const StarRating = ({ rating }) => {
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <SafeIcon 
            key={star}
            icon={FiStar}
            className={star <= rating ? 'star filled' : 'star'}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="reviews-page">
      <div className="reviews-hero">
        <div className="reviews-hero-content animate-fadeInUp">
          <h1>Customer Reviews</h1>
          <p>See what our valued customers have to say about their experience</p>
        </div>
      </div>

      <div className="container">
        {/* Reviews Summary */}
        <div className="reviews-summary animate-slideInLeft">
          <div className="summary-card">
            <div className="average-rating">
              <span className="rating-number">{averageRating}</span>
              <StarRating rating={averageRating} />
              <p>Based on {totalReviews} reviews</p>
            </div>
            <div className="rating-breakdown">
              <div className="rating-bar">
                <span>5 stars</span>
                <div className="bar">
                  <div className="fill" style={{width: '100%'}}></div>
                </div>
                <span>{totalReviews}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="review-card animate-fadeInUp" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="review-header">
                <div className="reviewer-info">
                  <div className="avatar">
                    <img src={review.avatar} alt={review.name} />
                  </div>
                  <div className="reviewer-details">
                    <h3>{review.name}</h3>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="review-text">{review.review}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="cta-section animate-fadeInUp">
          <h2>Share Your Experience</h2>
          <p>We'd love to hear about your visit to La Brioche Chaude!</p>
          <a href="#/contact" className="btn">Leave a Review</a>
        </div>
      </div>

      <style jsx>{`
        .reviews-page {
          padding-top: 0;
        }

        .reviews-hero {
          height: 60vh;
          background: linear-gradient(rgba(44, 24, 16, 0.7), rgba(44, 24, 16, 0.5)),
                      url('https://i.ibb.co/pBx0RRFc/img-372.jpg');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .reviews-hero-content h1 {
          font-size: 3rem;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .reviews-hero-content p {
          font-size: 1.2rem;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px;
        }

        .reviews-summary {
          margin-bottom: 60px;
        }

        .summary-card {
          background-color: white;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          text-align: center;
          max-width: 500px;
          margin: 0 auto;
        }

        .average-rating {
          margin-bottom: 30px;
        }

        .rating-number {
          font-size: 3rem;
          font-weight: bold;
          color: #2c1810;
          display: block;
          margin-bottom: 10px;
        }

        .star-rating {
          display: flex;
          justify-content: center;
          gap: 5px;
          margin-bottom: 10px;
        }

        .star {
          color: #ddd;
          font-size: 1.2rem;
        }

        .star.filled {
          color: #FFD700;
        }

        .summary-card p {
          color: #666;
          font-size: 1.1rem;
        }

        .rating-breakdown {
          border-top: 1px solid #eee;
          padding-top: 20px;
        }

        .rating-bar {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 10px;
        }

        .rating-bar span {
          min-width: 60px;
          color: #666;
        }

        .bar {
          flex: 1;
          height: 8px;
          background-color: #eee;
          border-radius: 4px;
          overflow: hidden;
        }

        .fill {
          height: 100%;
          background-color: #FFD700;
          transition: width 0.5s ease;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
        }

        .review-card {
          background-color: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .review-card:hover {
          transform: translateY(-5px);
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .reviewer-info {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .reviewer-details h3 {
          color: #2c1810;
          font-size: 1.1rem;
          margin-bottom: 5px;
        }

        .review-date {
          color: #666;
          font-size: 0.9rem;
        }

        .review-text {
          color: #666;
          line-height: 1.6;
          font-size: 1rem;
        }

        .cta-section {
          text-align: center;
          background-color: #f8f5f0;
          padding: 60px 40px;
          border-radius: 15px;
        }

        .cta-section h2 {
          color: #2c1810;
          font-size: 2rem;
          margin-bottom: 15px;
        }

        .cta-section p {
          color: #666;
          font-size: 1.1rem;
          margin-bottom: 30px;
        }

        @media (max-width: 768px) {
          .reviews-hero-content h1 {
            font-size: 2.5rem;
          }

          .reviews-grid {
            grid-template-columns: 1fr;
          }

          .review-header {
            flex-direction: column;
            gap: 15px;
          }

          .summary-card {
            padding: 30px 20px;
          }

          .rating-number {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Reviews;