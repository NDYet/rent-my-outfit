import React from 'react';
import { useNavigate } from 'react-router-dom';
import SellerLayout from '../components/common/SellerLayout';
import { ChevronLeft, Info } from 'lucide-react';

const AddListingStep2 = () => {
  const navigate = useNavigate();

  return (
    <SellerLayout>
      <header style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '48px' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none' }}><ChevronLeft size={24} /></button>
        <div>
          <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Add New Listing</h1>
          <p style={{ color: 'var(--slate)', fontSize: '14px' }}>Logistics and Policies. Step 2 of 2</p>
        </div>
      </header>

      <div style={{ maxWidth: '800px' }}>
        {/* Pickup Address */}
        <section style={{ marginBottom: '64px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '24px' }}>Pickup Address</h3>
          <p style={{ fontSize: '14px', color: 'var(--slate)', marginBottom: '32px' }}>This address will be shown to buyers who choose the 'Pickup from Seller' option.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '8px' }}>STREET ADDRESS</label>
              <input type="text" placeholder="House No, Road Name, Area" style={{ width: '100%', padding: '12px 0', borderBottom: '1px solid var(--midnight)' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '8px' }}>CITY</label>
              <input type="text" placeholder="Mumbai" style={{ width: '100%', padding: '12px 0', borderBottom: '1px solid var(--midnight)' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '8px' }}>PIN CODE</label>
              <input type="text" placeholder="400001" style={{ width: '100%', padding: '12px 0', borderBottom: '1px solid var(--midnight)' }} />
            </div>
          </div>
        </section>

        {/* Shipping Preferences */}
        <section style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '20px' }}>Shipping Preferences</h3>
            <div style={{ display: 'flex', backgroundColor: 'white', borderRadius: '20px', padding: '4px' }}>
              <button style={{ padding: '8px 24px', borderRadius: '18px', backgroundColor: 'var(--midnight)', color: 'white', fontSize: '12px', fontWeight: '600' }}>I will ship</button>
              <button style={{ padding: '8px 24px', borderRadius: '18px', background: 'none', color: 'var(--slate)', fontSize: '12px', fontWeight: '600' }}>Platform handles</button>
            </div>
          </div>
          
          <div style={{ marginBottom: '32px' }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '8px' }}>ESTIMATED DISPATCH TIME</label>
            <select style={{ width: '100%', padding: '12px 0', borderBottom: '1px solid var(--midnight)' }}>
              <option>Select dispatch time</option>
              <option>Within 24h</option>
              <option>1-2 days</option>
              <option>3+ days</option>
            </select>
          </div>
        </section>

        {/* Cancellation Policy */}
        <section style={{ marginBottom: '64px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '32px' }}>Cancellation Policy</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { id: 'flex', name: 'Flexible', desc: 'Full refund if cancelled 7 days before rental.' },
              { id: 'mod', name: 'Moderate', desc: 'Full refund if cancelled 14 days before rental.' },
              { id: 'str', name: 'Strict', desc: 'Non-refundable if cancelled within 30 days.' }
            ].map(policy => (
              <label key={policy.id} style={{ 
                display: 'flex', 
                gap: '20px', 
                backgroundColor: 'white', 
                padding: '24px', 
                borderRadius: 'var(--radius-sharp)', 
                cursor: 'pointer',
                border: policy.id === 'mod' ? '2px solid var(--midnight)' : '1px solid transparent'
              }}>
                <input type="radio" name="policy" checked={policy.id === 'mod'} style={{ width: 'auto' }} />
                <div>
                  <div style={{ fontWeight: '700', fontSize: '16px', marginBottom: '4px' }}>{policy.name}</div>
                  <div style={{ fontSize: '13px', color: 'var(--slate)' }}>{policy.desc}</div>
                </div>
              </label>
            ))}
          </div>
        </section>

        {/* Rental Rules */}
        <section style={{ marginBottom: '64px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '24px' }}>Rental Rules</h3>
          <textarea 
            placeholder="e.g. No alterations, handle with care, professional cleaning done by me..." 
            style={{ width: '100%', minHeight: '120px', padding: '12px 0', borderBottom: '1px solid var(--midnight)' }} 
          />
        </section>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '24px', paddingBottom: '80px' }}>
          <button onClick={() => navigate('/seller/dashboard')} className="coral-btn" style={{ padding: '20px 80px', fontSize: '16px' }}>
            Publish Listing
          </button>
        </div>
      </div>
    </SellerLayout>
  );
};

export default AddListingStep2;
