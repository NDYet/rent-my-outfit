import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, Lock } from 'lucide-react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Hardcoded check for demo purposes
    if (email === 'admin@rentmyfit.com' && password === 'admin') {
      login('admin', email);
      navigate('/admin/analytics');
    } else {
      setError('Invalid platform credentials.');
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--midnight)', alignItems: 'center', justifyContent: 'center' }}>
      
      <div style={{ width: '480px', backgroundColor: 'white', padding: '64px 48px', borderRadius: '16px', boxShadow: '0 24px 48px rgba(0,0,0,0.4)', position: 'relative' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
           <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
             <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '50%' }}>
               <ShieldCheck size={40} color="var(--midnight)" />
             </div>
           </div>
           <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 'bold' }}>RentMyFit HQ</h1>
           <p style={{ fontSize: '14px', color: 'var(--slate)', letterSpacing: '1px', marginTop: '8px', textTransform: 'uppercase' }}>RESTRICTED STAFF ACCESS</p>
        </div>

        {error && (
          <div style={{ backgroundColor: '#fef2f2', color: '#ef4444', padding: '16px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', marginBottom: '24px', textAlign: 'center' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', marginBottom: '8px', color: 'var(--slate)', textTransform: 'uppercase' }}>SECURE EMAIL</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@rentmyfit.com"
              style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px', backgroundColor: '#f8fafc' }} 
              required
            />
          </div>

          <div style={{ marginBottom: '40px' }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '800', marginBottom: '8px', color: 'var(--slate)', textTransform: 'uppercase' }}>ACCESS KEY</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px', backgroundColor: '#f8fafc' }} 
              required
            />
          </div>

          <button type="submit" style={{ 
            width: '100%', 
            padding: '16px', 
            backgroundColor: 'var(--midnight)', 
            color: 'white', 
            fontSize: '14px', 
            fontWeight: '700',
            border: 'none',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}>
            <Lock size={16} /> Authenticate Session
          </button>
        </form>

        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <span style={{ fontSize: '11px', color: '#94a3b8' }}>IP LOGGED: 192.168.1.104</span>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
