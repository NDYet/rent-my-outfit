import React from 'react';
import SellerLayout from '../components/common/SellerLayout';
import { Bell, MoreVertical, CreditCard, Star, Truck, Eye } from 'lucide-react';

const SellerDashboard = () => {
  return (
    <SellerLayout>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
        <div>
          <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Performance Overview</h1>
          <p style={{ color: 'var(--slate)', fontSize: '14px' }}>Welcome back to your atelier dashboard.</p>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <Bell size={24} />
            <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', backgroundColor: 'var(--coral)', borderRadius: '50%' }} />
          </div>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#eee' }} />
        </div>
      </header>

      {/* Metric Cards */}
      <div className="metric-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '48px' }}>
        {[
          { label: 'Active Listings', value: '24', color: 'var(--midnight)' },
          { label: 'Pending Requests', value: '07', color: 'var(--coral)' },
          { label: "This Month's Earnings", value: '₹3,420', color: 'var(--midnight)' },
          { label: 'Total Rentals', value: '156', color: 'var(--midnight)' }
        ].map((card, i) => (
          <div key={i} style={{ backgroundColor: 'white', padding: '32px', borderRadius: 'var(--radius-sharp)' }}>
            <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '1px' }}>{card.label}</span>
            <div style={{ fontSize: '40px', fontWeight: '400', marginTop: '16px', color: card.color, fontFamily: 'var(--font-serif)' }}>{card.value}</div>
          </div>
        ))}
      </div>

      <div className="dashboard-layout" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '48px' }}>
        {/* Recent Requests */}
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px' }}>Recent Requests</h2>
            <button style={{ background: 'none', borderBottom: '1px solid var(--midnight)', fontSize: '12px', fontWeight: '700' }}>VIEW ALL</button>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { item: 'Saint Laurent Tuxedo Blazer', buyer: 'Sophie M.', dates: 'Oct 12 - Oct 15', price: '₹18,500', img: '/tuxedo.png', type: 'NEW REQUEST' },
              { item: 'Jacquemus Pleated Skirt', buyer: 'Elena R.', dates: 'Oct 18 - Oct 20', price: '₹12,000', img: '/red_gown.png', type: 'PENDING RESPONSE' },
              { item: 'Bottega Veneta Mini Pouch', buyer: 'Clara K.', dates: 'Oct 22 - Oct 24', price: '₹9,500', img: '/lehenga.png', type: 'PENDING RESPONSE' }
            ].map((req, i) => (
              <div key={i} style={{ backgroundColor: 'white', padding: '24px', borderRadius: 'var(--radius-sharp)', display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '4px', overflow: 'hidden' }}>
                  <img src={req.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '10px', fontWeight: '700', color: 'var(--coral)', marginBottom: '4px' }}>{req.type}</div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>{req.item}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--slate)' }}>Requested by {req.buyer} • {req.dates}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: '700', fontSize: '16px', marginBottom: '12px' }}>{req.price}</div>
                  <button style={{ 
                    backgroundColor: 'var(--midnight)', 
                    color: 'white', 
                    padding: '8px 16px', 
                    fontSize: '12px', 
                    fontWeight: '700',
                    textTransform: 'uppercase'
                  }}>Review</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Activity Log */}
        <section>
          <h2 style={{ fontSize: '24px', marginBottom: '32px' }}>Activity Log</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { icon: <CreditCard size={18} />, text: 'Payment released for Chanel Tweed Jacket rental.', time: '2 hours ago' },
              { icon: <Star size={18} />, text: 'New 5-star review received from Marcus W.', time: '5 hours ago' },
              { icon: <Truck size={18} />, text: 'Shipping confirmed for Prada Nylon Vest.', time: 'Yesterday' },
              { icon: <Eye size={18} />, text: 'Your Gucci Loafers listing reached 500 views.', time: '2 days ago' }
            ].map((log, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px' }}>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '50%', 
                  backgroundColor: 'rgba(0,0,0,0.05)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {log.icon}
                </div>
                <div>
                  <p style={{ fontSize: '14px', color: 'var(--midnight)', marginBottom: '4px', lineHeight: '1.4' }}>{log.text}</p>
                  <span style={{ fontSize: '12px', color: 'var(--slate)', textTransform: 'uppercase' }}>{log.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ 
            marginTop: '48px', 
            backgroundColor: 'white', 
            padding: '32px', 
            borderRadius: 'var(--radius-sharp)', 
            borderLeft: '4px solid var(--champagne)' 
          }}>
            <h4 style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', marginBottom: '16px' }}>SELLER TIP</h4>
            <p style={{ fontSize: '14px', fontStyle: 'italic', color: 'var(--slate)', lineHeight: '1.6' }}>
              "Listings with at least 5 studio-style photos see a 40% higher rental conversion rate."
            </p>
          </div>
        </section>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          .metric-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 992px) {
          .dashboard-layout {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 576px) {
          .metric-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </SellerLayout>
  );
};

export default SellerDashboard;
