import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="nav-left">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <Link to="/" className="logo">
            <img 
              src="https://i.ibb.co/GvdJj6fK/img-036.png" 
              alt="La Brioche Chaude" 
              className="logo-img animate-pulse"
            />
          </Link>
          
          <div className="nav-right">
            {navItems.slice(3).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} />
          </button>
        </nav>

        {isMenuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: rgba(248, 245, 240, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(139, 69, 19, 0.1);
          animation: slideInLeft 0.8s ease-out;
        }

        .header.scrolled {
          background-color: rgba(248, 245, 240, 0.98);
          box-shadow: 0 2px 20px rgba(0,0,0,0.1);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
          position: relative;
        }

        .nav-left,
        .nav-right {
          display: flex;
          gap: 30px;
          flex: 1;
        }

        .nav-left {
          justify-content: flex-start;
        }

        .nav-right {
          justify-content: flex-end;
        }

        .logo {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }

        .logo-img {
          height: 60px;
          width: auto;
          transition: transform 0.3s ease;
        }

        .logo-img:hover {
          transform: scale(1.1);
        }

        .nav-link {
          color: #8B4513;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          padding: 8px 16px;
          border-radius: 5px;
          position: relative;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #A0522D;
          background-color: rgba(139, 69, 19, 0.1);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #8B4513;
          font-size: 24px;
          cursor: pointer;
        }

        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: rgba(248, 245, 240, 0.98);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(139, 69, 19, 0.1);
          padding: 20px;
          flex-direction: column;
          gap: 15px;
        }

        .mobile-nav-link {
          color: #8B4513;
          text-decoration: none;
          font-weight: 600;
          padding: 12px 16px;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          background-color: rgba(139, 69, 19, 0.1);
          color: #A0522D;
        }

        @media (max-width: 768px) {
          .nav {
            height: 70px;
          }

          .nav-left,
          .nav-right {
            display: none;
          }

          .logo-img {
            height: 50px;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-menu {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;