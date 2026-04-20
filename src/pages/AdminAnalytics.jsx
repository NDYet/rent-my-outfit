import React from 'react';
import AdminLayout from '../components/common/AdminLayout';
import { TrendingUp, Users, ArrowUpRight, ArrowDownRight, Package, DollarSign } from 'lucide-react';

const AdminAnalytics = () => {
  return (
    <AdminLayout>
      <header style={{ marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>Platform Analytics</h2>
          <p style={{ color: 'var(--slate)', fontSize: '14px' }}>Real-time overview of RentMyFit ecosystem health.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{ padding: '10px 20px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '13px', fontWeight: '600', backgroundColor: 'white' }}>Download Report</button>
          <button style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: 'var(--midnight)', color: 'white', fontSize: '13px', fontWeight: '600' }}>Refresh Data</button>
        </div>
      </header>

      {/* Metric Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '48px' }}>
        {[
          { label: 'Total GMV', value: '₹4.2M', trend: '+18%', up: true, icon: <DollarSign size={20} /> },
          { label: 'Active Renters', value: '12,482', trend: '+5.2%', up: true, icon: <Users size={20} /> },
          { label: 'Platform Churn', value: '2.4%', trend: '-0.8%', up: false, icon: <ArrowDownRight size={20} /> },
          { label: 'Active Listings', value: '5,840', trend: '+12%', up: true, icon: <Package size={20} /> }
        ].map((card, i) => (
          <div key={i} style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
               <div style={{ color: 'var(--slate)' }}>{card.icon}</div>
               <div style={{ 
                 fontSize: '12px', 
                 fontWeight: '700', 
                 color: card.up ? '#10b981' : '#ef4444', 
                 display: 'flex', 
                 alignItems: 'center', 
                 gap: '4px',
                 backgroundColor: card.up ? '#f0fdf4' : '#fef2f2',
                 padding: '2px 8px',
                 borderRadius: '20px'
               }}>
                 {card.trend}
               </div>
            </div>
            <div style={{ fontSize: '32px', fontWeight: '700', marginBottom: '4px' }}>{card.value}</div>
            <div style={{ fontSize: '13px', color: 'var(--slate)', fontWeight: '500' }}>{card.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
        {/* Main Chart Card */}
        <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
             <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Revenue Growth (GMV)</h3>
             <select style={{ border: 'none', fontSize: '13px', fontWeight: '600', backgroundColor: '#f8fafc', padding: '8px 12px', borderRadius: '6px' }}>
               <option>Last 30 Days</option>
               <option>Last 6 Months</option>
             </select>
           </div>
           <div style={{ height: '300px', width: '100%', position: 'relative' }}>
              <svg viewBox="0 0 600 200" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                <path d="M 0 180 Q 100 150 200 160 T 400 100 T 600 20" fill="none" stroke="var(--midnight)" strokeWidth="3" />
                <path d="M 0 180 Q 100 150 200 160 T 400 100 T 600 20 L 600 200 L 0 200 Z" fill="rgba(0,0,11,0.02)" />
                {/* Horizontal Guide Lines */}
                {[0, 50, 100, 150, 200].map(y => <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="#f1f5f9" strokeWidth="1" />)}
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', fontSize: '11px', color: 'var(--slate)', fontWeight: '600' }}>
                <span>MAY 01</span><span>MAY 08</span><span>MAY 15</span><span>MAY 22</span><span>MAY 29</span>
              </div>
           </div>
        </div>

        {/* Top Categories */}
        <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
           <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '32px' }}>Top Categories</h3>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
             {[
               { name: 'Bridal Ethnic', share: '45%', color: 'var(--midnight)' },
               { name: 'Western Formal', share: '30%', color: 'var(--champagne)' },
               { name: 'Luxury Accessories', share: '15%', color: '#94a3b8' },
               { name: 'Cocktail Wear', share: '10%', color: '#cbd5e1' }
             ].map((cat, i) => (
               <div key={i}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px' }}>
                   <span style={{ fontWeight: '600' }}>{cat.name}</span>
                   <span style={{ fontWeight: '700' }}>{cat.share}</span>
                 </div>
                 <div style={{ height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: cat.share, height: '100%', backgroundColor: cat.color }} />
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAnalytics;
