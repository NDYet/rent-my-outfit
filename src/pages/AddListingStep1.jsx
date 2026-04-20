import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SellerLayout from '../components/common/SellerLayout';
import { Upload, X, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const AddListingStep1 = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState(['/lehenga.png']); // Mock one uploaded

  return (
    <SellerLayout>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
        <div>
          <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Add New Listing</h1>
          <p style={{ color: 'var(--slate)', fontSize: '14px' }}>Transform your wardrobe into an investment. Step 1 of 2</p>
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <button style={{ background: 'none', borderBottom: '1px solid var(--midnight)', fontSize: '12px', fontWeight: '700' }}>SAVE DRAFT</button>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
        {/* Left Half: Imagery */}
        <section>
          <h4 style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', marginBottom: '24px', color: 'var(--slate)' }}>GARMENT IMAGERY</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <div style={{ 
              gridColumn: 'span 3', 
              height: '400px', 
              border: '2px dashed rgba(0,0,0,0.1)', 
              borderRadius: 'var(--radius-sharp)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backgroundColor: 'white',
              marginBottom: '16px'
            }}>
              <Upload size={32} style={{ marginBottom: '16px', color: 'var(--slate)' }} />
              <p style={{ fontSize: '14px', fontWeight: '600' }}>Drag and drop high-res images</p>
              <p style={{ fontSize: '12px', color: 'var(--slate)', marginTop: '8px' }}>Min 1200x1500px recommended</p>
            </div>
            
            {/* Grid Slots */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} style={{ 
                aspectRatio: '1/1', 
                backgroundColor: 'white', 
                borderRadius: 'var(--radius-sharp)', 
                border: i === 0 ? '2px solid var(--champagne)' : '1px solid rgba(0,0,0,0.05)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                {images[i] ? (
                  <>
                    <img src={images[i]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <button style={{ position: 'absolute', top: '8px', right: '8px', background: 'white', borderRadius: '50%', padding: '4px' }}><X size={12} /></button>
                    {i === 0 && <div style={{ position: 'absolute', bottom: '8px', left: '8px', backgroundColor: 'var(--midnight)', color: 'white', fontSize: '10px', padding: '2px 6px', fontWeight: '700' }}>MAIN</div>}
                  </>
                ) : (
                  <Plus size={20} color="var(--slate)" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Right Half: Details */}
        <section>
          <div style={{ marginBottom: '32px' }}>
             <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '8px' }}>OUTFIT TITLE</label>
             <input type="text" placeholder="e.g. Midnight Velvet Gala Gown" style={{ width: '100%', fontSize: '24px', padding: '12px 0', borderBottom: '1px solid var(--midnight)', fontFamily: 'var(--font-serif)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '8px' }}>CATEGORY</label>
              <select style={{ width: '100%', padding: '12px 0', borderBottom: '1px solid var(--midnight)' }}>
                <option>Select Category</option>
                <option>Ethnic Wear</option>
                <option>Western Wear</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '8px' }}>SIZE</label>
              <select style={{ width: '100%', padding: '12px 0', borderBottom: '1px solid var(--midnight)' }}>
                <option>Select Size</option>
                <option>XS</option><option>S</option><option>M</option><option>L</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '16px' }}>OCCASION</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Wedding', 'Party', 'Formal', 'Cocktail', 'Prom'].map(occ => (
                <button key={occ} style={{
                  padding: '8px 16px',
                  fontSize: '12px',
                  fontWeight: '600',
                  border: '1px solid var(--midnight)',
                  backgroundColor: occ === 'Wedding' ? 'var(--midnight)' : 'transparent',
                  color: occ === 'Wedding' ? 'white' : 'var(--midnight)',
                  borderRadius: '20px'
                }}>{occ}</button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '8px' }}>CONDITION</label>
            <div style={{ display: 'flex', backgroundColor: 'white', borderRadius: 'var(--radius-sharp)', overflow: 'hidden' }}>
              {['Like New', 'Good', 'Fair'].map(cond => (
                <button key={cond} style={{
                  flex: 1,
                  padding: '12px',
                  fontSize: '12px',
                  fontWeight: '700',
                  backgroundColor: cond === 'Like New' ? 'var(--coral)' : 'transparent',
                  color: cond === 'Like New' ? 'white' : 'var(--midnight)',
                  borderRight: '1px solid rgba(0,0,0,0.05)'
                }}>{cond}</button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '8px' }}>DESCRIPTION</label>
            <textarea placeholder="Tell the story of this piece..." style={{ width: '100%', minHeight: '120px', padding: '12px 0', borderBottom: '1px solid var(--midnight)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '40px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '8px' }}>RENT PRICE / DAY</label>
              <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--midnight)' }}>
                <span style={{ fontWeight: '700', marginRight: '8px' }}>₹</span>
                <input type="text" placeholder="2500" style={{ flex: 1, padding: '12px 0', border: 'none' }} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '8px' }}>SECURITY DEPOSIT</label>
              <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--midnight)' }}>
                <span style={{ fontWeight: '700', marginRight: '8px' }}>₹</span>
                <input type="text" placeholder="5000" style={{ flex: 1, padding: '12px 0', border: 'none' }} />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div style={{ padding: '80px 0', borderTop: '1px solid rgba(0,0,0,0.05)', marginTop: '40px' }}>
        <h4 style={{ fontSize: '18px', marginBottom: '32px' }}>Availability</h4>
        <div style={{ display: 'flex', gap: '64px' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '14px', color: 'var(--slate)', marginBottom: '24px' }}>Toggle dates to manage bookings. Red dates are already booked.</p>
            <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: 'var(--radius-sharp)', maxWidth: '400px' }}>
              {/* Reuse Calendar logic simplified */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                <ChevronLeft size={20} />
                <span style={{ fontWeight: '700' }}>DECEMBER 2024</span>
                <ChevronRight size={20} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', textAlign: 'center', fontSize: '12px' }}>
                {['M','T','W','T','F','S','S'].map(d => <div key={d} style={{ color: 'var(--slate)', fontWeight: '700' }}>{d}</div>)}
                {Array.from({ length: 31 }).map((_, i) => (
                  <div key={i} style={{ 
                    padding: '10px 0', 
                    borderRadius: '2px',
                    backgroundColor: i === 7 || i === 8 || i === 9 ? 'var(--midnight)' : 'transparent',
                    color: i === 7 || i === 8 || i === 9 ? 'white' : 'inherit'
                  }}>
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ width: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', gap: '24px' }}>
            <div style={{ display: 'flex', gap: '16px', fontSize: '12px', fontWeight: '600' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <div style={{ width: '12px', height: '12px', border: '1px solid #ddd' }} /> Unavailable
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--midnight)' }} /> Booked
               </div>
            </div>
            <button 
              onClick={() => navigate('/seller/list/step2')}
              className="coral-btn" 
              style={{ padding: '20px 64px', fontSize: '16px' }}
            >
              Continue to Step 2
            </button>
          </div>
        </div>
      </div>
    </SellerLayout>
  );
};

export default AddListingStep1;
