import React from 'react';
import AdminLayout from '../components/common/AdminLayout';
import { ShieldAlert, Flag, UserX, AlertTriangle, CheckCircle, Search, Filter } from 'lucide-react';

const AdminSafety = () => {
  const flags = [
    { id: 1, user: 'Aman V.', type: 'Repeated No-Show', risk: 'High', flagCount: 3, lastIncident: '2 days ago' },
    { id: 2, user: 'Sanya K.', type: 'Unusual Payout Pattern', risk: 'Medium', flagCount: 1, lastIncident: '5 hours ago' },
    { id: 3, user: 'Rehan S.', type: 'Multiple Bad Reviews', risk: 'High', flagCount: 5, lastIncident: '1 week ago' },
    { id: 4, user: 'Meera G.', type: 'ID Mismatch Warning', risk: 'Medium', flagCount: 1, lastIncident: 'Yesterday' }
  ];

  return (
    <AdminLayout>
      <header style={{ marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>Trust & Safety Hub</h2>
          <p style={{ color: 'var(--slate)', fontSize: '14px' }}>Monitor platform integrity and manage suspicious account activity.</p>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
           <button style={{ backgroundColor: '#fef2f2', color: '#ef4444', border: '1px solid #fee2e2', padding: '12px 24px', borderRadius: '10px', fontSize: '14px', fontWeight: '700' }}>
             View Blocklist
           </button>
        </div>
      </header>

      {/* Trust Score & Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '48px' }}>
         <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '6px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '800' }}>98%</div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: '800', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '1px' }}>Global Trust Score</div>
              <div style={{ fontSize: '14px', color: '#10b981', fontWeight: '700', marginTop: '4px' }}>Excellent</div>
            </div>
         </div>
         <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '11px', fontWeight: '800', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Pending Flags</div>
            <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--coral)' }}>14</div>
            <div style={{ fontSize: '13px', color: 'var(--slate)', marginTop: '4px' }}>Across 12 unique accounts</div>
         </div>
         <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '11px', fontWeight: '800', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Identity Verified</div>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#10b981' }}>94.2%</div>
            <div style={{ fontSize: '13px', color: 'var(--slate)', marginTop: '4px' }}>Total Seller Community</div>
         </div>
      </div>

      {/* Safety Flags Table */}
      <section style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        <div style={{ padding: '24px 32px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Suspicious Activity Queue</h3>
          <div style={{ position: 'relative' }}>
             <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
             <input type="text" placeholder="Filter by User ID..." style={{ padding: '8px 12px 8px 36px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '13px' }} />
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 1fr 1fr 1fr', padding: '20px 32px', borderBottom: '1px solid #f1f5f9', backgroundColor: '#f8fafc' }}>
           {['User', 'Flag Reason', 'Risk Level', 'Occurrence', 'Last Incident', '   '].map(h => (
             <span key={h} style={{ fontSize: '11px', fontWeight: '800', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '1px' }}>{h}</span>
           ))}
        </div>

        {flags.map((flag) => (
          <div key={flag.id} style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 1fr 1fr 1fr', padding: '24px 32px', borderBottom: '1px solid #f1f5f9', alignItems: 'center', fontSize: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
               <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#f1f5f9' }}></div>
               <span style={{ fontWeight: '700' }}>{flag.user}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Flag size={14} color="var(--coral)" /> {flag.type}
            </div>
            <div>
              <span style={{ 
                fontSize: '11px', 
                fontWeight: '700', 
                padding: '4px 8px', 
                borderRadius: '4px',
                backgroundColor: flag.risk === 'High' ? '#fee2e2' : '#fef3c7',
                color: flag.risk === 'High' ? '#b91c1c' : '#92400e'
              }}>{flag.risk}</span>
            </div>
            <div style={{ fontWeight: '700' }}>{flag.flagCount}x</div>
            <div style={{ color: 'var(--slate)' }}>{flag.lastIncident}</div>
            <div style={{ textAlign: 'right' }}>
              <button style={{ backgroundColor: 'transparent', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '700' }}>Investigate</button>
            </div>
          </div>
        ))}
      </section>

      {/* Auto-Block Rules */}
      <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
         <div style={{ padding: '32px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
               <ShieldAlert size={20} color="var(--midnight)" />
               <h4 style={{ fontWeight: '700' }}>Automated Guardrails</h4>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--slate)', marginBottom: '24px', lineHeight: '1.6' }}>
              System auto-flags users after 2 failed payment attempts or 1 verified damage claim without resolution.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
               <span style={{ fontSize: '11px', fontWeight: '700', backgroundColor: 'white', padding: '6px 12px', borderRadius: '6px', color: 'var(--slate)' }}>Payments Active</span>
               <span style={{ fontSize: '11px', fontWeight: '700', backgroundColor: 'white', padding: '6px 12px', borderRadius: '6px', color: 'var(--slate)' }}>Damage Logic Active</span>
            </div>
         </div>

         <div style={{ padding: '32px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
               <UserX size={20} color="#ef4444" />
               <h4 style={{ fontWeight: '700' }}>Manual Review Required</h4>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--slate)', marginBottom: '24px', lineHeight: '1.6' }}>
              3 accounts have been auto-flagged for manual review due to repeated negative sentiment in rental completions.
            </p>
            <button style={{ backgroundColor: 'var(--midnight)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: '700' }}>Start Safety Review</button>
         </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSafety;
