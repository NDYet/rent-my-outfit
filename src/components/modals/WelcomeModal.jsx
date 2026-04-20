import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ShoppingBag, Store } from 'lucide-react';

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user has already seen the modal or has selected a role
    const hasSeenModal = localStorage.getItem('rentMyFit_onboarded');
    const hasRole = localStorage.getItem('rentMyFit_user');

    if (!hasSeenModal && !hasRole) {
      // Small delay for aesthetic purposes
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSelection = (intent) => {
    localStorage.setItem('rentMyFit_onboarded', 'true');
    setIsOpen(false);

    if (intent === 'buyer') {
      navigate('/browse');
    } else if (intent === 'seller') {
      navigate('/signup'); // Directing potential sellers to join
    }
  };

  const closeGuest = () => {
    localStorage.setItem('rentMyFit_onboarded', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 11, 0.6)',
      backdropFilter: 'blur(20px)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--margin-x)'
    }}>
      <div style={{
        backgroundColor: 'var(--cream)',
        width: '100%',
        maxWidth: '800px',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 24px 48px rgba(0,0,0,0.5)',
        position: 'relative',
        animation: 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        {/* Close Button for Guests */}
        <button 
          onClick={closeGuest}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            zIndex: 10
          }}
        >
          <X size={20} color="var(--midnight)" />
        </button>

        <div style={{ display: 'flex' }}>
           {/* Left: Rent Choice */}
           <div 
             onClick={() => handleSelection('buyer')}
             style={{ 
               flex: 1, 
               padding: '64px 48px', 
               cursor: 'pointer',
               borderRight: '1px solid rgba(0,0,0,0.05)',
               transition: 'background-color 0.3s',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               textAlign: 'center'
             }}
             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'white'}
             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
           >
              <div style={{ padding: '24px', backgroundColor: '#f1f5f9', borderRadius: '50%', marginBottom: '24px' }}>
                 <ShoppingBag size={48} color="var(--midnight)" />
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>I want to Rent</h2>
              <p style={{ color: 'var(--slate)', fontSize: '14px', lineHeight: '1.6' }}>
                Discover designer pieces for your next big occasion. Access thousands of premium wardrobes.
              </p>
           </div>

           {/* Right: List Choice */}
           <div 
             onClick={() => handleSelection('seller')}
             style={{ 
               flex: 1, 
               padding: '64px 48px', 
               cursor: 'pointer',
               transition: 'background-color 0.3s',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               textAlign: 'center'
             }}
             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'white'}
             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
           >
              <div style={{ padding: '24px', backgroundColor: '#fff1f2', borderRadius: '50%', marginBottom: '24px' }}>
                 <Store size={48} color="var(--coral)" />
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>I want to Lend</h2>
              <p style={{ color: 'var(--slate)', fontSize: '14px', lineHeight: '1.6' }}>
                Join the Atelier. Turn your wardrobe into an asset and earn passive income by listing your pieces.
              </p>
           </div>
        </div>
        
        <div style={{ padding: '24px', textAlign: 'center', backgroundColor: '#f8fafc', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
           <p style={{ fontSize: '12px', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>
             Welcome to RentMyFit — The Curated Fashion Marketplace
           </p>
        </div>
      </div>
      
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default WelcomeModal;
