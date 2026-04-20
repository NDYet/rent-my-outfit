import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { User } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth(); // Read the authentication context
  const navigate = useNavigate();

  const handleAccountClick = () => {
    if (!user) {
      navigate('/login');
    } else if (user.role === 'admin') {
      navigate('/admin/analytics');
    } else if (user.role === 'seller') {
      navigate('/seller/dashboard');
    } else {
      // Assuming a generic buyer dashboard or default route
      navigate('/browse'); 
    }
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
        fontWeight: 'bold'
      }}>
        <Link to="/">RentMyFit</Link>
      </div>

      <div className="nav-links" style={{
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

      <div className="nav-actions" style={{
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
              {user.role === 'admin' ? 'Admin Portal' : user.role === 'seller' ? 'Seller Hub' : 'My Dashboard'}
            </button>
            <button 
              onClick={() => logout()}
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
    </nav>
  );
};

export default Navbar;
