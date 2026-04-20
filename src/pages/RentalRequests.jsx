import React from 'react';
import SellerLayout from '../components/common/SellerLayout';
import { Search, ChevronDown, User, Star, MessageSquare } from 'lucide-react';

const RentalRequests = () => {
  return (
    <SellerLayout>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px', marginBottom: '48px' }}>
        <div>
          <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Rental Requests</h1>
          <p style={{ color: 'var(--slate)', fontSize: '14px' }}>Manage your garment inquiries</p>
        </div>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', width: '100%', maxWidth: 'max-content' }}>
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)' }} />
            <input type="text" placeholder="Search requests..." style={{ 
              padding: '10px 12px 10px 40px', 
              border: '1px solid rgba(0,0,0,0.1)', 
              borderRadius: '20px',
              fontSize: '13px',
              width: '100%',
              maxWidth: '300px'
            }} />
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '32px', borderBottom: '1px solid rgba(0,0,0,0.05)', marginBottom: '40px', overflowX: 'auto', whiteSpace: 'nowrap', paddingBottom: '4px' }}>
        {['All', 'Pending', 'Accepted', 'Declined'].map((tab, i) => (
          <div key={tab} style={{ 
            padding: '16px 0', 
            fontSize: '14px', 
            fontWeight: i === 1 ? '700' : '500', 
            color: i === 1 ? 'var(--midnight)' : 'var(--slate)',
            borderBottom: i === 1 ? '2px solid var(--coral)' : 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}>
            {tab} <span style={{ fontSize: '11px', backgroundColor: 'rgba(0,0,0,0.05)', padding: '2px 6px', borderRadius: '10px' }}>{i === 1 ? '07' : i === 2 ? '12' : i === 3 ? '02' : '21'}</span>
          </div>
        ))}
      </div>

      {/* Table Mockup */}
      <div className="table-responsive" style={{ backgroundColor: 'white', borderRadius: 'var(--radius-sharp)', overflowX: 'auto' }}>
        <div style={{ minWidth: '800px', display: 'grid', gridTemplateColumns: '2fr 1fr 1.5fr 1fr 1fr 1fr', padding: '20px 32px', borderBottom: '1px solid rgba(0,0,0,0.05)', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <div>Item</div>
          <div>Buyer</div>
          <div>Booking Window</div>
          <div>Offer</div>
          <div>Status</div>
          <div style={{ textAlign: 'right' }}>Actions</div>
        </div>

        {/* Request Rows */}
        {[
          { item: 'Saint Laurent Tuxedo', img: '/tuxedo.png', buyer: 'Sophie M.', handle: '@soph_m', range: 'Oct 12 - Oct 15', days: '4 days', price: '₹18,500', status: 'Pending', overlap: true },
          { item: 'Jacquemus Pleated Skirt', img: '/red_gown.png', buyer: 'Elena R.', handle: '@elena_r', range: 'Oct 18 - Oct 20', days: '3 days', price: '₹12,000', status: 'Pending' },
          { item: 'Sabyasachi Heritage Lehenga', img: '/lehenga.png', buyer: 'Sarah J.', handle: '@sarahj', range: 'Oct 20 - Oct 22', days: '3 days', price: '₹14,500', status: 'Accepted' }
        ].map((row, i) => (
          <div key={i} style={{ minWidth: '800px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1.5fr 1fr 1fr 1fr', padding: '24px 32px', alignItems: 'center', fontSize: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img src={row.img} style={{ width: '60px', height: '60px', borderRadius: '4px', objectFit: 'cover' }} />
                <span style={{ fontWeight: '700' }}>{row.item}</span>
              </div>
              <div>
                <div style={{ fontWeight: '700' }}>{row.buyer}</div>
                <div style={{ fontSize: '12px', color: 'var(--slate)' }}>{row.handle}</div>
              </div>
              <div>
                <div>{row.range}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                   <span style={{ fontSize: '10px', backgroundColor: '#eee', padding: '2px 6px', borderRadius: '4px' }}>{row.days}</span>
                   {row.overlap && <span style={{ fontSize: '10px', color: 'var(--coral)', fontWeight: '700' }}>⚠️ OVERLAP</span>}
                </div>
              </div>
              <div style={{ fontWeight: '700' }}>{row.price}</div>
              <div>
                <span style={{ 
                  fontSize: '11px', 
                  fontWeight: '700', 
                  padding: '4px 12px', 
                  borderRadius: '20px', 
                  backgroundColor: row.status === 'Accepted' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                  color: row.status === 'Accepted' ? '#10b981' : '#f59e0b'
                }}>{row.status}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <ChevronDown size={20} style={{ cursor: 'pointer' }} />
              </div>
            </div>

            {/* Expanded Content (Simulated for First Row) */}
            {i === 0 && (
              <div style={{ padding: '0 32px 32px 108px', marginTop: '-12px' }}>
                <div style={{ display: 'flex', gap: '48px', backgroundColor: '#fcfcfc', padding: '32px', borderRadius: 'var(--radius-sharp)', border: '1px solid rgba(0,0,0,0.02)' }}>
                  <div style={{ flex: 1 }}>
                    <h5 style={{ fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '16px', textTransform: 'uppercase' }}>Message from Buyer</h5>
                    <p style={{ fontStyle: 'italic', fontSize: '14px', lineHeight: '1.6', color: 'var(--midnight)' }}>
                      "Hi! I'm attending a gallery opening in Mumbai and would love to wear your velvet blazer. I promise to take excellent care of it. Let me know if the dates work!"
                    </p>
                  </div>
                  <div style={{ width: '300px', display: 'flex', gap: '32px' }}>
                     <div>
                       <h5 style={{ fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '16px', textTransform: 'uppercase' }}>Buyer Stats</h5>
                       <div style={{ display: 'flex', gap: '24px' }}>
                          <div>
                            <div style={{ fontWeight: '700', fontSize: '18px' }}>4.9</div>
                            <span style={{ fontSize: '10px', color: 'var(--slate)' }}>RATING</span>
                          </div>
                          <div>
                            <div style={{ fontWeight: '700', fontSize: '18px' }}>12</div>
                            <span style={{ fontSize: '10px', color: 'var(--slate)' }}>RENTALS</span>
                          </div>
                       </div>
                       <button style={{ background: 'none', borderBottom: '1px solid var(--midnight)', fontSize: '11px', fontWeight: '700', marginTop: '16px', padding: 0 }}>VIEW PROFILE</button>
                     </div>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center' }}>
                       <button className="coral-btn" style={{ padding: '12px 32px', fontSize: '13px' }}>Accept</button>
                       <button className="ghost-btn" style={{ border: '1px solid var(--midnight)', padding: '12px' }}>Counter Offer</button>
                       <button style={{ background: 'none', fontSize: '12px', color: 'var(--slate)', fontWeight: '600' }}>Decline</button>
                     </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        <div style={{ textAlign: 'center', padding: '24px' }}>
          <button style={{ background: 'none', fontSize: '12px', fontWeight: '700', color: 'var(--slate)', display: 'flex', alignItems: 'center', gap: '8px', margin: '0 auto' }}>
            LOAD MORE REQUESTS <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </SellerLayout>
  );
};

export default RentalRequests;
