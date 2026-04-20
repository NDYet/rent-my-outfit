import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShoppingBag, Store } from 'lucide-react';

const LoginPage = () => {
  const [role, setRole] = useState('buyer'); // 'buyer' or 'seller'
  const { login } = useAuth();
  const navigate = useNavigate();

  // Dynamic theme based on role selected
  const theme = role === 'buyer' 
    ? { 
        img: '/hero_gown.png', 
        quote: "Fashion is the most powerful art there is. It's movement, design and architecture all in one.",
        author: "BLAIR WALDORF",
        btnColor: 'var(--coral)',
        accentColor: 'var(--coral)',
        textColor: 'white'
      }
    : { 
        img: '/tuxedo.png', 
        quote: "Style is a way to say who you are without having to speak. Curate your collection.",
        author: "RACHEL ZOE",
        btnColor: 'var(--midnight)',
        accentColor: 'var(--champagne)',
        textColor: 'white'
      };

  const handleLogin = (e) => {
    e.preventDefault();
    login(role, 'demo@rentmyfit.com');
    navigate(role === 'seller' ? '/seller/dashboard' : '/browse');
  };

  return (
    <div className="responsive-flex" style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--cream)', transition: 'all 0.5s ease' }}>
      
      {/* Left Side: Dynamic Editorial Image */}
      <div className="responsive-split-half" style={{
        flex: 1,
        position: 'relative',
        backgroundColor: 'var(--midnight)',
        overflow: 'hidden',
        minHeight: '35vh' /* Ensure it doesn't collapse entirely on mobile */
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `url(${theme.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8,
          transition: 'background-image 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
        }} />
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to top, rgba(0,0,11,0.9) 0%, transparent 60%)'
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '80px',
          left: '80px',
          right: '80px',
          color: theme.textColor,
          zIndex: 2,
          transition: 'all 0.4s ease'
        }}>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '36px',
            fontStyle: 'italic',
            lineHeight: '1.3',
            marginBottom: '24px'
          }}>
            "{theme.quote}"
          </p>
          <div style={{ width: '60px', height: '2px', backgroundColor: theme.accentColor, marginBottom: '12px', transition: 'background-color 0.4s ease' }}></div>
          <p style={{ fontSize: '12px', letterSpacing: '2px', fontWeight: '700' }}>{theme.author}</p>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="responsive-split-half mobile-p-y" style={{
        flex: 1,
        padding: '0 var(--margin-x)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: role === 'buyer' ? 'var(--cream)' : '#f1f5f9',
        transition: 'background-color 0.6s ease'
      }}>
        <div style={{ maxWidth: '440px', width: '100%', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
             <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>Welcome Back</h2>
             <p style={{ color: 'var(--slate)', fontSize: '14px' }}>Please authenticate your session to continue.</p>
          </div>

          {/* Interactive Role Toggle */}
          <div style={{ 
            display: 'flex', 
            backgroundColor: 'rgba(0,0,0,0.05)', 
            borderRadius: '12px',
            padding: '4px',
            marginBottom: '48px',
            position: 'relative'
          }}>
             <div style={{
                position: 'absolute',
                top: '4px',
                left: role === 'buyer' ? '4px' : 'calc(50% - 4px)',
                width: 'calc(50%)',
                height: 'calc(100% - 8px)',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                transition: 'left 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
             }} />
             
            <button
               onClick={() => setRole('buyer')}
               style={{
                 flex: 1,
                 padding: '16px 0',
                 background: 'none',
                 zIndex: 1,
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 gap: '8px',
                 color: role === 'buyer' ? 'var(--midnight)' : 'var(--slate)'
               }}
            >
               <ShoppingBag size={18} />
               <span style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Renter</span>
            </button>
            
            <button
               onClick={() => setRole('seller')}
               style={{
                 flex: 1,
                 padding: '16px 0',
                 background: 'none',
                 zIndex: 1,
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 gap: '8px',
                 color: role === 'seller' ? 'var(--midnight)' : 'var(--slate)'
               }}
            >
               <Store size={18} />
               <span style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Curator</span>
            </button>
          </div>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', color: 'var(--slate)' }}>Email Address</label>
              <input type="email" placeholder="name@example.com" style={{ width: '100%', padding: '16px', backgroundColor: 'white', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', fontSize: '14px' }} required />
            </div>

            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--slate)' }}>Password</label>
                <span style={{ fontSize: '12px', fontWeight: '600', color: theme.accentColor, cursor: 'pointer', transition: 'color 0.3s' }}>Forgot?</span>
              </div>
              <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '16px', backgroundColor: 'white', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', fontSize: '14px' }} required />
            </div>

            <button type="submit" style={{ 
              width: '100%', 
              padding: '18px', 
              fontSize: '14px', 
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              backgroundColor: theme.btnColor,
              color: 'white',
              borderRadius: '8px',
              marginBottom: '24px',
              transition: 'background-color 0.4s ease'
            }}>
              Authenticate Access
            </button>
            
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <span style={{ fontSize: '13px', color: 'var(--slate)' }}>Or proceed instantly using</span>
            </div>

            <button type="button" style={{ 
              width: '100%', 
              padding: '16px', 
              fontSize: '13px',
              fontWeight: '700',
              background: 'white',
              border: '1px solid rgba(0,0,0,0.1)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}>
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style={{ width: '18px', height: '18px' }} />
              Google
            </button>

            <div style={{ marginTop: '48px', textAlign: 'center' }}>
              <p style={{ fontSize: '14px', color: 'var(--slate)' }}>
                Don't have an account? <Link to="/signup" style={{ color: 'var(--midnight)', fontWeight: '700' }}>Join the Platform</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
