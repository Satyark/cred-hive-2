'use client'
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { FaEnvelope, FaMobile,FaMale, FaLockOpen,FaLock,FaUserAlt } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  //const [lastName, setLastName] = useState('');
  const [date,setDate] = useState('');
  const [contact, setContact] =useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = () => {
    if(name===""){
        setErrorMessage("Please enter your first name")
        return;
    }
    // if(lastName===""){
    //     setErrorMessage("Please enter your last name")
    //     return;
    // }
    if(date===""){
        setErrorMessage("Please enter your DOB")
        return;
    }
    if(email===""){
        setErrorMessage("Please enter your email")
        return;
    }
    if(contact===""){
        setErrorMessage("Please enter your mobile number")
        return;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Invalid email address');
      return;
    }
    if(password===""){
      setErrorMessage("Please set a password")
      return;
    }
    if(confirmPass===""){
      setErrorMessage("Please confirm your password")
      return;
  }
    if (!password || password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return;
    }
    if (confirmPass!==password) {
        setErrorMessage('Password does not match.');
        return;
      }
      else{
        redirect('/login')
      }

    
    setErrorMessage('');
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-violet-400'>
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <div className="bg-white rounded-xl shadow-2xl flex max-w-4xl">
          <div className='text-black p-5'>
            <div className='text-center font-bold pt-3'>
              <span className='text-violet-400 text-5xl'>Cred</span><span className='text-5xl'>Hive</span>
            </div>

            <div className="py-5">
              <h2 className='text-xl font-bold text-black mb-2'>Sign up to create an account.</h2>
              <h2 className='text-sm font-bold text-gray-700 mb-2'>Already have an account?<Link href="/login" className='text-violet-400'> Login</Link></h2>
            </div>

            <div className='flex flex-col items-center '>

            <div className='bg-gray-200 w-64 p-2 flex items-center mb-3'> 
            <FaUserAlt className='text-grey-200 m-2' />
                <input
                  type="text"
                  name='name'
                  placeholder=' name'
                  className='bg-gray-200 outline-none text-sm flex-1'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            
              {/* <div className='bg-gray-200 w-64 p-2 flex items-center mb-3'> 
              <FaMale className='text-grey-200 m-2' />
                <input
                  type="text"
                  name='lastName'
                  placeholder='Last Name'
                  className='bg-gray-200 outline-none text-sm flex-1'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div> */}
              <div className='bg-gray-200 w-64 p-2 flex items-center mb-3 justify-between'>
                 
                <input
                  type="date"
                  name='date'
                  placeholder='date'
                  className='bg-gray-200 outline-none text-sm flex-1'
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

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

              <div className='bg-gray-200 w-64 p-2 flex items-center mb-3 justify-between'>
                 <FaMobile className='text-grey-200 m-2' />
                <input
                  type="number"
                  name='number'
                  placeholder='Mobile Number'
                  className='bg-gray-200 outline-none text-sm flex-1'
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>


              <div className='bg-gray-200 w-64 p-2 flex items-center mb-3'>
                <FaLockOpen className='text-grey-200 m-2' />
                <input
                  type="password"
                  name='password'
                  placeholder='Password'
                  className='bg-gray-200 outline-none text-sm flex-1'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className='bg-gray-200 w-64 p-2 flex items-center mb-3'>
                <FaLock className='text-grey-200 m-2' />
                <input
                  type="password"
                  name='Confirm password'
                  placeholder='Confirm Password'
                  className='bg-gray-200 outline-none text-sm flex-1'
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                />
              </div>

              <div className='flex w-64 mb-5 justify-between'>
                <label className='flex items-center text-xs'>
                  <input type="checkbox" name='remember' className='mr-1' />
                  Remember me
                </label>
                <Link href='#' className='text-xs'>Forgot Password</Link>
              </div>

              <p className="text-red-500 text-xs">{errorMessage}</p>

              <button
                onClick={handleSignup}
                className='border-2 border-violet-400 text-violet-400 rounded-full py-2 px-12 inline-block font-semibold
                 hover:bg-violet-400 hover:text-white pt-2'
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;

