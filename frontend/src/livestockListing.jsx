import React from 'react';
import './style.css';

const LivestockListing = () => {
  const openDetailsWindow = () => {
    const newWindow = window.open('', '_blank', 'width=800,height=600');
    newWindow.document.body.innerHTML = getLivestockDetailsMarkup();
  };

  const getLivestockDetailsMarkup = () => {
    return `
      <div>
        <h2>Livestock Details</h2>
        <div>
          <h3>Animal 1</h3>
          <p>Type: Cow</p>
          <p>Breed: Holstein</p>
          <p>Age: 3 years</p>
          <p>Weight: 1200 lbs</p>
        </div>
        <div>
          <h3>Animal 2</h3>
          <p>Type: Goat</p>
          <p>Breed: Boer</p>
          <p>Age: 2 years</p>
          <p>Weight: 80 lbs</p>
        </div>
        <div>
          <h3>Animal 3</h3>
          <p>Type: Chicken</p>
          <p>Breed: Rhode Island Red</p>
          <p>Age: 6 months</p>
          <p>Weight: 4 lbs</p>
        </div>
      </div>
    `;
  };

  const handleButtonClick = () => {
    openDetailsWindow();
  };

  return (
    <div className="livestock-listing">
      <button onClick={handleButtonClick} className='livestockBtn'>Livestock Details</button>
    </div>
  );
};

export default LivestockListing;
