import React, { useState, useRef, useEffect } from 'react';
import profileImg from './img/profile.png';
import './style.css';
import axios from 'axios';
import jsPDF from 'jspdf';



function Sidebar() {
  const [image, setImage] = useState(profileImg);
  const fileInputRef = useRef(null);

  const [Emp,setEmp] = useState([])

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

  useEffect(()=>{
    axios.get("http://localhost:8070/employee/").then((res)=>{
        setEmp(res.data)
        console.log(Emp)
    }).catch((err)=>{
      console.log(err.message)
    })
    
  },[])

  const generateReport = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();
  
    // Set the initial y position for the report content
    let yPos = 20;
  
    // Set the font style and size
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
  
    // Set colors for headings and content
    const headingColor = '#007bff'; // Blue
    const contentColor = '#000000'; // Black
  
    // Add a title
    doc.setTextColor(headingColor);
    doc.text('Employee Report', 20, yPos);
    yPos += 10;
  
    // Loop through the employees array and add details to the PDF
    Emp.forEach((employee) => {
      const { name, email, phoneNumber } = employee;
  
      // Add employee details to the PDF
      doc.setTextColor(contentColor);
      doc.setFontSize(12);
      doc.text(`Name: ${name}`, 20, yPos);
      doc.text(`Email: ${email}`, 50, yPos);
      doc.text(`Phone Number: ${phoneNumber}`, 100, yPos);
  
      // Increase the y position for the next employee
      yPos += 15;
    });
  
    // Save the PDF
    doc.save('employee_report.pdf');
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
            <span className='fs-5'>Dashboard</span>
          </button>
          <button className='btn btn-success' onClick={generateReport}>
            <i className='bi bi-clipboard-data fs-5 me-2'></i>
            <span className='fs-5'>Employee Reports</span>
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Sidebar;
