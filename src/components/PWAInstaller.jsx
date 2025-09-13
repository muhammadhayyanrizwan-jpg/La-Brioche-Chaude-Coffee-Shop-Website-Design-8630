import React, { useState, useEffect } from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDownload, FiX } = FiIcons;

const PWAInstaller = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Show install prompt after 10 seconds
    const timer = setTimeout(() => {
      if (deferredPrompt) {
        setShowInstallPrompt(true);
      }
    }, 10000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      clearTimeout(timer);
    };
  }, [deferredPrompt]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  const handleClosePrompt = () => {
    setShowInstallPrompt(false);
  };

  if (!showInstallPrompt) return null;

  return (
    <div className="pwa-installer">
      <div className="install-card">
        <button className="close-btn" onClick={handleClosePrompt}>
          <SafeIcon icon={FiX} />
        </button>
        
        <div className="install-content">
          <div className="install-icon">
            <SafeIcon icon={FiDownload} />
          </div>
          <h3>Install Our App</h3>
          <p>Get the best experience with our mobile app. Install now for faster access and offline features!</p>
          
          <div className="install-actions">
            <button className="btn install-btn" onClick={handleInstallClick}>
              Install App
            </button>
            <button className="btn-secondary" onClick={handleClosePrompt}>
              Maybe Later
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pwa-installer {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeInUp 0.5s ease-out;
        }

        .install-card {
          background-color: white;
          border-radius: 15px;
          padding: 30px;
          max-width: 400px;
          width: 90%;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          animation: slideInLeft 0.5s ease-out;
        }

        .close-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          background: none;
          border: none;
          font-size: 20px;
          color: #666;
          cursor: pointer;
          padding: 5px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .close-btn:hover {
          background-color: #f0f0f0;
        }

        .install-content {
          text-align: center;
        }

        .install-icon {
          width: 60px;
          height: 60px;
          background-color: #8B4513;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: white;
          font-size: 24px;
        }

        .install-content h3 {
          color: #2c1810;
          margin-bottom: 15px;
          font-size: 24px;
        }

        .install-content p {
          color: #666;
          margin-bottom: 25px;
          line-height: 1.5;
        }

        .install-actions {
          display: flex;
          gap: 15px;
          flex-direction: column;
        }

        .install-btn {
          background-color: #8B4513;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .install-btn:hover {
          background-color: #A0522D;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background-color: transparent;
          color: #8B4513;
          border: 2px solid #8B4513;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background-color: #8B4513;
          color: white;
        }

        @media (max-width: 480px) {
          .install-card {
            padding: 20px;
          }

          .install-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default PWAInstaller;