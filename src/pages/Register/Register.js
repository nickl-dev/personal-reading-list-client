import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bookstackLogo from '../../assets/bookstack-logo.svg';
import './Register.scss';
import AppForm from '../../components/AppForm/AppForm';

const Register = () => {
  useEffect(() => document.title = 'Personal Reading List | Register', [])

  // State
  const [registerInputValues, setRegisterInputValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Inputs
  const registerInputs = [
    {
      type: 'text',
      label: 'Name',
      controlId: 'name',
      placeholder: 'Enter name',
      name: 'name',
      value: registerInputValues.username,
      onChange: handleInputChange,
    },
    {
      type: 'email',
      label: 'Email Address',
      controlId: 'email',
      placeholder: 'Enter email address',
      name: 'email',
      value: registerInputValues.email,
      onChange: handleInputChange,
    },
    {
      type: 'password',
      label: 'Password',
      controlid: 'password',
      placeholder: 'Enter password',
      name: 'password',
      value: registerInputValues.password,
      onChange: handleInputChange,
    },
  ];

  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log(event);
    setRegisterInputValues({ ...registerInputValues, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="register d-lg-flex">
      <div className='background' />
      <div className="register__content d-flex flex-column align-items-center justify-content-center">
        <h1 className="login-register-heading mb-3">Register</h1>
        <img
          src={bookstackLogo}
          className="spinning-book"
          alt="Spinning bookstack"
        />

        <AppForm
          inputList={registerInputs}
          submitButtonText="Register"
          onSubmit={handleSubmit}
        />

        <Link
          to="/"
          className="mt-4"
        >
          Already have an account?
        </Link>
      </div>
    </div>
  );
};

export default Register;
