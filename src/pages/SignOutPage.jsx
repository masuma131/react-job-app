import React from "react";
import { auth } from "../services/firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignOutPage = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
      navigate("/sign-in"); // Redirect to login page or any other route after sign-out
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md h-[65vh] bg-white p-8 rounded-lg shadow-md flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-center mb-6">Signed Out</h2>
        <p className="text-center text-gray-700 mb-6">
          You have successfully signed out. See you next time!
        </p>
        <button
          onClick={handleSignOut}
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignOutPage;
