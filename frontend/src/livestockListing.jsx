import React from 'react';
import './style.css';

const LivestockListing = () => {
  const openDetailsWindow = () => {
    const newWindow = window.open('', '_blank', 'width=800,height=600');
    newWindow.document.body.innerHTML = getLivestockDetailsMarkup();
  };

  const getRandomOwnerName = () => {
    const owners = ['John', 'Emily', 'Michael', 'Sophia', 'William'];
    const randomIndex = Math.floor(Math.random() * owners.length);
    return owners[randomIndex];
  };

  const getLivestockDetailsMarkup = () => {
    return `
      <html>
        <head>
          <title>Livestock Details</title>
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
            
            .animal {
              margin-bottom: 20px;
              border-bottom: 1px solid #ccc;
              padding-bottom: 10px;
            }
            
            .animal:last-child {
              border-bottom: none;
            }
            
            .animal p {
              margin: 5px 0;
            }
          </style>
        </head>
        <body>
          <h2>Livestock Details</h2>
          <div class="animal">
            <h3>${getRandomOwnerName()}'s Animal</h3>
            <p>Type: Cow</p>
            <p>Breed: Holstein</p>
            <p>Age: 3 years</p>
            <p>Weight: 1200 lbs</p>
          </div>
          <div class="animal">
            <h3>${getRandomOwnerName()}'s Animal</h3>
            <p>Type: Goat</p>
            <p>Breed: Boer</p>
            <p>Age: 2 years</p>
            <p>Weight: 80 lbs</p>
          </div>
          <div class="animal">
            <h3>${getRandomOwnerName()}'s Animal</h3>
            <p>Type: Chicken</p>
            <p>Breed: Rhode Island Red</p>
            <p>Age: 6 months</p>
            <p>Weight: 4 lbs</p>
          </div>
        </body>
      </html>
    `;
  };

  const handleButtonClick = () => {
    openDetailsWindow();
  };

  return (
    <div className="livestock-listing">
      <button onClick={handleButtonClick} className="livestockBtn">
        Livestock Details
      </button>
    </div>
  );
};

export default LivestockListing;
