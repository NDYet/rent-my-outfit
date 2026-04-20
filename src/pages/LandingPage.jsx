import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { ShieldCheck, Sparkles, RefreshCcw } from 'lucide-react';

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ 
        display: 'flex', 
        height: 'calc(100vh - 80px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)'
      }}>
        {/* Left Content */}
        <div style={{ 
          flex: 1, 
          padding: '80px var(--margin-x)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h1 style={{ 
            fontSize: '64px', 
            lineHeight: '1.1',
            marginBottom: '24px'
          }}>
            Wear it <span className="italic-serif champagne-accent">once.</span><br />
            Rent it <span className="italic-serif champagne-accent">forever.</span>
          </h1>
          <p style={{ 
            fontSize: '18px', 
            color: 'var(--slate)', 
            maxWidth: '480px',
            lineHeight: '1.6',
            marginBottom: '40px'
          }}>
            Access the world's most coveted wardrobes. The curated destination for high-fashion outfit rental.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/browse" className="coral-btn">Browse Collection</Link>
            <Link to="/how-it-works" className="ghost-btn" style={{ border: '1px solid var(--midnight)' }}>How It Works</Link>
          </div>
        </div>

        {/* Right Imagery */}
        <div style={{ flex: 1, position: 'relative' }}>
          <img 
            src="/hero_gown.png" 
            alt="Editorial Fashion" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Trust & Process Bar */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
             <div style={{ padding: '16px', backgroundColor: 'var(--midnight)', borderRadius: '50%' }}>
               <Sparkles color="var(--champagne)" size={24} />
             </div>
             <div>
               <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Authenticity Guaranteed</h3>
               <p style={{ fontSize: '14px', color: 'var(--slate)' }}>Curated pieces. Expertly verified.</p>
             </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
             <div style={{ padding: '16px', backgroundColor: 'var(--midnight)', borderRadius: '50%' }}>
               <RefreshCcw color="var(--champagne)" size={24} />
             </div>
             <div>
               <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Wear & Return</h3>
               <p style={{ fontSize: '14px', color: 'var(--slate)' }}>We handle the dry cleaning.</p>
             </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
             <div style={{ padding: '16px', backgroundColor: 'var(--midnight)', borderRadius: '50%' }}>
               <ShieldCheck color="var(--champagne)" size={24} />
             </div>
             <div>
               <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Damage Protection</h3>
               <p style={{ fontSize: '14px', color: 'var(--slate)' }}>Wear it with total confidence.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Occasion Grid */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '40px' }}>Curated for the <br/><span className="italic-serif champagne-accent">Occasion</span></h2>
            <Link to="/browse" style={{ fontWeight: '600', borderBottom: '1px solid var(--midnight)' }}>View All Occasions</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            {/* Box 1 */}
            <div style={{ position: 'relative', height: '500px', borderRadius: 'var(--radius-sharp)', overflow: 'hidden' }}>
              <img src="/lehenga.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '40px', background: 'linear-gradient(transparent, rgba(0,0,11,0.8))', color: 'white' }}>
                <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Grand Weddings</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>Heavy Lehengas & Sherwanis</p>
              </div>
            </div>
            {/* Box 2 */}
            <div style={{ position: 'relative', height: '500px', borderRadius: 'var(--radius-sharp)', overflow: 'hidden' }}>
              <img src="/tuxedo.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '40px', background: 'linear-gradient(transparent, rgba(0,0,11,0.8))', color: 'white' }}>
                <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Black Tie</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>Tuxedos & Formal Suits</p>
              </div>
            </div>
            {/* Box 3 */}
            <div style={{ position: 'relative', height: '500px', borderRadius: 'var(--radius-sharp)', overflow: 'hidden' }}>
              <img src="/red_gown.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '40px', background: 'linear-gradient(transparent, rgba(0,0,11,0.8))', color: 'white' }}>
                <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Cocktail Soirée</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>Evening Gowns & Dresses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
