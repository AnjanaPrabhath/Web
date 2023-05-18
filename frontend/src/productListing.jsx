import React from 'react';
import './style.css';

const ProductListing = () => {
  const openDetailsWindow = () => {
    const newWindow = window.open('', '_blank', 'width=800,height=600');
    newWindow.document.body.innerHTML = getProductDetailsMarkup();
  };

  const getProductDetailsMarkup = () => {
    return `
      <div>
        <h2>Product Details</h2>
        <div>
          <h3>Product 1</h3>
          <p>Description of Product 1</p>
          <p>Price: $100</p>
        </div>
        <div>
          <h3>Product 2</h3>
          <p>Description of Product 2</p>
          <p>Price: $200</p>
        </div>
        <div>
          <h3>Product 3</h3>
          <p>Description of Product 3</p>
          <p>Price: $300</p>
        </div>
      </div>
    `;
  };

  const handleButtonClick = () => {
    openDetailsWindow();
  };

  return (
    <div className="product-listing">
      <button onClick={handleButtonClick} className='productBtn'>Product Details</button>
    </div>
  );
};

export default ProductListing;
