'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaEnvelope,FaLock } from 'react-icons/fa';

function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if(email===""){
        setErrorMessage("Please enter your email")
        return;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Invalid email address');
      return;
    }
    if (!password || password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return;
    }

    setErrorMessage('');
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 font-jeko'>
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <div className="bg-white rounded-xl shadow-2xl flex max-w-4xl">
          <div className='text-black p-5'>
            <div className='text-center font-bold pt-3'>
              <span className='text-myColor text-5xl'>Cred</span><span className='text-5xl'>Hive</span>
            </div>

            <div className="py-5">
              <h2 className='text-xl font-bold text-black mb-2'>Login</h2>
              {/* <h2 className='text-m font-bold text-gray-700 mb-2'>Welcome back!</h2> */}
              <h2 className='text-m font-bold text-myColor mb-2'>Please login to your account.</h2>
            </div>

            <div className='flex flex-col items-center '>
              <div className='bg-gray-200 w-64 p-2 flex items-center mb-3'>
                <FaEnvelope className='text-grey-200 m-2' />
                <input
                  type="email"
                  name='email'
                  placeholder='Email'
                  className='bg-gray-200 outline-none text-sm flex-1'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className='bg-gray-200 w-64 p-2 flex items-center mb-3'>
                <FaLock className='text-grey-200 m-2' />
                <input
                  type="password"
                  name='password'
                  placeholder='Password'
                  className='bg-gray-200 outline-none text-sm flex-1'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className='flex w-64 mb-5 justify-between'>
                <label className='flex items-center text-xs'>
                  <input type="checkbox" name='remember' className='mr-1' />
                  Remember me
                </label>
                <Link href='#' className='text-xs'>Forgot Password?</Link>
              </div>

              <p className="text-red-500 text-xs">{errorMessage}</p>
              <button
                onClick={handleLogin}
                className='border-2 border-myColor text-myColor rounded-full py-2 px-12 inline-block font-semibold
                 hover:bg-myColor hover:text-white pt-3 pb-3'
              >
                Sign In
              </button>
              <p className='text-m font-bold text-gray-700 mb-2 pt-3'>Or<Link href="/signup" className='text-myColor'> SignUp</Link></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;

