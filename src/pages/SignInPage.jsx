import React, { useState } from 'react';
import { auth, googleProvider} from '../services/firebase-config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate, Link } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/")
      console.log("User Logged In: ", userCredential.user);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      console.log("User Signed In with Google: ", userCredential.user);
      navigate("/"); // Redirect to home or any page after sign-in
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md h-[65vh] bg-white p-8 rounded-lg shadow-md flex flex-col justify-between">
        <h2 className="text-2xl font-bold text-center">Login to Your Account</h2>
        <form onSubmit={handleLogin} className="space-y-4 flex-grow flex flex-col justify-center">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Log In
          </button>

          
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="w-full py-3 mt-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Sign In with Google
        </button>


        {error && <p className="mt-4 text-red-600 text-sm text-center">{error}</p>}

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-indigo-600 hover:underline">
            Create a new account
          </Link>
        </p>
      </div>
    </div>
  );
};


export default SignInPage;