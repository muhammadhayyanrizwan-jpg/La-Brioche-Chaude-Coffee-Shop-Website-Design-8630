import React, { useState } from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX } = FiIcons;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryImages = [
    { src: 'https://i.ibb.co/3mYK8z3y/img-507.jpg', category: 'interior', alt: 'Café interior' },
    { src: 'https://i.ibb.co/wZBwscCB/img-020.jpg', category: 'food', alt: 'Fresh pastries' },
    { src: 'https://i.ibb.co/hR2LHdmC/img-021.jpg', category: 'coffee', alt: 'Coffee preparation' },
    { src: 'https://i.ibb.co/b5DrgNWK/img-775.jpg', category: 'food', alt: 'Delicious desserts' },
    { src: 'https://i.ibb.co/Rp9x7dzG/img-593.jpg', category: 'coffee', alt: 'Espresso art' },
    { src: 'https://i.ibb.co/bgdNzkDy/img-024.jpg', category: 'interior', alt: 'Seating area' },
    { src: 'https://i.ibb.co/TqnjYnyG/img-419.jpg', category: 'food', alt: 'French croissants' },
    { src: 'https://i.ibb.co/4gYWwr7P/img-026.jpg', category: 'coffee', alt: 'Latte art' },
    { src: 'https://i.ibb.co/7NCDMxCR/img-027.jpg', category: 'interior', alt: 'Counter area' },
    { src: 'https://i.ibb.co/xtTWX0Mn/img-028.jpg', category: 'food', alt: 'Pain au chocolat' },
    { src: 'https://i.ibb.co/fYDSV89G/img-029.jpg', category: 'coffee', alt: 'Coffee beans' },
    { src: 'https://i.ibb.co/KpgfjM2D/img-030.jpg', category: 'interior', alt: 'Outdoor seating' },
    { src: 'https://i.ibb.co/Zzy5hZP8/img-031.jpg', category: 'food', alt: 'Macarons display' },
    { src: 'https://i.ibb.co/v4LFj8Js/img-651.jpg', category: 'coffee', alt: 'Cappuccino' },
    { src: 'https://i.ibb.co/VYWQf5ms/img-033.jpg', category: 'interior', alt: 'Reading corner' },
    { src: 'https://i.ibb.co/6c70D3h6/img-034.jpg', category: 'food', alt: 'Tarte selection' }
  ];

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'interior', name: 'Interior' },
    { id: 'food', name: 'Food' },
    { id: 'coffee', name: 'Coffee' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      <div className="gallery-hero">
        <div className="gallery-hero-content animate-fadeInUp">
          <h1>Our Gallery</h1>
          <p>Explore the beauty of La Brioche Chaude through our lens</p>
        </div>
      </div>

      <div className="container">
        <div className="gallery-filters animate-slideInLeft">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item animate-fadeInUp" 
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => openModal(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <span>View Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <SafeIcon icon={FiX} />
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-page {
          padding-top: 0;
        }

        .gallery-hero {
          height: 60vh;
          background: linear-gradient(rgba(44, 24, 16, 0.7), rgba(44, 24, 16, 0.5)),
                      url('https://i.ibb.co/3ykcQkXb/img-035.jpg');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .gallery-hero-content h1 {
          font-size: 3rem;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .gallery-hero-content p {
          font-size: 1.2rem;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px;
        }

        .gallery-filters {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 12px 30px;
          background-color: transparent;
          border: 2px solid #8B4513;
          color: #8B4513;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 16px;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background-color: #8B4513;
          color: white;
          transform: translateY(-2px);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          cursor: pointer;
          aspect-ratio: 1;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover {
          transform: scale(1.02);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(rgba(44, 24, 16, 0.7), rgba(44, 24, 16, 0.5));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeInUp 0.3s ease-out;
        }

        .modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          animation: slideInLeft 0.3s ease-out;
        }

        .modal-content img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 10px;
        }

        .modal-close {
          position: absolute;
          top: -50px;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          padding: 10px;
          border-radius: 50%;
          transition: background-color 0.3s ease;
        }

        .modal-close:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .gallery-hero-content h1 {
            font-size: 2.5rem;
          }

          .gallery-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
          }

          .gallery-filters {
            flex-direction: column;
            align-items: center;
          }

          .filter-btn {
            width: 200px;
          }

          .modal-close {
            top: -40px;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;