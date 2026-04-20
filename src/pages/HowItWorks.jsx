import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('renter');

  const renterSteps = [
    { num: '01', title: 'The Discovery', desc: 'Browse our curated archive of designer wear. Filter by silhouette and occasion until the perfect piece speaks to you.' },
    { num: '02', title: 'The Reservation', desc: 'Secure your dates for a fraction of the retail price. A fully refundable security deposit is held securely in escrow.' },
    { num: '03', title: 'The Entrance', desc: 'Arrive flawlessly. Wear it, love it, and pack it in our return bag. We handle all the post-event dry cleaning.' }
  ];

  const curatorSteps = [
    { num: '01', title: 'Curate The Showroom', desc: 'Snap editorial photos of your designer assets. Set your rental rate and let our admin team authenticate your listing.' },
    { num: '02', title: 'White-Glove Handover', desc: 'When a verified renter requests your piece, preview their trust score. Accept it, and use our prepaid shipping.' },
    { num: '03', title: 'Passive Prestige', desc: 'Watch your wardrobe pay for itself. Weekly payouts drop into your account, fully backed by our security deposit policies.' }
  ];

  const currentSteps = activeTab === 'renter' ? renterSteps : curatorSteps;

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1, overflow: 'hidden' }}>
        <section style={{ padding: '80px 0 40px 0', textAlign: 'center', position: 'relative' }}>
          <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
            <h1 style={{ fontSize: '56px', marginBottom: '24px', fontFamily: 'var(--font-serif)' }}>The Fashion Roadmap</h1>
            <p style={{ fontSize: '18px', color: 'var(--slate)', lineHeight: '1.6', fontStyle: 'italic' }}>
              Your journey to circular fashion starts here.
            </p>
          </div>
        </section>

        {/* Role Toggle Tabs */}
        <section style={{ padding: '20px 0', backgroundColor: 'transparent', position: 'relative', zIndex: 100 }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '48px' }}>
            <button 
              onClick={() => setActiveTab('renter')}
              style={{
                background: 'none',
                fontSize: '14px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                paddingBottom: '12px',
                color: activeTab === 'renter' ? 'var(--midnight)' : 'var(--slate)',
                borderBottom: activeTab === 'renter' ? '3px solid var(--coral)' : '3px solid transparent',
              }}
            >
              The Renter's Red Carpet
            </button>
            <button 
              onClick={() => setActiveTab('curator')}
              style={{
                background: 'none',
                fontSize: '14px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                paddingBottom: '12px',
                color: activeTab === 'curator' ? 'var(--midnight)' : 'var(--slate)',
                borderBottom: activeTab === 'curator' ? '3px solid var(--midnight)' : '3px solid transparent',
              }}
            >
              The Curator's Showroom
            </button>
          </div>
        </section>

        <section style={{ padding: '80px 0', minHeight: '600px', display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{ maxWidth: '1200px', width: '100%' }}>
            
            {/* Desktop Roadmap view */}
            <div className="hide-on-mobile" style={{ display: 'flex', flexDirection: 'column' }}>
              
              {/* ROW 1: Top Text (Step 1 & Step 3) */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '0 5%' }}>
                <div style={{ width: '30%', textAlign: 'center', paddingBottom: '16px', opacity: 0, animation: 'fadeInUp 0.6s forwards 0.2s' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Step 1</h3>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: activeTab === 'renter' ? 'var(--coral)' : 'var(--slate)', marginBottom: '8px' }}>{currentSteps[0].title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--slate)', lineHeight: '1.5' }}>{currentSteps[0].desc}</p>
                </div>
                <div style={{ width: '30%' }}></div> {/* Empty space for middle step */}
                <div style={{ width: '30%', textAlign: 'center', paddingBottom: '16px', opacity: 0, animation: 'fadeInUp 0.6s forwards 0.6s' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Step 3</h3>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: activeTab === 'renter' ? 'var(--coral)' : 'var(--slate)', marginBottom: '8px' }}>{currentSteps[2].title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--slate)', lineHeight: '1.5' }}>{currentSteps[2].desc}</p>
                </div>
              </div>

              {/* ROW 2: The Winding Road & Badges */}
              <div style={{ position: 'relative', width: '100%', height: '160px' }}>
                <svg viewBox="0 0 1200 160" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
                  <path 
                    d="M -50 40 C 300 40, 300 120, 600 120 C 900 120, 900 40, 1250 40" 
                    fill="none" 
                    stroke="var(--midnight)" 
                    strokeWidth="32" 
                    strokeLinecap="round"
                  />
                  <path 
                    d="M -50 40 C 300 40, 300 120, 600 120 C 900 120, 900 40, 1250 40" 
                    fill="none" 
                    stroke="var(--cream)" 
                    strokeWidth="4" 
                    strokeDasharray="20 20"
                  />
                </svg>

                {/* Badges */}
                <div style={{ position: 'absolute', top: '8px', left: '20%', transform: 'translateX(-50%)', width: '64px', height: '64px', borderRadius: '50%', backgroundColor: activeTab === 'renter' ? 'var(--coral)' : 'var(--midnight)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '24px', fontFamily: 'var(--font-serif)', boxShadow: '0 8px 24px rgba(0,0,0,0.2)', border: '4px solid var(--cream)', zIndex: 2 }}>{currentSteps[0].num}</div>
                <div style={{ position: 'absolute', top: '88px', left: '50%', transform: 'translateX(-50%)', width: '64px', height: '64px', borderRadius: '50%', backgroundColor: activeTab === 'renter' ? 'var(--coral)' : 'var(--midnight)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '24px', fontFamily: 'var(--font-serif)', boxShadow: '0 8px 24px rgba(0,0,0,0.2)', border: '4px solid var(--cream)', zIndex: 2 }}>{currentSteps[1].num}</div>
                <div style={{ position: 'absolute', top: '8px', left: '80%', transform: 'translateX(-50%)', width: '64px', height: '64px', borderRadius: '50%', backgroundColor: activeTab === 'renter' ? 'var(--coral)' : 'var(--midnight)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '24px', fontFamily: 'var(--font-serif)', boxShadow: '0 8px 24px rgba(0,0,0,0.2)', border: '4px solid var(--cream)', zIndex: 2 }}>{currentSteps[2].num}</div>
              </div>

              {/* ROW 3: Bottom Text (Step 2) */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 5%' }}>
                <div style={{ width: '30%' }}></div>
                <div style={{ width: '30%', textAlign: 'center', paddingTop: '16px', opacity: 0, animation: 'fadeInUp 0.6s forwards 0.4s' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Step 2</h3>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: activeTab === 'renter' ? 'var(--coral)' : 'var(--slate)', marginBottom: '8px' }}>{currentSteps[1].title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--slate)', lineHeight: '1.5' }}>{currentSteps[1].desc}</p>
                </div>
                <div style={{ width: '30%' }}></div>
              </div>
            </div>

            {/* Mobile Vertical View */}
            <div className="mobile-only" style={{ display: 'none', flexDirection: 'column', gap: '48px' }}>
              {currentSteps.map((step, index) => (
                <div key={index} style={{ textAlign: 'center', opacity: 0, animation: 'fadeInUp 0.6s forwards', animationDelay: `${index * 0.2}s` }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: activeTab === 'renter' ? 'var(--coral)' : 'var(--midnight)', margin: '0 auto 16px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '20px', fontFamily: 'var(--font-serif)', border: '4px solid var(--cream)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    {step.num}
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '8px' }}>Step {index + 1}</h3>
                  <h4 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: activeTab === 'renter' ? 'var(--coral)' : 'var(--slate)', marginBottom: '12px' }}>{step.title}</h4>
                  <p style={{ fontSize: '15px', color: 'var(--slate)', lineHeight: '1.6', maxWidth: '320px', margin: '0 auto' }}>{step.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '64px' }}>
                {activeTab === 'renter' ? (
                  <Link to="/browse" className="coral-btn" style={{ fontSize: '16px', padding: '16px 32px' }}>Start Your Journey</Link>
                ) : (
                  <Link to="/signup" className="ghost-btn" style={{ fontSize: '16px', padding: '16px 32px', border: '2px solid var(--midnight)' }}>Open Your Atelier</Link>
                )}
            </div>

          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .hide-on-mobile { display: none !important; }
          .mobile-only { display: flex !important; }
          h1 { font-size: 36px !important; }
        }
      `}</style>
    </div>
  );
};

export default HowItWorks;
