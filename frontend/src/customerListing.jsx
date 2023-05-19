import React from 'react';
import './style.css';

const CustomerListing = () => {
  const openDetailsWindow = () => {
    const newWindow = window.open('', '_blank', 'width=800,height=600');
    newWindow.document.body.innerHTML = getCustomerDetailsMarkup();
  };

  const getRandomName = () => {
    const names = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Emily Brown', 'Michael Davis'];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };

  const getRandomAddress = () => {
    const addresses = [
      '123 Farm Road, City',
      '456 Animal Farm, Town',
      '789 Ranch Road, Village',
      '321 Orchard Lane, County',
      '555 Meadow Drive, Hamlet'
    ];
    const randomIndex = Math.floor(Math.random() * addresses.length);
    return addresses[randomIndex];
  };

  const getRandomPhoneNumber = () => {
    const phoneNumbers = ['123-456-7890', '987-654-3210', '555-123-4567', '321-654-9870', '888-555-9999'];
    const randomIndex = Math.floor(Math.random() * phoneNumbers.length);
    return phoneNumbers[randomIndex];
  };

  const getRandomCustomerType = () => {
    const customerTypes = ['Farmer', 'Animal Owner', 'Rancher', 'Gardener', 'Homesteader'];
    const randomIndex = Math.floor(Math.random() * customerTypes.length);
    return customerTypes[randomIndex];
  };

  const getCustomerDetailsMarkup = () => {
  return `
    <html>
      <head>
        <title>Customer Details</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
          }
          
          h2 {
            margin-bottom: 10px;
          }
          
          h3 {
            margin-top: 20px;
          }
          
          .customer {
            margin-bottom: 20px;
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
          }
          
          .customer:last-child {
            border-bottom: none;
          }
          
          .customer p {
            margin: 5px 0;
          }
          
          footer {
            margin-top: 40px;
            text-align: center;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <h2>Customer Details</h2>
        <div class="customer">
          <h3>${getRandomName()}</h3>
          <p>Address: ${getRandomAddress()}</p>
          <p>Phone Number: ${getRandomPhoneNumber()}</p>
          <p>Customer Type: ${getRandomCustomerType()}</p>
        </div>
        <div class="customer">
          <h3>${getRandomName()}</h3>
          <p>Address: ${getRandomAddress()}</p>
          <p>Phone Number: ${getRandomPhoneNumber()}</p>
          <p>Customer Type: ${getRandomCustomerType()}</p>
        </div>
        <div class="customer">
          <h3>${getRandomName()}</h3>
          <p>Address: ${getRandomAddress()}</p>
          <p>Phone Number: ${getRandomPhoneNumber()}</p>
          <p>Customer Type: ${getRandomCustomerType()}</p>
        </div>
        
        <footer>
          GreenCare Pvt(ltd) - All rights reserved - Contact us 0114567447
        </footer>
      </body>
    </html>
  `;
};


  const handleButtonClick = () => {
    openDetailsWindow();
  };

  return (
    <div className="customer-listing">
      <button onClick={handleButtonClick} className="customerBtn">
        Customer Details
      </button>
    </div>
  );
};

export default CustomerListing;
