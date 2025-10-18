'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CategoryPage({ params }) {
  const [cart, setCart] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categoryData = {
    1: { name: 'Groceries', icon: '🛒' },
    2: { name: 'Fresh Produce', icon: '🥬' },
    3: { name: 'Dairy', icon: '🥛' },
    4: { name: 'Snacks', icon: '🍿' },
    5: { name: 'Beverages', icon: '🥤' },
    6: { name: 'Personal Care', icon: '🧴' },
    7: { name: 'Household', icon: '🧹' },
    8: { name: 'Baby Care', icon: '👶' },
  };

  const products = {
    1: [
      { id: 101, name: 'Whole Wheat Bread', price: 4.99, brand: 'Baker\'s Best', image: '🍞', rating: 4.5 },
      { id: 102, name: 'Brown Rice 2kg', price: 8.99, brand: 'Organic Valley', image: '🍚', rating: 4.7 },
      { id: 103, name: 'Pasta 500g', price: 3.49, brand: 'Italian Delight', image: '🍝', rating: 4.3 },
      { id: 104, name: 'Olive Oil 1L', price: 12.99, brand: 'Mediterranean', image: '🫒', rating: 4.8 },
      { id: 105, name: 'Cereal Box', price: 6.99, brand: 'Morning Crunch', image: '🥣', rating: 4.4 },
      { id: 106, name: 'Coffee Beans', price: 15.99, brand: 'Java Express', image: '☕', rating: 4.9 },
    ],
    2: [
      { id: 201, name: 'Organic Bananas 1kg', price: 2.49, brand: 'Fresh Farm', image: '🍌', rating: 4.6 },
      { id: 202, name: 'Red Apples 1kg', price: 4.99, brand: 'Orchard Fresh', image: '🍎', rating: 4.7 },
      { id: 203, name: 'Fresh Spinach', price: 2.99, brand: 'Green Valley', image: '🥬', rating: 4.5 },
      { id: 204, name: 'Cherry Tomatoes', price: 3.99, brand: 'Vine Ripe', image: '🍅', rating: 4.8 },
      { id: 205, name: 'Carrots 500g', price: 1.99, brand: 'Garden Fresh', image: '🥕', rating: 4.4 },
      { id: 206, name: 'Avocados 3pcs', price: 5.99, brand: 'Tropical Harvest', image: '🥑', rating: 4.6 },
    ],
    3: [
      { id: 301, name: 'Fresh Milk 1L', price: 3.99, brand: 'Dairy Farm', image: '🥛', rating: 4.7 },
      { id: 302, name: 'Greek Yogurt 500g', price: 5.99, brand: 'Greek Gods', image: '🥛', rating: 4.8 },
      { id: 303, name: 'Cheddar Cheese', price: 7.99, brand: 'Cheese Makers', image: '🧀', rating: 4.6 },
      { id: 304, name: 'Butter 250g', price: 4.49, brand: 'Golden Dairy', image: '🧈', rating: 4.5 },
      { id: 305, name: 'Eggs 12pcs', price: 4.99, brand: 'Farm Fresh', image: '🥚', rating: 4.7 },
      { id: 306, name: 'Cream Cheese', price: 5.49, brand: 'Smooth & Creamy', image: '🧀', rating: 4.4 },
    ],
    4: [
      { id: 401, name: 'Potato Chips 200g', price: 3.49, brand: 'Crispy Crunch', image: '🥔', rating: 4.5 },
      { id: 402, name: 'Chocolate Bar', price: 2.99, brand: 'Sweet Treats', image: '🍫', rating: 4.8 },
      { id: 403, name: 'Cookies Pack', price: 4.99, brand: 'Bakery Bliss', image: '🍪', rating: 4.6 },
      { id: 404, name: 'Popcorn 300g', price: 3.99, brand: 'Movie Time', image: '🍿', rating: 4.4 },
      { id: 405, name: 'Mixed Nuts 250g', price: 8.99, brand: 'Nutty Delight', image: '🥜', rating: 4.7 },
      { id: 406, name: 'Granola Bars', price: 5.99, brand: 'Energy Boost', image: '🥖', rating: 4.5 },
    ],
    5: [
      { id: 501, name: 'Orange Juice 1L', price: 4.99, brand: 'Fresh Squeeze', image: '🍊', rating: 4.7 },
      { id: 502, name: 'Sparkling Water 6pk', price: 5.99, brand: 'Bubble Springs', image: '💧', rating: 4.5 },
      { id: 503, name: 'Cola 2L', price: 3.49, brand: 'Classic Cola', image: '🥤', rating: 4.3 },
      { id: 504, name: 'Green Tea Box', price: 6.99, brand: 'Zen Leaves', image: '🍵', rating: 4.8 },
      { id: 505, name: 'Energy Drink 4pk', price: 7.99, brand: 'Power Up', image: '⚡', rating: 4.4 },
      { id: 506, name: 'Coconut Water 1L', price: 4.49, brand: 'Tropical Fresh', image: '🥥', rating: 4.6 },
    ],
    6: [
      { id: 601, name: 'Shampoo 500ml', price: 8.99, brand: 'Hair Care Pro', image: '🧴', rating: 4.6 },
      { id: 602, name: 'Body Wash', price: 7.99, brand: 'Fresh & Clean', image: '🧼', rating: 4.7 },
      { id: 603, name: 'Toothpaste', price: 3.99, brand: 'Bright Smile', image: '🦷', rating: 4.5 },
      { id: 604, name: 'Face Cream 50ml', price: 15.99, brand: 'Skin Glow', image: '🧴', rating: 4.8 },
      { id: 605, name: 'Deodorant', price: 5.99, brand: 'All Day Fresh', image: '💨', rating: 4.4 },
      { id: 606, name: 'Hand Soap', price: 4.49, brand: 'Gentle Clean', image: '🧴', rating: 4.6 },
    ],
    7: [
      { id: 701, name: 'Dish Soap', price: 4.99, brand: 'Sparkle Clean', image: '🧽', rating: 4.5 },
      { id: 702, name: 'Laundry Detergent 2L', price: 12.99, brand: 'Fresh Wash', image: '🧺', rating: 4.7 },
      { id: 703, name: 'Toilet Paper 12pk', price: 8.99, brand: 'Soft Touch', image: '🧻', rating: 4.6 },
      { id: 704, name: 'Paper Towels 6pk', price: 7.99, brand: 'Super Absorb', image: '📄', rating: 4.5 },
      { id: 705, name: 'All-Purpose Cleaner', price: 5.99, brand: 'Clean Master', image: '🧹', rating: 4.7 },
      { id: 706, name: 'Garbage Bags 30pk', price: 6.49, brand: 'Strong Hold', image: '🗑️', rating: 4.4 },
    ],
    8: [
      { id: 801, name: 'Baby Diapers 40pk', price: 24.99, brand: 'Gentle Care', image: '👶', rating: 4.8 },
      { id: 802, name: 'Baby Wipes 80pk', price: 6.99, brand: 'Soft Touch', image: '🧻', rating: 4.7 },
      { id: 803, name: 'Baby Shampoo', price: 7.99, brand: 'Tear Free', image: '🧴', rating: 4.6 },
      { id: 804, name: 'Baby Lotion', price: 8.99, brand: 'Gentle Skin', image: '🧴', rating: 4.7 },
      { id: 805, name: 'Baby Formula', price: 29.99, brand: 'Nutri Baby', image: '🍼', rating: 4.9 },
      { id: 806, name: 'Baby Food Pouches 6pk', price: 9.99, brand: 'Organic Start', image: '🥘', rating: 4.5 },
    ],
  };

  const categoryId = params.id;
  const category = categoryData[categoryId] || { name: 'Category', icon: '📦' };
  const categoryProducts = products[categoryId] || [];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

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
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ fontSize: '32px' }}>⚡</div>
              <h1 style={{ margin: 0, fontSize: '24px', color: '#1a1a1a' }}>QuickMart</h1>
            </Link>
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

      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#fff', padding: '12px 20px', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', fontSize: '14px', color: '#666' }}>
          <Link href="/" style={{ color: '#667eea', textDecoration: 'none' }}>Home</Link>
          {' / '}
          <span style={{ color: '#1a1a1a' }}>{category.name}</span>
        </div>
      </div>

      {/* Category Header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#fff',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '64px', marginBottom: '10px' }}>{category.icon}</div>
        <h2 style={{ margin: '0 0 10px 0', fontSize: '32px', fontWeight: 'bold' }}>
          {category.name}
        </h2>
        <p style={{ margin: 0, fontSize: '16px', opacity: 0.9 }}>
          {categoryProducts.length} products available
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Filters */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '30px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setSelectedFilter('all')}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '20px',
              backgroundColor: selectedFilter === 'all' ? '#667eea' : '#f0f0f0',
              color: selectedFilter === 'all' ? '#fff' : '#1a1a1a',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '14px'
            }}
          >
            All Products
          </button>
          <button
            onClick={() => setSelectedFilter('rating')}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '20px',
              backgroundColor: selectedFilter === 'rating' ? '#667eea' : '#f0f0f0',
              color: selectedFilter === 'rating' ? '#fff' : '#1a1a1a',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '14px'
            }}
          >
            ⭐ Top Rated
          </button>
          <button
            onClick={() => setSelectedFilter('price-low')}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '20px',
              backgroundColor: selectedFilter === 'price-low' ? '#667eea' : '#f0f0f0',
              color: selectedFilter === 'price-low' ? '#fff' : '#1a1a1a',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '14px'
            }}
          >
            Price: Low to High
          </button>
          <button
            onClick={() => setSelectedFilter('price-high')}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '20px',
              backgroundColor: selectedFilter === 'price-high' ? '#667eea' : '#f0f0f0',
              color: selectedFilter === 'price-high' ? '#fff' : '#1a1a1a',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '14px'
            }}
          >
            Price: High to Low
          </button>
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '20px'
        }}>
          {categoryProducts.map(product => (
            <div
              key={product.id}
              style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '16px',
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
              <div style={{ marginBottom: '8px' }}>
                <div style={{ color: '#666', fontSize: '12px', marginBottom: '4px' }}>{product.brand}</div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#1a1a1a', height: '40px' }}>
                  {product.name}
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                  <span style={{ color: '#ffa500' }}>⭐</span>
                  <span style={{ fontSize: '14px', color: '#666' }}>{product.rating}</span>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#667eea' }}>${product.price}</div>
                <button
                  onClick={() => addToCart(product)}
                  style={{
                    backgroundColor: '#667eea',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '8px 16px',
                    cursor: 'pointer',
                    fontWeight: '500',
                    fontSize: '14px',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5568d3'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#667eea'}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
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
