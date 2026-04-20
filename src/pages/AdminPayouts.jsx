import React from 'react';
import AdminLayout from '../components/common/AdminLayout';
import { Banknote, Clock, CheckCircle, Download, ExternalLink, Calendar } from 'lucide-react';

const AdminPayouts = () => {
  const payoutBatches = [
    { id: 'BAT-2024-05A', period: 'May 01 - May 14', amount: '₹12,40,500', sellers: 42, status: 'Processing' },
    { id: 'BAT-2024-04B', period: 'Apr 15 - Apr 30', amount: '₹18,20,000', sellers: 68, status: 'Settled' },
    { id: 'BAT-2024-04A', period: 'Apr 01 - Apr 14', amount: '₹11,80,200', sellers: 35, status: 'Settled' }
  ];

  return (
    <AdminLayout>
      <header style={{ marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>Payout Management</h2>
          <p style={{ color: 'var(--slate)', fontSize: '14px' }}>Batch process seller earnings and manage platform financial cycles.</p>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
           <button style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', padding: '12px 24px', borderRadius: '10px', fontSize: '14px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
             <Download size={18} /> Tax Report
           </button>
           <button style={{ backgroundColor: 'var(--midnight)', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '10px', fontSize: '14px', fontWeight: '700' }}>
             Initialize New Batch
           </button>
        </div>
      </header>

      {/* Financial Overview */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '48px' }}>
        {[
          { label: 'Next Batch Total', value: '₹4,82,000', sub: 'Estimated for May 28th', icon: <Clock size={20} color="#f59e0b" /> },
          { label: 'Total Settled (MTD)', value: '₹12,40,500', sub: 'Across 42 Sellers', icon: <CheckCircle size={20} color="#10b981" /> },
          { label: 'Pending Adjustments', value: '₹14,200', sub: '3 Dispute holds applied', icon: <Banknote size={20} color="var(--coral)" /> }
        ].map((card, i) => (
          <div key={i} style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
               {card.icon}
               <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '1px' }}>{card.label}</span>
            </div>
            <div style={{ fontSize: '32px', fontWeight: '700', marginBottom: '4px' }}>{card.value}</div>
            <div style={{ fontSize: '13px', color: 'var(--slate)' }}>{card.sub}</div>
          </div>
        ))}
      </div>

      <section style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        <div style={{ padding: '24px 32px', borderBottom: '1px solid #f1f5f9' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Batch History</h3>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.5fr 1fr 1fr 1fr 0.5fr', padding: '20px 32px', borderBottom: '1px solid #f1f5f9', backgroundColor: '#f8fafc' }}>
           {['Batch ID', 'Cycle Period', 'Total Amount', 'Sellers', 'Status', '   '].map(h => (
             <span key={h} style={{ fontSize: '11px', fontWeight: '800', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '1px' }}>{h}</span>
           ))}
        </div>

        {payoutBatches.map((batch) => (
          <div key={batch.id} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.5fr 1fr 1fr 1fr 0.5fr', padding: '24px 32px', borderBottom: '1px solid #f1f5f9', alignItems: 'center', fontSize: '14px' }}>
            <div style={{ fontWeight: '700', fontFamily: 'monospace' }}>{batch.id}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--slate)' }}>
              <Calendar size={14} /> {batch.period}
            </div>
            <div style={{ fontWeight: '700' }}>{batch.amount}</div>
            <div>{batch.sellers} Sellers</div>
            <div>
              <span style={{ 
                fontSize: '11px', 
                fontWeight: '700', 
                padding: '4px 10px', 
                borderRadius: '6px',
                backgroundColor: batch.status === 'Settled' ? '#ecfdf5' : '#eff6ff',
                color: batch.status === 'Settled' ? '#065f46' : '#1d4ed8'
              }}>{batch.status}</span>
            </div>
            <div style={{ textAlign: 'right' }}>
               <ExternalLink size={18} color="var(--slate)" style={{ cursor: 'pointer' }} />
            </div>
          </div>
        ))}
      </section>

      <div style={{ marginTop: '48px', padding: '32px', backgroundColor: 'rgba(0,0,11,0.02)', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
           <h4 style={{ fontWeight: '700', marginBottom: '8px' }}>Weekly Batch Processing</h4>
           <p style={{ fontSize: '14px', color: 'var(--slate)', maxWidth: '500px' }}>
             Platform auto-initiates payout batches every Monday at 10:00 AM. Failed transfers are auto-retried after 24 hours.
           </p>
        </div>
        <button style={{ border: '1px solid var(--midnight)', padding: '12px 24px', borderRadius: '10px', fontSize: '13px', fontWeight: '700' }}>Configure Schedule</button>
      </div>
    </AdminLayout>
  );
};

export default AdminPayouts;
