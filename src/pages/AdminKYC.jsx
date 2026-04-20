import React from 'react';
import AdminLayout from '../components/common/AdminLayout';
import { Search, ShieldCheck, FileText, CheckCircle2, XCircle, MoreVertical, Download } from 'lucide-react';

const AdminKYC = () => {
  const sellers = [
    { id: 1, name: 'Rohan Malhotra', email: 'rohan.m@gmail.com', type: 'Individual', status: 'Pending Review', submitted: '2 hours ago' },
    { id: 2, name: 'Symmetry Studios', email: 'hello@symmetry.co', type: 'Professional', status: 'In Progress', submitted: '1 day ago' },
    { id: 3, name: 'Ishani Gupta', email: 'ishi_g@outlook.com', type: 'Individual', status: 'Verified', submitted: '3 days ago' },
    { id: 4, name: 'Aarav Sharma', email: 'aarav.s@gmail.com', type: 'Individual', status: 'Rejected', submitted: '1 week ago' }
  ];

  return (
    <AdminLayout>
      <header style={{ marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>Seller Verification (KYC)</h2>
          <p style={{ color: 'var(--slate)', fontSize: '14px' }}>Review and approve seller identities to ensure platform trust and safety.</p>
        </div>
        <div style={{ position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
          <input type="text" placeholder="Search sellers..." style={{ 
            padding: '12px 16px 12px 48px', 
            borderRadius: '10px', 
            border: '1px solid #e2e8f0',
            fontSize: '14px',
            width: '320px',
            backgroundColor: 'white'
          }} />
        </div>
      </header>

      {/* Verification Queue */}
      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', padding: '20px 32px', borderBottom: '1px solid #f1f5f9', backgroundColor: '#f8fafc' }}>
           {['Seller', 'Type', 'Submission', 'Status', 'Actions'].map(h => (
             <span key={h} style={{ fontSize: '11px', fontWeight: '800', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '1px' }}>{h}</span>
           ))}
        </div>
        
        {sellers.map((seller) => (
          <div key={seller.id} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', padding: '24px 32px', borderBottom: '1px solid #f1f5f9', alignItems: 'center', transition: 'background 0.2s ease', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
               <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--midnight)' }}>{seller.name[0]}</span>
               </div>
               <div>
                 <div style={{ fontSize: '15px', fontWeight: '700' }}>{seller.name}</div>
                 <div style={{ fontSize: '12px', color: 'var(--slate)' }}>{seller.email}</div>
               </div>
            </div>
            
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--midnight)' }}>{seller.type}</div>
            <div style={{ fontSize: '13px', color: 'var(--slate)' }}>{seller.submitted}</div>
            
            <div>
              <span style={{ 
                fontSize: '11px', 
                fontWeight: '700', 
                padding: '4px 10px', 
                borderRadius: '6px',
                backgroundColor: seller.status === 'Verified' ? '#ecfdf5' : seller.status === 'Rejected' ? '#fef2f2' : '#fffbeb',
                color: seller.status === 'Verified' ? '#065f46' : seller.status === 'Rejected' ? '#991b1b' : '#92400e'
              }}>{seller.status}</span>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ 
                padding: '8px 16px', 
                backgroundColor: 'var(--midnight)', 
                color: 'white', 
                border: 'none', 
                borderRadius: '6px', 
                fontSize: '12px', 
                fontWeight: '700' 
              }}>
                Review Files
              </button>
              <button style={{ padding: '8px', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                <MoreVertical size={16} color="var(--slate)" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Review Section Mockup (Specific Seller) */}
      <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '48px' }}>
        <section style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '32px' }}>Document Verification — Rohan Malhotra</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
               {[
                 { label: 'Government ID (PAN / Aadhaar)', file: 'id_front_back.pdf', status: 'Awaiting' },
                 { label: 'Address Proof (Utility Bill)', file: 'electricity_bill_may.jpg', status: 'Awaiting' },
                 { label: 'Bank Account Linking (Cheque)', file: 'cancelled_cheque.png', status: 'Awaiting' }
               ].map((doc, i) => (
                 <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                       <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                         <FileText size={24} color="var(--champagne)" />
                       </div>
                       <div>
                         <div style={{ fontSize: '13px', fontWeight: '800', color: 'var(--slate)', textTransform: 'uppercase', marginBottom: '4px' }}>{doc.label}</div>
                         <div style={{ fontSize: '14px', fontWeight: '600' }}>{doc.file}</div>
                       </div>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                       <button style={{ padding: '8px 12px', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '12px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                         <Download size={14} /> View
                       </button>
                       <button style={{ padding: '8px', backgroundColor: '#dcfce7', border: 'none', borderRadius: '6px' }}><CheckCircle2 size={18} color="#15803d" /></button>
                       <button style={{ padding: '8px', backgroundColor: '#fee2e2', border: 'none', borderRadius: '6px' }}><XCircle size={18} color="#b91c1c" /></button>
                    </div>
                 </div>
               ))}
            </div>
        </section>

        <section style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
           <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>Verification Summary</h3>
           
           <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '14px' }}>
                 <span style={{ color: 'var(--slate)' }}>Auto-check (AML/PEP)</span>
                 <span style={{ color: '#10b981', fontWeight: '700' }}>Pass</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '14px' }}>
                 <span style={{ color: 'var(--slate)' }}>Name Matching</span>
                 <span style={{ color: '#10b981', fontWeight: '700' }}>High (98%)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px', fontSize: '14px' }}>
                 <span style={{ color: 'var(--slate)' }}>Bank Validation (₹1)</span>
                 <span style={{ color: '#10b981', fontWeight: '700' }}>Success</span>
              </div>
              
              <div style={{ backgroundColor: '#fffbeb', padding: '16px', borderLeft: '4px solid #f59e0b', borderRadius: '4px', fontSize: '13px', color: '#92400e', lineHeight: '1.5' }}>
                 <span style={{ fontWeight: '700' }}>System Note:</span> Applicant's residential address is a known co-working hub. This is common for professional sellers but may require manual call verification.
              </div>
           </div>

           <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button style={{ width: '100%', padding: '16px', backgroundColor: 'var(--midnight)', color: 'white', borderRadius: '8px', fontWeight: '700', fontSize: '14px' }}>Approve Seller Profile</button>
              <button style={{ width: '100%', padding: '16px', backgroundColor: 'transparent', border: '1px solid #e2e8f0', borderRadius: '8px', fontWeight: '700', fontSize: '14px', color: '#ef4444' }}>Reject & Notify</button>
           </div>
        </section>
      </div>
    </AdminLayout>
  );
};

export default AdminKYC;
