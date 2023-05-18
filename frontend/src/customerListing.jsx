import React from 'react';
import './style.css';

const CustomerListing = () => {
  const openDetailsWindow = () => {
    const newWindow = window.open('', '_blank', 'width=800,height=600');
    newWindow.document.body.innerHTML = getCustomerDetailsMarkup();
  };

  const getCustomerDetailsMarkup = () => {
    return `
      <div>
        <h2>Customer Details</h2>
        <div>
          <h3>Customer 1</h3>
          <p>Name: John Doe</p>
          <p>Address: 123 Farm Road, City</p>
          <p>Phone Number: 123-456-7890</p>
          <p>Customer Type: Farmer</p>
        </div>
        <div>
          <h3>Customer 2</h3>
          <p>Name: Jane Smith</p>
          <p>Address: 456 Animal Farm, Town</p>
          <p>Phone Number: 987-654-3210</p>
          <p>Customer Type: Animal Owner</p>
        </div>
        <div>
          <h3>Customer 3</h3>
          <p>Name: Mike Johnson</p>
          <p>Address: 789 Ranch Road, Village</p>
          <p>Phone Number: 555-123-4567</p>
          <p>Customer Type: Farmer</p>
        </div>
      </div>
    `;
  };

  const handleButtonClick = () => {
    openDetailsWindow();
  };

  return (
    <div className="customer-listing">
      <button onClick={handleButtonClick} className='customerBtn'>Customer Details</button>
    </div>
  );
};

export default CustomerListing;
