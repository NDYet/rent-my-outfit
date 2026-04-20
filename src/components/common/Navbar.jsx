import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAccountClick = () => {
    setIsMobileMenuOpen(false);
    if (!user) {
      navigate('/login');
    } else if (user.role === 'admin') {
      navigate('/admin/analytics');
    } else if (user.role === 'seller') {
      navigate('/seller/dashboard');
    } else {
      navigate('/browse'); 
    }
  };

  const handleLogout = () => {
    setIsMobileMenuOpen(false);
    logout();
  };

  return (
    <nav className="glass-nav" style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--margin-x)'
    }}>
      <div className="logo" style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '24px',
        fontWeight: 'bold',
        zIndex: 1100
      }}>
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>RentMyFit</Link>
      </div>

      {/* Desktop Links */}
      <div className="nav-links hide-on-mobile" style={{
        display: 'flex',
        gap: '40px',
        fontSize: '14px',
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        <Link to="/browse">Browse</Link>
        <Link to="/how-it-works">How It Works</Link>
      </div>

      {/* Desktop Actions */}
      <div className="nav-actions hide-on-mobile" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px'
      }}>
        {user ? (
          <>
            <button 
              onClick={handleAccountClick} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                background: 'var(--midnight)', 
                color: 'white',
                fontSize: '13px', 
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                padding: '10px 20px',
                borderRadius: '8px'
              }}
            >
              <User size={16} />
              {user.role === 'admin' ? 'Admin' : user.role === 'seller' ? 'Seller Hub' : 'Dashboard'}
            </button>
            <button 
              onClick={handleLogout}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--slate)',
                fontSize: '13px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            background: 'none', 
            fontSize: '14px', 
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: 'var(--midnight)',
            padding: '10px 20px',
            borderRadius: '8px',
            border: '2px solid var(--midnight)'
          }}>
            <User size={18} />
            Account
          </Link>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="mobile-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: 'var(--midnight)',
          zIndex: 1100
        }}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'var(--cream)',
          zIndex: 1050,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px'
        }}>
          <Link to="/browse" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '24px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Browse</Link>
          <Link to="/how-it-works" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '24px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>How It Works</Link>
          <div style={{ height: '1px', width: '60px', backgroundColor: 'var(--midnight)', opacity: 0.2 }}></div>
          <button 
            onClick={handleAccountClick}
            style={{ 
              fontSize: '20px', 
              fontWeight: 'bold', 
              textTransform: 'uppercase', 
              letterSpacing: '2px',
              background: 'none',
              color: 'var(--midnight)'
            }}
          >
            {user ? 'My Account' : 'Login / Sign Up'}
          </button>
          {user && (
            <button 
              onClick={handleLogout}
              style={{ 
                fontSize: '16px', 
                fontWeight: '600', 
                textTransform: 'uppercase', 
                letterSpacing: '2px',
                background: 'none',
                color: 'var(--coral)'
              }}
            >
              Log Out
            </button>
          )}
        </div>
      )}

      {/* Responsive Styles Injection */}
      <style>{`
        @media (max-width: 768px) {
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
