'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Fresh Milk 1L', price: 3.99, quantity: 2, image: '🥛', brand: 'Dairy Farm' },
    { id: 2, name: 'Whole Wheat Bread', price: 4.99, quantity: 1, image: '🍞', brand: 'Baker\'s Best' },
    { id: 3, name: 'Organic Bananas 1kg', price: 2.49, quantity: 3, image: '🍌', brand: 'Fresh Farm' },
    { id: 4, name: 'Greek Yogurt 500g', price: 5.99, quantity: 1, image: '🥛', brand: 'Greek Gods' },
    { id: 5, name: 'Potato Chips 200g', price: 3.49, quantity: 2, image: '🥔', brand: 'Crispy Crunch' },
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const applyPromo = () => {
    if (promoCode.toUpperCase() === 'SAVE10') {
      setAppliedPromo({ code: 'SAVE10', discount: 0.10 });
    } else if (promoCode.toUpperCase() === 'FIRST20') {
      setAppliedPromo({ code: 'FIRST20', discount: 0.20 });
    } else {
      alert('Invalid promo code');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedPromo ? subtotal * appliedPromo.discount : 0;
  const deliveryFee = subtotal > 20 ? 0 : 2.99;
  const total = subtotal - discount + deliveryFee;

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
            <div style={{ color: '#1a1a1a', fontSize: '24px', position: 'relative' }}>
              🛒
              {cartItems.length > 0 && (
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
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#fff', padding: '12px 20px', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', fontSize: '14px', color: '#666' }}>
          <Link href="/" style={{ color: '#667eea', textDecoration: 'none' }}>Home</Link>
          {' / '}
          <span style={{ color: '#1a1a1a' }}>Shopping Cart</span>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {cartItems.length === 0 ? (
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '60px 20px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <div style={{ fontSize: '80px', marginBottom: '20px' }}>🛒</div>
            <h2 style={{ fontSize: '24px', margin: '0 0 10px 0', color: '#1a1a1a' }}>Your cart is empty</h2>
            <p style={{ color: '#666', marginBottom: '30px' }}>Add items to get started</p>
            <Link href="/" style={{
              display: 'inline-block',
              backgroundColor: '#667eea',
              color: '#fff',
              padding: '12px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              Start Shopping
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '30px', alignItems: 'start' }}>
            {/* Cart Items */}
            <div>
              <h2 style={{ fontSize: '28px', margin: '0 0 20px 0', color: '#1a1a1a' }}>
                Shopping Cart ({cartItems.length} items)
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {cartItems.map(item => (
                  <div key={item.id} style={{
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    padding: '20px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    display: 'flex',
                    gap: '20px'
                  }}>
                    <div style={{
                      width: '100px',
                      height: '100px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '60px',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '8px'
                    }}>
                      {item.image}
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <div>
                          <div style={{ color: '#666', fontSize: '12px', marginBottom: '4px' }}>{item.brand}</div>
                          <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#1a1a1a' }}>{item.name}</h3>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: '#ff4757',
                            cursor: 'pointer',
                            fontSize: '20px',
                            padding: '0',
                            width: '24px',
                            height: '24px'
                          }}
                        >
                          ×
                        </button>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '50%',
                              border: '1px solid #e5e5e5',
                              backgroundColor: '#fff',
                              cursor: 'pointer',
                              fontSize: '18px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            -
                          </button>
                          <span style={{ fontSize: '16px', fontWeight: '500', minWidth: '30px', textAlign: 'center' }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '50%',
                              border: '1px solid #e5e5e5',
                              backgroundColor: '#667eea',
                              color: '#fff',
                              cursor: 'pointer',
                              fontSize: '18px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            +
                          </button>
                        </div>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#667eea' }}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <Link href="/" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '20px',
                color: '#667eea',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500'
              }}>
                ← Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}>
                <h3 style={{ margin: '0 0 20px 0', fontSize: '20px', color: '#1a1a1a' }}>Order Summary</h3>

                {/* Promo Code */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input
                      type="text"
                      placeholder="Promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      style={{
                        flex: 1,
                        padding: '10px 12px',
                        border: '1px solid #e5e5e5',
                        borderRadius: '6px',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                    <button
                      onClick={applyPromo}
                      style={{
                        padding: '10px 20px',
                        backgroundColor: '#667eea',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '14px'
                      }}
                    >
                      Apply
                    </button>
                  </div>
                  {appliedPromo && (
                    <div style={{
                      marginTop: '8px',
                      padding: '8px 12px',
                      backgroundColor: '#d4edda',
                      color: '#155724',
                      borderRadius: '6px',
                      fontSize: '14px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span>✓ {appliedPromo.code} applied</span>
                      <button
                        onClick={() => setAppliedPromo(null)}
                        style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: '#155724',
                          cursor: 'pointer',
                          fontSize: '16px',
                          padding: '0'
                        }}
                      >
                        ×
                      </button>
                    </div>
                  )}
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
                    Try: SAVE10 or FIRST20
                  </div>
                </div>

                {/* Price Breakdown */}
                <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '16px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', color: '#666' }}>
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {appliedPromo && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', color: '#27ae60' }}>
                      <span>Discount ({appliedPromo.code})</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', color: '#666' }}>
                    <span>Delivery Fee</span>
                    <span>{deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}</span>
                  </div>
                  {subtotal < 20 && (
                    <div style={{
                      fontSize: '12px',
                      color: '#667eea',
                      marginBottom: '12px',
                      padding: '8px',
                      backgroundColor: '#f0f2ff',
                      borderRadius: '6px'
                    }}>
                      Add ${(20 - subtotal).toFixed(2)} more for free delivery!
                    </div>
                  )}
                </div>

                {/* Total */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '2px solid #e5e5e5',
                  marginBottom: '20px'
                }}>
                  <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#1a1a1a' }}>Total</span>
                  <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#667eea' }}>${total.toFixed(2)}</span>
                </div>

                {/* Checkout Button */}
                <button style={{
                  width: '100%',
                  padding: '16px',
                  backgroundColor: '#667eea',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5568d3'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#667eea'}
                >
                  Proceed to Checkout
                </button>

                {/* Delivery Info */}
                <div style={{
                  marginTop: '20px',
                  padding: '16px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '20px' }}>⚡</span>
                    <span style={{ fontWeight: '500', fontSize: '14px' }}>Express Delivery</span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#666' }}>
                    Get your order in 10 minutes or less
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '20px',
                marginTop: '20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}>
                <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', color: '#1a1a1a' }}>We Accept</h4>
                <div style={{ display: 'flex', gap: '12px', fontSize: '24px' }}>
                  <span>💳</span>
                  <span>🏦</span>
                  <span>📱</span>
                  <span>💰</span>
                </div>
              </div>
            </div>
          </div>
        )}
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
