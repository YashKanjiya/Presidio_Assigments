import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../services/AuthService';

const Register = () => {
  const [user, setUser] = useState({ login: '', firstName: '', lastName: '', email: '', phoneNumber: '', password: '', isSeller: false });
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setUser({ ...user, isSeller: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthService.register(user).then(
      () => {
        history.push('/login');
      },
      error => {
        setErrorMessage('Registration failed');
      }
    );
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold">Register</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">Login</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300" name="login" value={user.login} onChange={handleInputChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300" name="firstName" value={user.firstName} onChange={handleInputChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300" name="lastName" value={user.lastName} onChange={handleInputChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full mt-1 p-2 border border-gray-300" name="email" value={user.email} onChange={handleInputChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300" name="phoneNumber" value={user.phoneNumber} onChange={handleInputChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" className="w-full mt-1 p-2 border border-gray-300" name="password" value={user.password} onChange={handleInputChange} required />
        </div>
        <div className="mb-4 flex items-center">
          <input type="checkbox" className="mr-2" id="isSeller" checked={user.isSeller} onChange={handleCheckboxChange} />
          <label htmlFor="isSeller" className="text-gray-700">I am a Seller</label>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Register</button>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Register;
