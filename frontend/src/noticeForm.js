import React, { useState } from 'react';
import './style.css';

const NoticeForm = () => {
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional logic here, such as submitting the form data
    console.log('Topic:', topic);
    console.log('Message:', message);
    // Reset form fields
    setTopic('');
    setMessage('');
  };

  const handleCancel = () => {
    // Reset form fields
    setTopic('');
    setMessage('');
  };

  const openFormWindow = () => {
    window.open('', '_blank', 'width=400,height=400'); // Open a new window with specified dimensions
  };

  return (
    <div>
      <button onClick={openFormWindow} className='noticeBtn'>Notice</button>
      <div style={{ display: 'none' }}>
        <h2>Add Notice</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="topic">Topic:</label>
            <input
              type="text"
              id="topic"
              value={topic}
              onChange={handleTopicChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
          </div>
          <div>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoticeForm;
