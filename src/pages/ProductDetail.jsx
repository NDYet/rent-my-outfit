import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Heart, Share2, Star, CheckCircle, Shield, Truck, ChevronRight, ChevronLeft } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeThumb, setActiveThumb] = useState(0);
  const [rentDates, setRentDates] = useState({ start: 14, end: 17 }); // Mock selection
  
  // Mock data for the specific product
  const product = {
    name: 'Sabyasachi Heritage Lehenga',
    price: 4500,
    deposit: 500,
    seller: { name: 'Priya Sharma', rating: 4.9, reviews: 124 },
    occasions: ['Wedding', 'Formal', 'Ethnic'],
    images: ['/lehenga.png', '/red_gown.png', '/tuxedo.png', '/hero_gown.png', '/lehenga.png'],
    description: 'A masterpiece from the heritage collection, featuring hand-woven gold silk borders and intricate zardosi work. Perfect for a grand wedding reception or bridal entry.',
  };

  const totalPrice = useMemo(() => {
    const days = rentDates.end - rentDates.start + 1;
    return (product.price * days) + product.deposit;
  }, [rentDates]);

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <Navbar />
      
      <main className="container responsive-flex" style={{ padding: '80px var(--margin-x)', display: 'flex', gap: '80px' }}>
        {/* Left Column: Visuals */}
        <div className="visuals-col" style={{ flex: '0 0 55%' }}>
          <div style={{ position: 'relative', marginBottom: '24px', display: 'flex', gap: '20px', overflow: 'hidden' }}>
            <div style={{ flex: '0 0 100%', borderRadius: 'var(--radius-sharp)', overflow: 'hidden' }}>
              <img src={product.images[activeThumb]} alt={product.name} style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }} />
            </div>
            {/* Partially visible next image to encourage swipe/scroll feel */}
            <div className="hide-on-mobile" style={{ flex: '0 0 20%', borderRadius: 'var(--radius-sharp)', overflow: 'hidden', opacity: 0.5 }}>
              <img src={product.images[(activeThumb + 1) % product.images.length]} alt="Next" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }} />
            </div>
          </div>
          
          <div className="thumbnails-wrapper" style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '10px' }}>
            {product.images.map((img, i) => (
              <div 
                key={i} 
                onClick={() => setActiveThumb(i)}
                style={{
                  minWidth: '80px',
                  width: '80px',
                  height: '80px',
                  borderRadius: 'var(--radius-sharp)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: activeThumb === i ? '2px solid var(--champagne)' : 'none',
                  opacity: activeThumb === i ? 1 : 0.6,
                  flexShrink: 0
                }}
              >
                <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>

          <div className="reviews-section" style={{ marginTop: '80px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '32px' }}>Renter Experiences</h3>
            <div className="reviews-summary responsive-flex" style={{ display: 'flex', gap: '40px', marginBottom: '48px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', fontWeight: '700' }}>4.9</div>
                <div style={{ display: 'flex', gap: '2px', color: 'var(--champagne)', justifyContent: 'center' }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--slate)', marginTop: '8px' }}>124 REVIEWS</div>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[5,4,3,2,1].map(r => (
                  <div key={r} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '12px', width: '10px' }}>{r}</span>
                    <div style={{ flex: 1, height: '4px', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '2px' }}>
                      <div style={{ width: r === 5 ? '80%' : r === 4 ? '15%' : '2%', height: '100%', backgroundColor: 'var(--midnight)', borderRadius: '2px' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[1,2].map(r => (
                <div key={r} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--champagne)' }} />
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '700' }}>Ananya M.</div>
                      <div style={{ fontSize: '12px', color: 'var(--slate)' }}>Oct 12, 2024</div>
                    </div>
                    <div style={{ marginLeft: 'auto', display: 'flex', color: 'var(--champagne)' }}>
                      {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                    </div>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--slate)', lineHeight: '1.6' }}>
                    Wore this for my best friend's sangeet and received so many compliments! The quality is pristine and the fit was exactly as described.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Details & Booking */}
        <div className="details-col" style={{ flex: '0 0 45%' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ marginBottom: '32px' }}>
              <h1 style={{ fontSize: '40px', marginBottom: '16px' }}>{product.name}</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#eee' }} />
                <div>
                  <div style={{ fontSize: '14px', color: 'var(--slate)' }}>Curated by</div>
                  <div style={{ fontSize: '16px', fontWeight: '700' }}>
                    {product.seller.name} <span style={{ fontWeight: '400', fontSize: '14px', color: 'var(--slate)' }}>★ {product.seller.rating} ({product.seller.reviews})</span>
                  </div>
                </div>
                <button style={{ background: 'none', borderBottom: '1px solid var(--midnight)', fontSize: '12px', fontWeight: '700', padding: 0 }}>VIEW PROFILE</button>
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', marginBottom: '16px' }}>SELECT SIZE</h4>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {['XS', 'S', 'M', 'L'].map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      width: '54px',
                      height: '54px',
                      border: '1px solid var(--midnight)',
                      borderRadius: 'var(--radius-sharp)',
                      backgroundColor: selectedSize === size ? 'var(--midnight)' : 'transparent',
                      color: selectedSize === size ? 'white' : 'var(--midnight)',
                      fontWeight: '700'
                    }}
                  >
                    {size}
                  </button>
                ))}
                <div style={{ alignSelf: 'center', fontSize: '12px', textDecoration: 'underline', cursor: 'pointer', fontWeight: '700' }}>SIZE GUIDE</div>
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', marginBottom: '16px' }}>PICK RENTAL DATES</h4>
              <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: 'var(--radius-sharp)', overflowX: 'auto' }}>
                <div style={{ minWidth: '280px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <ChevronLeft size={20} />
                    <span style={{ fontWeight: '700' }}>DECEMBER 2024</span>
                    <ChevronRight size={20} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', textAlign: 'center', fontSize: '12px' }}>
                    {['MO','TU','WE','TH','FR','SA','SU'].map(d => <div key={d} style={{ color: 'var(--slate)', fontWeight: '700' }}>{d}</div>)}
                    {Array.from({ length: 31 }).map((_, i) => {
                      const day = i + 1;
                      const isSelected = day >= rentDates.start && day <= rentDates.end;
                      const isBooked = day === 5 || day === 6;
                      return (
                        <div key={i} style={{
                          padding: '10px 0',
                          cursor: isBooked ? 'default' : 'pointer',
                          backgroundColor: isSelected ? 'var(--coral)' : isBooked ? 'rgba(0,0,0,0.05)' : 'transparent',
                          color: isSelected ? 'white' : isBooked ? 'var(--slate)' : 'inherit',
                          borderRadius: '2px',
                          fontWeight: isSelected ? '700' : '400',
                          opacity: isBooked ? 0.3 : 1
                        }}>
                          {day}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(212, 175, 133, 0.1)', padding: '24px', borderRadius: 'var(--radius-sharp)', marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px' }}>
                <span>₹{product.price}/day × {rentDates.end - rentDates.start + 1} days</span>
                <span>₹{product.price * (rentDates.end - rentDates.start + 1)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px' }}>
                <span>Security Deposit (Refundable)</span>
                <span>₹{product.deposit}</span>
              </div>
              <div style={{ height: '1px', backgroundColor: 'rgba(0,0,0,0.1)', margin: '16px 0' }}></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: '700' }}>GRAND TOTAL</span>
                <span style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', fontWeight: '700' }}>₹{totalPrice}</span>
              </div>
            </div>

            <Link to="/checkout" className="coral-btn" style={{ 
              display: 'block', 
              textAlign: 'center', 
              padding: '20px', 
              fontSize: '16px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Rent Now
            </Link>
            
            <div style={{ marginTop: '24px', display: 'flex', gap: '32px', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: '700' }}><Heart size={16} /> WISHLIST</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: '700' }}><Share2 size={16} /> SHARE</div>
            </div>

            <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', textAlign: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={20} color="var(--champagne)" />
                <span style={{ fontSize: '10px', fontWeight: '700', textTransform: 'uppercase' }}>Authentic</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Shield size={20} color="var(--champagne)" />
                <span style={{ fontSize: '10px', fontWeight: '700', textTransform: 'uppercase' }}>Sustainable</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Truck size={20} color="var(--champagne)" />
                <span style={{ fontSize: '10px', fontWeight: '700', textTransform: 'uppercase' }}>Express</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <style>{`
        @media (max-width: 992px) {
          .visuals-col, .details-col {
            flex: 0 0 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductDetail;
