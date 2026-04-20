import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { CheckCircle2, Calendar, MessageSquare, ChevronRight } from 'lucide-react';

const BookingConfirmation = () => {
  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <Navbar />
      
      <main className="container" style={{ padding: '120px var(--margin-x)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ 
            width: '80px', 
            height: '80px', 
            borderRadius: '50%', 
            backgroundColor: 'rgba(212, 175, 133, 0.1)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            margin: '0 auto 32px'
          }}>
            <CheckCircle2 size={40} color="var(--champagne)" />
          </div>

          <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Your outfit is confirmed!</h1>
          <p style={{ color: 'var(--slate)', fontSize: '18px', marginBottom: '48px' }}>You're going to look incredible.</p>

          <div style={{ 
            backgroundColor: 'white', 
            padding: '32px', 
            borderRadius: 'var(--radius-sharp)', 
            textAlign: 'left',
            marginBottom: '48px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
              <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', color: 'var(--slate)' }}>ORDER ID: RMF-8829-XL04</span>
              <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--coral)' }}>VIEW RECEIPT</span>
            </div>
            
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ width: '100px', height: '120px', borderRadius: '4px', overflow: 'hidden' }}>
                <img src="/lehenga.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Sabyasachi Heritage Lehenga</h3>
                <p style={{ fontSize: '14px', color: 'var(--slate)', marginBottom: '16px' }}>Rental Period: Dec 14 – Dec 17</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#eee' }} />
                  <span style={{ fontSize: '14px', fontWeight: '600' }}>Seller: Priya Sharma</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '64px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '1px', marginBottom: '32px' }}>RENTAL TIMELINE</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '15px', left: '10%', right: '10%', height: '2px', backgroundColor: 'rgba(0,0,0,0.05)', zIndex: 0 }} />
              
              {[
                { label: 'Confirmed', done: true },
                { label: 'Dispatch', done: false },
                { label: 'Receive', done: false },
                { label: 'Return', done: false }
              ].map((step, i) => (
                <div key={i} style={{ position: 'relative', zIndex: 1, textAlign: 'center', flex: 1 }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    backgroundColor: step.done ? 'var(--midnight)' : 'white',
                    border: '2px solid' + (step.done ? 'var(--midnight)' : 'rgba(0,0,0,0.1)'),
                    margin: '0 auto 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    {i + 1}
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: step.done ? 'var(--midnight)' : 'var(--slate)' }}>{step.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
            <button className="ghost-btn" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              border: '1px solid var(--midnight)',
              padding: '16px 32px' 
            }}>
              <Calendar size={18} /> Add to Calendar
            </button>
            <button className="ghost-btn" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              border: '1px solid var(--midnight)',
              padding: '16px 32px' 
            }}>
              <MessageSquare size={18} /> Contact Seller
            </button>
          </div>

          <div style={{ marginTop: '64px' }}>
            <Link to="/browse" style={{ color: 'var(--coral)', fontWeight: '700', fontSize: '14px', letterSpacing: '1px' }}>
              BROWSE MORE LOOKS <ChevronRight size={14} style={{ verticalAlign: 'middle' }} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookingConfirmation;
