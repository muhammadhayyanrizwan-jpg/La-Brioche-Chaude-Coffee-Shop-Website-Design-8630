import React, { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const menuItems = {
    coffee: [
      {
        name: 'Espresso',
        price: '€3.50',
        description: 'Rich and bold single shot of premium espresso',
        image: 'https://i.ibb.co/gL6m1nKb/img-001.jpg'
      },
      {
        name: 'Café au Lait',
        price: '€4.20',
        description: 'Classic French coffee with steamed milk',
        image: 'https://i.ibb.co/bg4M7KWr/img-002.jpg'
      },
      {
        name: 'Cappuccino',
        price: '€4.50',
        description: 'Espresso with steamed milk and foam',
        image: 'https://i.ibb.co/b5Qwcqg8/img-003.jpg'
      },
      {
        name: 'Latte',
        price: '€4.80',
        description: 'Smooth espresso with steamed milk',
        image: 'https://i.ibb.co/BVm7tNg6/img-004.jpg'
      }
    ],
    pastries: [
      {
        name: 'Croissant',
        price: '€2.50',
        description: 'Buttery, flaky French croissant',
        image: 'https://i.ibb.co/b5167xQP/img-005.png'
      },
      {
        name: 'Pain au Chocolat',
        price: '€3.20',
        description: 'Croissant pastry with dark chocolate',
        image: 'https://i.ibb.co/KpgDGK5F/img-006.jpg'
      },
      {
        name: 'Brioche',
        price: '€3.80',
        description: 'Sweet, rich French bread',
        image: 'https://i.ibb.co/7JpNRNL6/img-452.jpg'
      },
      {
        name: 'Éclair',
        price: '€4.50',
        description: 'Choux pastry filled with cream',
        image: 'https://i.ibb.co/Z62jdXzf/img-008.jpg'
      }
    ],
    desserts: [
      {
        name: 'Tarte Tatin',
        price: '€5.50',
        description: 'Upside-down apple tart',
        image: 'https://i.ibb.co/4R3c42WL/img-009.jpg'
      },
      {
        name: 'Mille-feuille',
        price: '€4.80',
        description: 'Layered pastry with cream',
        image: 'https://i.ibb.co/TxzQctYN/img-010.jpg'
      },
      {
        name: 'Macarons',
        price: '€6.00',
        description: 'Assorted French macarons (6 pieces)',
        image: 'https://i.ibb.co/pjK3DSYN/img-011.jpg'
      },
      {
        name: 'Crème Brûlée',
        price: '€5.20',
        description: 'Classic vanilla custard with caramelized sugar',
        image: 'https://i.ibb.co/4wv2Rw75/img-798.jpg'
      }
    ]
  };

  const categories = [
    { id: 'coffee', name: 'Coffee & Beverages' },
    { id: 'pastries', name: 'Fresh Pastries' },
    { id: 'desserts', name: 'Desserts' }
  ];

  return (
    <div className="menu-page">
      <div className="menu-hero">
        <div className="menu-hero-content animate-fadeInUp">
          <h1>Our Menu</h1>
          <p>Discover our selection of premium coffee and authentic French pastries</p>
        </div>
      </div>

      <div className="container">
        <div className="menu-categories animate-slideInLeft">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="menu-items">
          <div className="items-grid">
            {menuItems[activeCategory].map((item, index) => (
              <div key={index} className="menu-item animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-content">
                  <div className="item-header">
                    <h3>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p className="item-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .menu-page {
          padding-top: 0;
        }

        .menu-hero {
          height: 60vh;
          background: linear-gradient(rgba(44, 24, 16, 0.7), rgba(44, 24, 16, 0.5)),
                      url('https://i.ibb.co/8DjGsb64/img-013.jpg');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .menu-hero-content h1 {
          font-size: 3rem;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .menu-hero-content p {
          font-size: 1.2rem;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px;
        }

        .menu-categories {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }

        .category-btn {
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

        .category-btn:hover,
        .category-btn.active {
          background-color: #8B4513;
          color: white;
          transform: translateY(-2px);
        }

        .items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .menu-item {
          background-color: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .menu-item:hover {
          transform: translateY(-5px);
        }

        .item-image {
          height: 200px;
          overflow: hidden;
        }

        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .menu-item:hover .item-image img {
          transform: scale(1.05);
        }

        .item-content {
          padding: 25px;
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .item-header h3 {
          color: #2c1810;
          font-size: 1.3rem;
          font-weight: 600;
        }

        .price {
          color: #8B4513;
          font-size: 1.2rem;
          font-weight: bold;
        }

        .item-description {
          color: #666;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .menu-hero-content h1 {
            font-size: 2.5rem;
          }

          .items-grid {
            grid-template-columns: 1fr;
          }

          .menu-categories {
            flex-direction: column;
            align-items: center;
          }

          .category-btn {
            width: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default Menu;