import React, { useState } from 'react';
import './style.css';

function AddMemberForm() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleAddMemberClick = () => {
    const newWindow = window.open('', '_blank', 'width=500,height=500'); // Open a new window
    newWindow.document.body.innerHTML = getFormMarkup(); // Inject the form markup into the new window
    setShowForm(true);
  };

  const handleCancelClick = () => {
    setShowForm(false);
    setPasswordError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    // Perform any necessary validation or data processing here
    // For this example, we simply log the values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Reset the form
    setName('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
    setConfirmPassword('');
    setPasswordError('');
  };

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    const isValidPhoneNumber = /^\+[0-9]*$/.test(input);

    if (isValidPhoneNumber || input === '') {
      setPhoneNumber(input);
    }
  };

  const getFormMarkup = () => {
    return `
      <div class='addMemberForm'>
        <form onsubmit="event.preventDefault(); ${handleSubmit.toString()}">
          <h2>Add Member Form</h2>
          <div>
            <label for="name">Name:</label>
            <input
              type="text"
              id="name"
              value="${name}"
              onchange="event.target.value && ${setName.toString()}(event.target.value)"
              required
            />
          </div>
          <div>
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              value="${email}"
              onchange="event.target.value && ${setEmail.toString()}(event.target.value)"
              required
            />
          </div>
          <div>
            <label for="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              value="${phoneNumber}"
              onchange="event.target.value && ${handlePhoneNumberChange.toString()}(event)"
              required
            />
          </div>
          <div>
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              value="${password}"
              onchange="event.target.value && ${setPassword.toString()}(event.target.value)"
              minlength="5"
              required
            />
          </div>
          <div>
            <label for="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value="${confirmPassword}"
              onchange="event.target.value && ${setConfirmPassword.toString()}(event.target.value)"
              minlength="5"
              required
            />
          </div>
          ${passwordError ? `<p class="error">${passwordError}</p>` : ''}
          <br />
          <button type="submit">Add Member</button>
          <button onclick="${handleCancelClick.toString()}">Cancel</button>
        </form>
      </div>
    `;
  };

  return (
    <div className='formBtn'>
      {!showForm && (
        <button className="add-member-button" onClick={handleAddMemberClick}>Add Member</button>
      )}
    </div>
  );
}

export default AddMemberForm;
