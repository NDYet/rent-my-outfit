import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShoppingBag, Store } from 'lucide-react';

const SignUpPage = () => {
  const [role, setRole] = useState('buyer'); // 'buyer' or 'seller'
  const { login } = useAuth();
  const navigate = useNavigate();

  // Dynamic theme based on role selected
  const theme = role === 'buyer' 
    ? { 
        img: '/hero_gown.png', 
        quote: "Style is a way to say who you are without having to speak.",
        author: "RACHEL ZOE",
        btnColor: 'var(--coral)',
        accentColor: 'var(--coral)',
        textColor: 'white'
      }
    : { 
        img: '/tuxedo.png', 
        quote: "Curate your exclusive collection and monetize your high-end assets.",
        author: "THE ATELIER",
        btnColor: 'var(--midnight)',
        accentColor: 'var(--champagne)',
        textColor: 'white'
      };

  const handleSignUp = (e) => {
    e.preventDefault();
    login(role, 'newuser@rentmyfit.com');
    navigate(role === 'seller' ? '/seller/dashboard' : '/browse');
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--cream)', transition: 'all 0.5s ease' }}>
      
      {/* Left Side: Dynamic Editorial Image */}
      <div style={{
        flex: 1,
        position: 'relative',
        backgroundColor: 'var(--midnight)',
        overflow: 'hidden'
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
      <div style={{
        width: '50%',
        padding: '0 var(--margin-x)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: role === 'buyer' ? 'var(--cream)' : '#f1f5f9',
        transition: 'background-color 0.6s ease',
        overflowY: 'auto'
      }}>
        <div style={{ maxWidth: '440px', width: '100%', margin: '0 auto', padding: '60px 0' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
             <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>Join The Platform</h2>
             <p style={{ color: 'var(--slate)', fontSize: '14px' }}>Create your definitive fashion profile.</p>
          </div>

          {/* Interactive Role Toggle */}
          <div style={{ 
            display: 'flex', 
            backgroundColor: 'rgba(0,0,0,0.05)', 
            borderRadius: '12px',
            padding: '4px',
            marginBottom: '32px',
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
               type="button"
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
                 color: role === 'buyer' ? 'var(--midnight)' : 'var(--slate)',
                 border: 'none',
                 cursor: 'pointer'
               }}
            >
               <ShoppingBag size={18} />
               <span style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Renter</span>
            </button>
            
            <button
               type="button"
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
                 color: role === 'seller' ? 'var(--midnight)' : 'var(--slate)',
                 border: 'none',
                 cursor: 'pointer'
               }}
            >
               <Store size={18} />
               <span style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Curator</span>
            </button>
          </div>

          <form onSubmit={handleSignUp}>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', color: 'var(--slate)' }}>First Name</label>
                  <input type="text" placeholder="Jane" style={{ width: '100%', padding: '16px', backgroundColor: 'white', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', fontSize: '14px' }} required />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', color: 'var(--slate)' }}>Last Name</label>
                  <input type="text" placeholder="Doe" style={{ width: '100%', padding: '16px', backgroundColor: 'white', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', fontSize: '14px' }} required />
                </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', color: 'var(--slate)' }}>Email Address</label>
              <input type="email" placeholder="name@example.com" style={{ width: '100%', padding: '16px', backgroundColor: 'white', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', fontSize: '14px' }} required />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', color: 'var(--slate)' }}>Mobile Number</label>
              <div style={{ display: 'flex', backgroundColor: 'white', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
                <span style={{ fontSize: '14px', padding: '16px', borderRight: '1px solid rgba(0,0,0,0.1)', fontWeight: '600', backgroundColor: '#f8fafc', color: 'var(--slate)' }}>+91</span>
                <input type="tel" placeholder="XXXXX XXXXX" style={{ flex: 1, padding: '16px', border: 'none', fontSize: '14px', outline: 'none' }} required />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', color: 'var(--slate)' }}>Password</label>
              <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '16px', backgroundColor: 'white', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', fontSize: '14px' }} required />
            </div>

            <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <input type="checkbox" id="terms" style={{ width: '18px', height: '18px', accentColor: theme.accentColor, cursor: 'pointer' }} required />
              <label htmlFor="terms" style={{ fontSize: '13px', color: 'var(--slate)', cursor: 'pointer' }}>
                I agree to the <span style={{ color: 'var(--midnight)', fontWeight: '700', textDecoration: 'underline' }}>Terms & Conditions</span>
              </label>
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
              transition: 'background-color 0.4s ease',
              border: 'none',
              cursor: 'pointer'
            }}>
              Create Account
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
              gap: '12px',
              cursor: 'pointer'
            }}>
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style={{ width: '18px', height: '18px' }} />
              Google
            </button>

            <div style={{ marginTop: '48px', textAlign: 'center', paddingBottom: '40px' }}>
              <p style={{ fontSize: '14px', color: 'var(--slate)' }}>
                Already have an account? <Link to="/login" style={{ color: 'var(--midnight)', fontWeight: '700' }}>Sign In</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
