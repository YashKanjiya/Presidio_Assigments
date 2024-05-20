import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../services/AuthService';

const Login = () => {
  const [loginData, setLoginData] = useState({ login: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthService.login(loginData).then(
      () => {
        history.push('/');
        window.location.reload();
      },
      error => {
        setErrorMessage('Invalid login or password');
      }
    );
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold">Login</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">Login</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300" name="login" value={loginData.login} onChange={handleInputChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" className="w-full mt-1 p-2 border border-gray-300" name="password" value={loginData.password} onChange={handleInputChange} required />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Login</button>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
