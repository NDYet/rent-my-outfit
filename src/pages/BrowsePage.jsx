import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

const BrowsePage = () => {
  const products = [
    { id: 1, name: 'Sabyasachi Heritage Lehenga', price: '₹4,500', img: '/lehenga.png', height: '400px' },
    { id: 2, name: 'Saint Laurent Velvet Tuxedo', price: '₹3,200', img: '/tuxedo.png', height: '300px' },
    { id: 3, name: 'Valentino Red Silk Gown', price: '₹5,800', img: '/red_gown.png', height: '450px' },
    { id: 4, name: 'Midnight Sequin Gala Dress', price: '₹4,100', img: '/hero_gown.png', height: '350px' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <Navbar />

      {/* Header */}
      <header style={{ padding: '80px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>The Collection</h1>
          <p style={{ color: 'var(--slate)', fontSize: '16px' }}>Curated high-fashion items ready for your next event.</p>
        </div>
      </header>

      <main className="container" style={{ display: 'flex', padding: '64px var(--margin-x)', gap: '64px' }}>
        
        {/* Sidebar Filters */}
        <aside style={{ flex: '0 0 240px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
            <span style={{ fontWeight: '700', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' }}>Filters</span>
            <SlidersHorizontal size={16} />
          </div>

          {/* Occasion */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', cursor: 'pointer' }}>
              <h4 style={{ fontWeight: '600', fontSize: '14px' }}>Occasion</h4>
              <ChevronDown size={16} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Wedding & Bridal', 'Black Tie Formal', 'Cocktail Party', 'Festive Ethnic'].map(o => (
                <label key={o} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'var(--midnight)', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ width: '16px', height: '16px', accentColor: 'var(--midnight)' }} />
                  {o}
                </label>
              ))}
            </div>
          </div>

          {/* Size */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', cursor: 'pointer' }}>
              <h4 style={{ fontWeight: '600', fontSize: '14px' }}>Size Options</h4>
              <ChevronDown size={16} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {['XS', 'S', 'M', 'L', 'XL', 'Custom Fit'].map(s => (
                <button key={s} style={{ 
                  padding: '8px', 
                  border: '1px solid rgba(0,0,0,0.1)', 
                  backgroundColor: 'transparent',
                  borderRadius: 'var(--radius-sharp)',
                  fontSize: '12px'
                }}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <section style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', fontSize: '14px' }}>
            <span style={{ color: 'var(--slate)' }}>Showing 42 premium pieces</span>
            <select style={{ border: 'none', background: 'transparent', fontWeight: '600', outline: 'none' }}>
              <option>Sort by: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>

          <div style={{ columnCount: 2, columnGap: '32px' }}>
            {products.map((p, i) => (
              <Link to={`/product/${p.id}`} key={i} style={{ display: 'block', breakInside: 'avoid', marginBottom: '32px' }}>
                <div style={{ position: 'relative', height: p.height, borderRadius: 'var(--radius-sharp)', overflow: 'hidden', marginBottom: '16px' }}>
                  <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>{p.name}</h3>
                  <div style={{ fontSize: '14px', color: 'var(--slate)' }}>{p.price} / day</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BrowsePage;
