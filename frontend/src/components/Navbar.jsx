import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthService from '../services/AuthService';

const Navbar = () => {
  const history = useHistory();
  const currentUser = AuthService.getCurrentUser();

  const logOut = () => {
    AuthService.logout();
    history.push('/login');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-white text-xl" to="/">Real Estate</Link>
        <div>
          {currentUser ? (
            <>
              {currentUser.user.isSeller ? (
                <>
                  <Link className="text-white mr-4" to="/my-properties">My Properties</Link>
                  <Link className="text-white mr-4" to="/add-property">Add Property</Link>
                </>
              ) : (
                <Link className="text-white mr-4" to="/properties">View Properties</Link>
              )}
              <button className="text-white" onClick={logOut}>Logout</button>
            </>
          ) : (
            <>
              <Link className="text-white mr-4" to="/login">Login</Link>
              <Link className="text-white" to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
