import React from 'react';
import SellerLayout from '../components/common/SellerLayout';
import { Download, TrendingUp, ArrowUpRight, Banknote } from 'lucide-react';

const EarningsPage = () => {
  return (
    <SellerLayout>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
        <div>
          <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Earnings Dashboard</h1>
          <p style={{ color: 'var(--slate)', fontSize: '14px' }}>Review your performance and manage your payouts.</p>
        </div>
        <div style={{ backgroundColor: 'rgba(212, 175, 133, 0.2)', padding: '8px 16px', borderRadius: '20px' }}>
           <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '1px', color: 'var(--champagne)' }}>ACCOUNT STANDING: PREMIER SELLER</span>
        </div>
      </header>

      {/* Metric Cards */}
      <div className="metric-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '48px' }}>
        {[
          { label: 'Total Earned', value: '₹12,450', trend: '+12.5% from last month' },
          { label: 'Pending Payout', value: '₹1,240', sub: 'Scheduled for Oct 24th' },
          { label: 'Completed Rentals', value: '84', sub: '100% fulfillment rate' }
        ].map((card, i) => (
          <div key={i} style={{ backgroundColor: 'white', padding: '32px', borderRadius: 'var(--radius-sharp)' }}>
            <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '1px' }}>{card.label}</span>
            <div style={{ fontSize: '40px', fontWeight: '400', marginTop: '16px', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>{card.value}</div>
            {card.trend ? (
              <div style={{ fontSize: '12px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <TrendingUp size={14} /> {card.trend}
              </div>
            ) : (
              <div style={{ fontSize: '12px', color: 'var(--slate)' }}>{card.sub}</div>
            )}
          </div>
        ))}
      </div>

      <div className="dashboard-layout" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '48px', marginBottom: '64px' }}>
        {/* Revenue Chart Mockup */}
        <div className="chart-card" style={{ backgroundColor: 'white', padding: '40px', borderRadius: 'var(--radius-sharp)' }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
             <h3 style={{ fontSize: '18px' }}>Revenue Performance</h3>
             <div style={{ display: 'flex', gap: '16px', fontSize: '11px', fontWeight: '700' }}>
               <span style={{ borderBottom: '2px solid var(--midnight)', paddingBottom: '4px' }}>6 MONTHS</span>
               <span style={{ color: 'var(--slate)' }}>1 YEAR</span>
             </div>
           </div>
           
           <div style={{ height: '300px', width: '100%', position: 'relative' }}>
              {/* SVG Chart Placeholder */}
              <svg viewBox="0 0 800 300" style={{ width: '100%', height: '100%' }}>
                <defs>
                   <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                     <stop offset="0%" style={{ stopColor: 'var(--champagne', stopOpacity: 0.1 }} />
                     <stop offset="100%" style={{ stopColor: 'var(--champagne)', stopOpacity: 0 }} />
                   </linearGradient>
                </defs>
                <path d="M 0 250 Q 150 200 300 180 T 450 150 T 600 100 T 800 50 L 800 300 L 0 300 Z" fill="url(#grad)" />
                <path d="M 0 250 Q 150 200 300 180 T 450 150 T 600 100 T 800 50" fill="none" stroke="var(--champagne)" strokeWidth="3" />
                {/* Data Points */}
                <circle cx="0" cy="250" r="4" fill="var(--midnight)" />
                <circle cx="300" cy="180" r="4" fill="var(--midnight)" />
                <circle cx="600" cy="100" r="4" fill="var(--midnight)" />
                <circle cx="800" cy="50" r="4" fill="var(--midnight)" />
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0 0', fontSize: '11px', fontWeight: '700', color: 'var(--slate)' }}>
                <span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span>
              </div>
           </div>
        </div>

        {/* Payout Card */}
        <div style={{ backgroundColor: 'var(--midnight)', color: 'white', padding: '40px', borderRadius: 'var(--radius-sharp)', display: 'flex', flexDirection: 'column' }}>
           <h3 style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '1px', marginBottom: '40px', color: 'rgba(255,255,255,0.4)' }}>AVAILABLE BALANCE</h3>
           <div style={{ fontSize: '56px', fontFamily: 'var(--font-serif)', marginBottom: '40px' }}>₹4,820</div>
           
           <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: '14px' }}>
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>Linked Account</span>
                <span>HDFC Bank •••• 8291</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: '14px' }}>
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>Next Payout</span>
                <span>Oct 24, 2024</span>
              </div>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '24px' }}>
                *Platform fee (15%) is automatically deducted from each transaction.
              </p>
           </div>
           
           <button className="coral-btn" style={{ padding: '20px', width: '100%', marginTop: '32px' }}>WITHDRAW TO BANK</button>
        </div>
      </div>

      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px' }}>Transaction History</h2>
          <button style={{ background: 'none', borderBottom: '1px solid var(--midnight)', fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Download size={14} /> DOWNLOAD CSV
          </button>
        </div>

        <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-sharp)', overflowX: 'auto' }}>
           <div style={{ minWidth: '800px', display: 'grid', gridTemplateColumns: '1fr 2fr 1.5fr 1fr 1fr 1fr', padding: '20px 32px', borderBottom: '1px solid rgba(0,0,0,0.05)', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', textTransform: 'uppercase' }}>
             <div>Date</div><div>Outfit</div><div>Buyer</div><div>Net Amount</div><div>Fee</div><div>Status</div>
           </div>
           {[
             { date: 'Oct 12, 2024', item: 'Vintage Silk Slip Dress', buyer: 'Elena R.', net: '₹2,450', fee: '₹432', status: 'Completed', img: '/red_gown.png' },
             { date: 'Oct 08, 2024', item: 'Atelier Cashmere Coat', buyer: 'Marcus T.', net: '₹5,820', fee: '₹1,027', status: 'Pending', img: '/lehenga.png' },
             { date: 'Oct 04, 2024', item: 'Midnight Sequin Gown', buyer: 'Sarah J.', net: '₹3,100', fee: '₹547', status: 'Completed', img: '/hero_gown.png' }
           ].map((row, i) => (
             <div key={i} style={{ minWidth: '800px', display: 'grid', gridTemplateColumns: '1fr 2fr 1.5fr 1fr 1fr 1fr', padding: '24px 32px', borderBottom: '1px solid rgba(0,0,0,0.05)', alignItems: 'center', fontSize: '13px' }}>
               <div style={{ color: 'var(--slate)' }}>{row.date}</div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                 <img src={row.img} style={{ width: '40px', height: '40px', borderRadius: '4px', objectFit: 'cover' }} />
                 <span style={{ fontWeight: '700' }}>{row.item}</span>
               </div>
               <div>{row.buyer}</div>
               <div style={{ fontWeight: '700' }}>{row.net}</div>
               <div style={{ color: 'var(--slate)' }}>{row.fee}</div>
               <div>
                  <span style={{ 
                    fontSize: '10px', 
                    fontWeight: '700', 
                    padding: '4px 10px', 
                    borderRadius: '12px',
                    backgroundColor: row.status === 'Completed' ? '#dcfce7' : '#fef3c7',
                    color: row.status === 'Completed' ? '#166534' : '#92400e'
                  }}>{row.status}</span>
               </div>
             </div>
           ))}
        </div>
        <div style={{ textAlign: 'center', padding: '32px' }}>
           <button style={{ background: 'none', borderBottom: '1px solid var(--midnight)', fontSize: '13px', fontWeight: '700' }}>VIEW FULL TRANSACTION HISTORY</button>
        </div>
      </section>

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
          .chart-card {
            padding: 24px !important;
          }
        }
      `}</style>
    </SellerLayout>
  );
};

export default EarningsPage;
