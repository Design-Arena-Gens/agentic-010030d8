'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [cart, setCart] = useState([]);

  const categories = [
    { id: 1, name: 'Groceries', icon: '🛒', image: '/api/placeholder/150/150' },
    { id: 2, name: 'Fresh Produce', icon: '🥬', image: '/api/placeholder/150/150' },
    { id: 3, name: 'Dairy', icon: '🥛', image: '/api/placeholder/150/150' },
    { id: 4, name: 'Snacks', icon: '🍿', image: '/api/placeholder/150/150' },
    { id: 5, name: 'Beverages', icon: '🥤', image: '/api/placeholder/150/150' },
    { id: 6, name: 'Personal Care', icon: '🧴', image: '/api/placeholder/150/150' },
    { id: 7, name: 'Household', icon: '🧹', image: '/api/placeholder/150/150' },
    { id: 8, name: 'Baby Care', icon: '👶', image: '/api/placeholder/150/150' },
  ];

  const featuredProducts = [
    { id: 1, name: 'Fresh Milk', price: 3.99, category: 'Dairy', image: '🥛', discount: '10% OFF' },
    { id: 2, name: 'Organic Bananas', price: 2.49, category: 'Fresh Produce', image: '🍌', discount: null },
    { id: 3, name: 'Whole Wheat Bread', price: 4.99, category: 'Groceries', image: '🍞', discount: '15% OFF' },
    { id: 4, name: 'Greek Yogurt', price: 5.99, category: 'Dairy', image: '🥛', discount: null },
    { id: 5, name: 'Potato Chips', price: 3.49, category: 'Snacks', image: '🥔', discount: '20% OFF' },
    { id: 6, name: 'Orange Juice', price: 4.99, category: 'Beverages', image: '🍊', discount: null },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#fff',
        padding: '16px 20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ fontSize: '32px' }}>⚡</div>
            <h1 style={{ margin: 0, fontSize: '24px', color: '#1a1a1a' }}>QuickMart</h1>
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ color: '#666', fontSize: '14px' }}>📍 Delivery in 10 mins</div>
            <Link href="/cart" style={{ textDecoration: 'none', color: '#1a1a1a', fontSize: '24px', position: 'relative' }}>
              🛒
              {cart.length > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  backgroundColor: '#ff4757',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#fff',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ margin: '0 0 10px 0', fontSize: '36px', fontWeight: 'bold' }}>
          Get Everything Delivered in Minutes
        </h2>
        <p style={{ margin: 0, fontSize: '18px', opacity: 0.9 }}>
          Fresh groceries, daily essentials & more at your doorstep
        </p>
        <div style={{ marginTop: '30px' }}>
          <input
            type="text"
            placeholder="Search for products..."
            style={{
              padding: '14px 20px',
              width: '100%',
              maxWidth: '500px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              outline: 'none'
            }}
          />
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Categories */}
        <section style={{ marginBottom: '50px' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '20px', color: '#1a1a1a' }}>Shop by Category</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '20px'
          }}>
            {categories.map(category => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                style={{
                  textDecoration: 'none',
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '10px' }}>{category.icon}</div>
                <div style={{ color: '#1a1a1a', fontWeight: '500', fontSize: '14px' }}>{category.name}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section>
          <h3 style={{ fontSize: '24px', marginBottom: '20px', color: '#1a1a1a' }}>Featured Products</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            {featuredProducts.map(product => (
              <div
                key={product.id}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  padding: '16px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  position: 'relative'
                }}
              >
                {product.discount && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: '#ff4757',
                    color: '#fff',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    {product.discount}
                  </div>
                )}
                <div style={{
                  width: '100%',
                  height: '160px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '80px',
                  marginBottom: '12px'
                }}>
                  {product.image}
                </div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#1a1a1a' }}>{product.name}</h4>
                <div style={{ color: '#666', fontSize: '14px', marginBottom: '12px' }}>{product.category}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#667eea' }}>${product.price}</div>
                  <button
                    onClick={() => setCart([...cart, product])}
                    style={{
                      backgroundColor: '#667eea',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '8px 16px',
                      cursor: 'pointer',
                      fontWeight: '500',
                      fontSize: '14px'
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Delivery Banner */}
        <section style={{
          marginTop: '50px',
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '40px',
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{ fontSize: '28px', margin: '0 0 20px 0', color: '#1a1a1a' }}>
            ⚡ Lightning Fast Delivery
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>🚀</div>
              <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>10 Min Delivery</div>
              <div style={{ color: '#666', fontSize: '14px' }}>Ultra-fast service</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>✨</div>
              <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Fresh Products</div>
              <div style={{ color: '#666', fontSize: '14px' }}>Quality guaranteed</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>💳</div>
              <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Easy Payment</div>
              <div style={{ color: '#666', fontSize: '14px' }}>Multiple options</div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1a1a1a',
        color: '#fff',
        padding: '40px 20px',
        marginTop: '60px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>⚡</div>
          <h3 style={{ margin: '0 0 10px 0' }}>QuickMart</h3>
          <p style={{ margin: 0, opacity: 0.7, fontSize: '14px' }}>Your neighborhood quick commerce store</p>
        </div>
      </footer>
    </div>
  );
}
