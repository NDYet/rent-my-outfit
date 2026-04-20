import React, { useState } from 'react';
import AdminLayout from '../components/common/AdminLayout';
import { Gavel, MessageSquare, Image, AlertCircle, CheckCircle2, ChevronRight, XCircle } from 'lucide-react';

const AdminDisputes = () => {
  const [selectedClaim, setSelectedClaim] = useState(1);

  const claims = [
    { id: 1, item: 'Sabyasachi Lehenga', issue: 'Major Stain on Border', amount: '₹15,000', buyer: 'Anita R.', seller: 'Priya S.', status: 'Pending Review' },
    { id: 2, item: 'Valentino Gown', issue: 'Zipper Damage', amount: '₹4,500', buyer: 'Reya K.', seller: 'Sanya B.', status: 'Evidence Required' },
    { id: 3, item: 'Armani Tuxedo', issue: 'Late Return (3 Days)', amount: '₹2,100', buyer: 'Karan L.', seller: 'Amit V.', status: 'Resolved' }
  ];

  return (
    <AdminLayout>
      <header style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>Dispute Resolution Center</h2>
        <p style={{ color: 'var(--slate)', fontSize: '14px' }}>Manage damage claims, late returns, and transactional disputes.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: '32px', alignItems: 'start' }}>
        {/* Claims List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', gap: '12px', alignItems: 'center' }}>
            <AlertCircle size={20} color="var(--coral)" />
            <span style={{ fontSize: '14px', fontWeight: '700' }}>4 New Claims requiring attention</span>
          </div>
          
          {claims.map((claim) => (
            <div 
              key={claim.id} 
              onClick={() => setSelectedClaim(claim.id)}
              style={{ 
                backgroundColor: 'white', 
                padding: '20px', 
                borderRadius: '12px', 
                border: selectedClaim === claim.id ? '2px solid var(--midnight)' : '1px solid #e2e8f0',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--slate)' }}>CLAIM #{claim.id}402</span>
                <span style={{ 
                  fontSize: '10px', 
                  fontWeight: '700', 
                  padding: '2px 8px', 
                  borderRadius: '4px', 
                  backgroundColor: claim.status === 'Resolved' ? '#f0fdf4' : '#fff7ed',
                  color: claim.status === 'Resolved' ? '#166534' : '#9a3412'
                }}>{claim.status}</span>
              </div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>{claim.item}</h4>
              <p style={{ fontSize: '13px', color: 'var(--slate)', marginBottom: '12px' }}>{claim.issue}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--coral)' }}>{claim.amount}</span>
                <ChevronRight size={16} color="var(--slate)" />
              </div>
            </div>
          ))}
        </div>

        {/* Claim Detail View */}
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid #f1f5f9', paddingBottom: '24px' }}>
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '4px' }}>{claims[selectedClaim-1].item}</h3>
                <p style={{ fontSize: '14px', color: 'var(--slate)' }}>Damage Claim — Opened May 18, 2024</p>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button style={{ backgroundColor: '#fef2f2', color: '#ef4444', border: 'none', padding: '10px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '700' }}>Reject Claim</button>
                <button style={{ backgroundColor: 'var(--midnight)', color: 'white', border: 'none', padding: '10px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '700' }}>Approve Payout</button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
               <div>
                 <h4 style={{ fontSize: '12px', fontWeight: '800', color: 'var(--slate)', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '1px' }}>Parties Involved</h4>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                       <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f1f5f9' }}></div>
                       <div>
                         <div style={{ fontSize: '14px', fontWeight: '700' }}>{claims[selectedClaim-1].seller} (Lender)</div>
                         <div style={{ fontSize: '12px', color: '#10b981' }}>Verified Elite Seller</div>
                       </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                       <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f1f5f9' }}></div>
                       <div>
                         <div style={{ fontSize: '14px', fontWeight: '700' }}>{claims[selectedClaim-1].buyer} (Renter)</div>
                         <div style={{ fontSize: '12px', color: 'var(--slate)' }}>14 Successful Rentals</div>
                       </div>
                    </div>
                 </div>

                 <h4 style={{ fontSize: '12px', fontWeight: '800', color: 'var(--slate)', textTransform: 'uppercase', marginTop: '40px', marginBottom: '20px', letterSpacing: '1px' }}>Claim Evidence</h4>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div style={{ aspectRatio: '1/1', backgroundColor: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-in' }}>
                      <Image size={24} color="#94a3b8" />
                    </div>
                    <div style={{ aspectRatio: '1/1', backgroundColor: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-in' }}>
                      <Image size={24} color="#94a3b8" />
                    </div>
                 </div>
               </div>

               <div>
                 <h4 style={{ fontSize: '12px', fontWeight: '800', color: 'var(--slate)', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '1px' }}>Chat Transcript Highlights</h4>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: '#f8fafc', padding: '24px', borderRadius: '12px' }}>
                   <div style={{ fontSize: '13px', lineHeight: '1.5' }}>
                      <span style={{ fontWeight: '700' }}>Seller:</span> "I just received the dress back and there is a noticeable wine stain on the front panel."
                   </div>
                   <div style={{ fontSize: '13px', lineHeight: '1.5', color: 'var(--slate)' }}>
                      <span style={{ fontWeight: '700', color: 'var(--midnight)' }}>Buyer:</span> "I am so sorry, I didn't notice it during the event. Is it removable?"
                   </div>
                   <div style={{ fontSize: '13px', lineHeight: '1.5' }}>
                      <span style={{ fontWeight: '700' }}>Seller:</span> "The dry cleaner suggests it may have permanently set because it wasn't blotted."
                   </div>
                 </div>

                 <div style={{ marginTop: '32px' }}>
                   <button style={{ 
                     width: '100%', 
                     padding: '16px', 
                     border: '1px solid var(--midnight)', 
                     borderRadius: '8px', 
                     backgroundColor: 'transparent',
                     fontSize: '13px',
                     fontWeight: '700',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     gap: '12px'
                   }}>
                     <MessageSquare size={18} /> Open Full Chat Log
                   </button>
                 </div>
               </div>
            </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDisputes;
