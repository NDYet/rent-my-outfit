import React from 'react';
import AdminLayout from '../components/common/AdminLayout';
import { Tag, Plus, Filter, MoreVertical, Copy, BarChart3, Clock, CheckCircle2 } from 'lucide-react';

const AdminPromo = () => {
  const campaigns = [
    { code: 'ATELIER20', discount: '20% Off', usage: '482 / 500', status: 'Active', expiry: 'May 30, 2024' },
    { code: 'FIRSTRENT', discount: '₹500 Flat', usage: '1,248 / ∞', status: 'Active', expiry: 'Never' },
    { code: 'WEDDING24', discount: '15% Off', usage: '124 / 200', status: 'Scheduled', expiry: 'Jun 15, 2024' },
    { code: 'DRESSUP', discount: '10% Off', usage: '200 / 200', status: 'Expired', expiry: 'May 01, 2024' }
  ];

  return (
    <AdminLayout>
      <header style={{ marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>Campaign & Promo Manager</h2>
          <p style={{ color: 'var(--slate)', fontSize: '14px' }}>Create and track discount strategies to drive marketplace growth.</p>
        </div>
        <button className="coral-btn" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px',
          padding: '14px 28px',
          fontSize: '14px'
        }}>
          <Plus size={18} /> Create New Promo
        </button>
      </header>

      {/* Campaign Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '48px' }}>
         <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '11px', fontWeight: '800', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Total Savings Generated</div>
            <div style={{ fontSize: '32px', fontWeight: '700' }}>₹2,84,200</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontSize: '12px', fontWeight: '700', marginTop: '8px' }}>
              <BarChart3 size={14} /> +15.4% conversion uplift
            </div>
         </div>
         <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '11px', fontWeight: '800', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Active Campaigns</div>
            <div style={{ fontSize: '32px', fontWeight: '700' }}>08</div>
            <div style={{ fontSize: '12px', color: 'var(--slate)', marginTop: '8px' }}>Average redemption: 64%</div>
         </div>
         <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '11px', fontWeight: '800', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Highest conversion</div>
            <div style={{ fontSize: '32px', fontWeight: '700' }}>ATELIER20</div>
            <div style={{ fontSize: '12px', color: 'var(--slate)', marginTop: '8px' }}>Lifestyle Influencer Campaign</div>
         </div>
      </div>

      <section style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        <div style={{ padding: '24px 32px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Promotional Codes</h3>
          <div style={{ display: 'flex', gap: '12px' }}>
             <button style={{ background: 'none', border: '1px solid #e2e8f0', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
               <Filter size={16} /> Filter
             </button>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.5fr 1.5fr 1fr 1fr 0.5fr', padding: '20px 32px', borderBottom: '1px solid #f1f5f9', backgroundColor: '#f8fafc' }}>
           {['Promo Code', 'Discount Type', 'Usage Limit', 'Expiry', 'Status', '   '].map(h => (
             <span key={h} style={{ fontSize: '11px', fontWeight: '800', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '1px' }}>{h}</span>
           ))}
        </div>

        {campaigns.map((camp, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.5fr 1.5fr 1fr 1fr 0.5fr', padding: '24px 32px', borderBottom: '1px solid #f1f5f9', alignItems: 'center', fontSize: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
               <div style={{ padding: '8px', backgroundColor: '#f1f5f9', borderRadius: '6px' }}><Tag size={16} color="var(--midnight)" /></div>
               <span style={{ fontWeight: '700', fontFamily: 'monospace', letterSpacing: '1px' }}>{camp.code}</span>
               <Copy size={14} color="var(--slate)" style={{ cursor: 'pointer' }} />
            </div>
            <div style={{ fontWeight: '600' }}>{camp.discount}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
               <div style={{ flex: 1, height: '6px', backgroundColor: '#f1f5f9', borderRadius: '3px', position: 'relative', maxWidth: '80px' }}>
                  <div style={{ width: camp.status === 'Expired' ? '100%' : '80%', height: '100%', backgroundColor: camp.status === 'Expired' ? '#cbd5e1' : 'var(--midnight)', borderRadius: '3px' }} />
               </div>
               <span style={{ fontSize: '12px', color: 'var(--slate)' }}>{camp.usage}</span>
            </div>
            <div style={{ color: 'var(--slate)', fontSize: '13px' }}>{camp.expiry}</div>
            <div>
              <span style={{ 
                fontSize: '11px', 
                fontWeight: '700', 
                padding: '4px 8px', 
                borderRadius: '4px',
                backgroundColor: camp.status === 'Active' ? '#ecfdf5' : camp.status === 'Scheduled' ? '#eff6ff' : '#f1f5f9',
                color: camp.status === 'Active' ? '#065f46' : camp.status === 'Scheduled' ? '#1d4ed8' : 'var(--slate)'
              }}>{camp.status}</span>
            </div>
            <div style={{ textAlign: 'right' }}>
               <MoreVertical size={18} color="var(--slate)" style={{ cursor: 'pointer' }} />
            </div>
          </div>
        ))}
      </section>

      {/* Quick Creator Placeholder */}
      <div style={{ marginTop: '48px', backgroundColor: 'white', padding: '32px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'grid', gridTemplateColumns: '1fr 340px', gap: '64px' }}>
         <div>
            <h4 style={{ fontWeight: '700', marginBottom: '16px', fontSize: '18px' }}>Create Seasonal Campaign</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
               <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '8px' }}>CAMPAIGN NAME</label>
                  <input type="text" placeholder="Summer Gala 2024" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px' }} />
               </div>
               <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--slate)', marginBottom: '8px' }}>PERCENTAGE (%)</label>
                  <input type="number" placeholder="15" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px' }} />
               </div>
            </div>
         </div>
         <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center' }}>
            <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '8px', fontSize: '12px', color: 'var(--slate)', display: 'flex', gap: '12px' }}>
               <Clock size={32} />
               <span>New campaigns are pushed to mobile users via push notification within 15 minutes of activation.</span>
            </div>
            <button style={{ backgroundColor: 'var(--midnight)', color: 'white', border: 'none', padding: '14px', borderRadius: '8px', fontSize: '14px', fontWeight: '700' }}>Schedule Launch</button>
         </div>
      </div>
    </AdminLayout>
  );
};

export default AdminPromo;
