import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { auth } from '../services/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

const Navbar = () => {
  const [user, setUser] = useState(null);

  // useEffect to set up a listener for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the user state when auth state changes
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, []);

  // Function to dynamically assign classes based on whether the link is active or not
  const linkClass = ({ isActive }) => 
    isActive 
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" 
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* Logo */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                React Jobs
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={linkClass}>
                  Jobs
                </NavLink>
                <NavLink to="/add-job" className={linkClass}>
                  Add Job
                </NavLink>
                 {/* Conditional rendering of Sign In / Sign Out links based on user authentication */}
                {user ? (
                  <NavLink to="/sign-out" className={linkClass}>
                    Sign Out
                  </NavLink>
                ) : (
                  <NavLink to="/sign-in" className={linkClass}>
                    Sign In
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
