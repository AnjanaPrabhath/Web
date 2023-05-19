import React, { useState } from "react";
import axios from "axios";

function AddMemberForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [disableInput, setDisableInput] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8070/employee/add", {
        name,
        email,
        phoneNumber,
        password,
        confirmPassword,
      });

      console.log("New employee:", response.data);

      setSuccessMessage("Employee added successfully");
      setName("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");
      setConfirmPassword("");
      setPasswordError("");
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    if (input.length >= 9) {
      setDisableInput(true);
    } else {
      setDisableInput(false);
    }
    // const isValidPhoneNumber = /^\+[0-9]*$/.test(input);
    const isValidPhoneNumber = /^0[0-9]*$/.test(input);

    if (isValidPhoneNumber || input === "") {
      setPhoneNumber(input);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Member Form</h2>
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number:
          </label>
          <div className="input-group">
            <span className="input-group-text">+94</span>
            <input
              type="number"
              className="form-control"
              id="phoneNumber"
              pattern="[0-9]{9}"
              onChange={handlePhoneNumberChange}
              disabled={disableInput}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength="5"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            minLength="5"
            required
          />
        </div>
        {passwordError && <p className="text-danger">{passwordError}</p>}
        <button type="submit" className="btn btn-primary">
          Add Member
        </button>
        <button
          type="reset"
          className="btn btn-secondary ms-2"
          onClick={() => {
            setDisableInput(false);
          }}
        >
          Clear
        </button>
      </form>
    </div>
  );
}

export default AddMemberForm;
