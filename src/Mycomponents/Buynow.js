import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Productdata } from './Productdata'; // Ensure you have this array in a shared location

export default function Buynow() {
  const { productId } = useParams();
  const product = Productdata[productId];
  const navigate = useNavigate();

  const handlePurchase = () => {
    // Redirect to the payment page (e.g., '/payment')
    navigate('/payment');
  };

  if (!product) {
    return (
      <div className="container">
        <h1>Product Not Found</h1>
        <p>We couldn't find the product you're looking for. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <img
          className="card-img-top"
          src={product.img}
          alt={`Product ${parseInt(productId) + 1}`}
          style={{ width: '100%', height: '500px', objectFit: 'contain' }}
        />
        <div className="card-body">
          <p className="card-text">{product.text}</p>
          <button
            type="button"
            className="btn btn-primary"
            style={{
              marginLeft: '400px',
              marginTop: '100px',
              paddingLeft: '150px',
              paddingRight: '150px',
              marginBottom: '100px'
            }}
            onClick={handlePurchase} // Navigate to the payment page on click
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
}
