'use client';

import { FaGoogle } from 'react-icons/fa6';

export default function SignInButton() {
  const handleSignIn = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google/login`;
  };

  return (
    <button
      onClick={handleSignIn}
      className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg px-6 py-3 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
    >
      <FaGoogle />
      <span>Sign in with Google</span>
    </button>
  );
}
