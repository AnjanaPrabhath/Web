import React, { useState, useRef } from 'react';
import profileImg from './img/profile.png';
import './style.css';
import AddMemberForm from './addMemberForm';

function Sidebar() {
  const [image, setImage] = useState(profileImg);
  const fileInputRef = useRef(null);

  const handleEditImage = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(profileImg);
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='mainSidebar'>
      <div className='sidebar-container'>
      <div className='bg-white sidebar p-2'>
        <div className='M-2'>
          <span className='brand-name fs-4'>GreenCare</span>
          <hr className='text-dark' />
          <img
            className='rounded-circle'
            src={image}
            alt='Profile'
            width='140px'
            height='140px'
          />
          <div className='d-grid gap-2 mt-3'>
            <div className='text-center'>
              <button className='btn btn-primary1' onClick={handleUploadButtonClick}>
                Upload New
              </button>
              <input
                ref={fileInputRef}
                type='file'
                onChange={handleEditImage}
                style={{ display: 'none' }}
              />
            </div>
            <div className='text-center'>
              <button className='btn btn-danger' onClick={handleRemoveImage}>
                Remove
              </button>
            </div>
          </div>
        </div>
        <hr className='text-dark' />
        <div className='d-grid gap-2'>
          <button className='btn btn-success'>
            <i className='bi bi-speedometer2 fs-5 me-2'></i>
            <span className='fs-5'>git eka vada</span>
          </button>
          <button className='btn btn-success'>
            <i className='bi bi-clipboard-data fs-5 me-2'></i>
            <span className='fs-5'>Reports</span>
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Sidebar;
