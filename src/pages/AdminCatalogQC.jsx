import React from 'react';
import AdminLayout from '../components/common/AdminLayout';
import { Eye, CheckCircle2, XCircle, Info, ShieldCheck, Tag, Star } from 'lucide-react';

const AdminCatalogQC = () => {
  const pendingListings = [
    { id: 1, title: 'Sabyasachi Heritage Lehenga', seller: 'Priya Sharma', price: '₹4,500', category: 'Ethnic Wear', img: '/lehenga.png', submitted: '12m ago' },
    { id: 2, title: 'Valentino Red Silk Gown', seller: 'Sanya Bindra', price: '₹3,200', category: 'Western Wear', img: '/red_gown.png', submitted: '2h ago' },
    { id: 3, title: 'Armani Velvet Tuxedo', seller: 'Karan Mehra', price: '₹2,800', category: 'Western Wear', img: '/tuxedo.png', submitted: '5h ago' }
  ];

  return (
    <AdminLayout>
      <header style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>Catalog Quality Control</h2>
        <p style={{ color: 'var(--slate)', fontSize: '14px' }}>Review and approve new listings. Ensure all items meet the "Curated Canvas" quality standard.</p>
      </header>

      {/* Stats Bar */}
      <div style={{ display: 'flex', gap: '24px', marginBottom: '48px' }}>
        {[
          { label: 'Pending Review', count: '14', color: 'var(--midnight)' },
          { label: 'Approved Today', count: '42', color: '#10b981' },
          { label: 'Flagged for Quality', count: '03', color: 'var(--coral)' }
        ].map((stat, i) => (
          <div key={i} style={{ backgroundColor: 'white', padding: '24px 32px', borderRadius: '12px', border: '1px solid #e2e8f0', flex: 1 }}>
            <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</span>
            <div style={{ fontSize: '24px', fontWeight: '700', marginTop: '8px', color: stat.color }}>{stat.count}</div>
          </div>
        ))}
      </div>

      {/* QC Queue Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
        {pendingListings.map((item) => (
          <div key={item.id} style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '240px' }}>
              <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '16px', left: '16px', backgroundColor: 'rgba(0,0,11,0.8)', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '10px', fontWeight: '700' }}>{item.submitted.toUpperCase()}</div>
              <button style={{ position: 'absolute', bottom: '16px', right: '16px', backgroundColor: 'white', border: 'none', borderRadius: '50%', padding: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <Eye size={18} />
              </button>
            </div>
            
            <div style={{ padding: '24px', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px' }}>{item.title}</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--slate)' }}>
                    <Tag size={12} /> {item.category}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                   <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--coral)' }}>{item.price}</div>
                   <div style={{ fontSize: '10px', color: 'var(--slate)', fontWeight: '700' }}>PER DAY</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', backgroundColor: '#f8fafc', borderRadius: '8px', marginBottom: '24px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#eee' }}></div>
                <span style={{ fontSize: '12px', fontWeight: '600' }}>Seller: {item.seller}</span>
                <span style={{ fontSize: '12px', color: '#10b981', fontWeight: '700', marginLeft: 'auto' }}>★ 4.9</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <button style={{ 
                  padding: '12px', 
                  backgroundColor: 'transparent', 
                  border: '1px solid #fee2e2', 
                  color: '#ef4444', 
                  borderRadius: '8px', 
                  fontSize: '12px', 
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}>
                  <XCircle size={16} /> Reject
                </button>
                <button style={{ 
                  padding: '12px', 
                  backgroundColor: 'var(--midnight)', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '8px', 
                  fontSize: '12px', 
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}>
                  <CheckCircle2 size={16} color="var(--champagne)" /> Approve
                </button>
              </div>
            </div>
            
            <div style={{ borderTop: '1px solid #f1f5f9', padding: '12px 24px', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={14} color="#10b981" />
                <span style={{ fontSize: '10px', fontWeight: '700', color: 'var(--slate)', textTransform: 'uppercase' }}>AI Content Check: 100% Manual Profile Needed</span>
            </div>
          </div>
        ))}

        {/* Empty Placeholder for consistent grid */}
        <div style={{ border: '2px dashed #e2e8f0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.01)' }}>
           <p style={{ fontSize: '14px', color: '#94a3b8', fontWeight: '500' }}>End of current queue.</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminCatalogQC;
