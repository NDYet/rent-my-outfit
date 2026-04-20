import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Truck, MapPin, CreditCard, ShieldCheck, Lock, Smartphone } from 'lucide-react';

const CheckoutPage = () => {
  const [method, setMethod] = useState('home'); // 'home' or 'pickup'
  const [step, setStep] = useState(3); // Mocking active step as 'Payment'

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <Navbar />
      
      <main className="container" style={{ padding: '80px var(--margin-x)', display: 'flex', gap: '80px' }}>
        {/* Left Column: Flow */}
        <div style={{ flex: '0 0 60%' }}>
          <div style={{ display: 'flex', gap: '48px', marginBottom: '64px' }}>
            {['DATES', 'DETAILS', 'PAYMENT'].map((s, i) => (
              <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '12px', opacity: i + 1 === step ? 1 : 0.4 }}>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '50%', 
                  backgroundColor: i + 1 === step ? 'var(--coral)' : 'var(--midnight)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: '700'
                }}>{i + 1}</div>
                <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px' }}>{s}</span>
                {i < 2 && <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(0,0,0,0.1)' }} />}
              </div>
            ))}
          </div>

          <section style={{ marginBottom: '64px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '32px' }}>Delivery Method</h3>
            <div style={{ display: 'flex', gap: '24px' }}>
              <div 
                onClick={() => setMethod('home')}
                style={{ 
                  flex: 1, 
                  padding: '32px', 
                  backgroundColor: 'white', 
                  borderRadius: 'var(--radius-sharp)',
                  border: method === 'home' ? '2px solid var(--midnight)' : 'none',
                  cursor: 'pointer'
                }}
              >
                <Truck size={32} style={{ marginBottom: '16px' }} />
                <h4 style={{ fontWeight: '700', marginBottom: '8px' }}>Home Delivery</h4>
                <p style={{ fontSize: '13px', color: 'var(--slate)' }}>Arrives by Dec 12th</p>
              </div>
              <div 
                onClick={() => setMethod('pickup')}
                style={{ 
                  flex: 1, 
                  padding: '32px', 
                  backgroundColor: 'white', 
                  borderRadius: 'var(--radius-sharp)',
                  border: method === 'pickup' ? '2px solid var(--midnight)' : 'none',
                  cursor: 'pointer'
                }}
              >
                <MapPin size={32} style={{ marginBottom: '16px' }} />
                <h4 style={{ fontWeight: '700', marginBottom: '8px' }}>Pickup from Seller</h4>
                <p style={{ fontSize: '13px', color: 'var(--slate)' }}>Mumbai, MH (free)</p>
              </div>
            </div>
          </section>

          {method === 'home' && (
            <section style={{ marginBottom: '64px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '32px' }}>Shipping Address</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '8px' }}>STREET ADDRESS</label>
                  <input type="text" style={{ width: '100%', padding: '12px 0', borderBottom: '1px solid var(--midnight)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '8px' }}>CITY</label>
                  <input type="text" style={{ width: '100%', padding: '12px 0', borderBottom: '1px solid var(--midnight)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '8px' }}>PIN CODE</label>
                  <input type="text" style={{ width: '100%', padding: '12px 0', borderBottom: '1px solid var(--midnight)' }} />
                </div>
              </div>
            </section>
          )}

          <section>
            <h3 style={{ fontSize: '24px', marginBottom: '32px' }}>Payment Method</h3>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
               {/* Mock Payment Icons */}
               <div style={{ padding: '8px 16px', backgroundColor: 'white', borderRadius: '4px', fontSize: '12px', fontWeight: '700' }}>UPI</div>
               <div style={{ padding: '8px 16px', backgroundColor: 'white', borderRadius: '4px', fontSize: '12px', fontWeight: '700' }}>CARD</div>
               <div style={{ padding: '8px 16px', backgroundColor: 'white', borderRadius: '4px', fontSize: '12px', fontWeight: '700' }}>NET BANKING</div>
            </div>
            
            <div style={{ maxWidth: '400px' }}>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '8px' }}>CARD NUMBER</label>
                <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--midnight)' }}>
                  <CreditCard size={18} style={{ marginRight: '12px' }} />
                  <input type="text" placeholder="•••• •••• •••• ••••" style={{ flex: 1, padding: '12px 0', border: 'none' }} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '24px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '8px' }}>EXPIRY</label>
                  <input type="text" placeholder="MM/YY" style={{ width: '100%', padding: '12px 0', borderBottom: '1px solid var(--midnight)' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '8px' }}>CVV</label>
                  <input type="text" placeholder="•••" style={{ width: '100%', padding: '12px 0', borderBottom: '1px solid var(--midnight)' }} />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Order Summary */}
        <div style={{ flex: '0 0 40%' }}>
          <div style={{ position: 'sticky', top: '120px', backgroundColor: 'white', padding: '40px', borderRadius: 'var(--radius-sharp)' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '32px' }}>Order Summary</h3>
            
            <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '4px', overflow: 'hidden' }}>
                <img src="/lehenga.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontSize: '16px', fontWeight: '700' }}>Sabyasachi Heritage Lehenga</div>
                <div style={{ fontSize: '13px', color: 'var(--slate)', marginTop: '4px' }}>Size M · 4-Day Rental</div>
                <div style={{ fontSize: '12px', color: 'var(--slate)', marginTop: '8px' }}>Dec 14 – Dec 17</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <span style={{ color: 'var(--slate)' }}>Rental Fee (4 days)</span>
                <span>₹18,000</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <span style={{ color: 'var(--slate)' }}>Security Deposit</span>
                <span>₹500</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <span style={{ color: 'var(--slate)' }}>Delivery Fee</span>
                <span>{method === 'home' ? '₹150' : 'FREE'}</span>
              </div>
            </div>

            <div style={{ margin: '32px 0', display: 'flex', gap: '12px' }}>
              <input type="text" placeholder="PROMO CODE" style={{ 
                flex: 1, 
                padding: '12px 0', 
                borderBottom: '1px solid rgba(0,0,0,0.1)',
                fontSize: '12px' 
              }} />
              <button style={{ background: 'none', borderBottom: '1px solid var(--midnight)', fontWeight: '700', fontSize: '12px' }}>APPLY</button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
              <span style={{ fontWeight: '700' }}>GRAND TOTAL</span>
              <span style={{ fontSize: '28px', fontFamily: 'var(--font-serif)', fontWeight: '700' }}>₹{method === 'home' ? '18,650' : '18,500'}</span>
            </div>

            <Link to="/confirmation" className="coral-btn" style={{ 
              display: 'block', 
              textAlign: 'center', 
              padding: '20px', 
              fontSize: '16px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Confirm & Pay
            </Link>

            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '10px', fontWeight: '700', color: 'var(--slate)', textTransform: 'uppercase' }}>
                <Lock size={14} /> Encrypted Secure Checkout
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '10px', fontWeight: '700', color: 'var(--slate)', textTransform: 'uppercase' }}>
                <ShieldCheck size={14} /> Authenticity Guaranteed
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
