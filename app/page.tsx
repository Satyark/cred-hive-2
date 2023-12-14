import Link from 'next/link'
import Image from 'next/image'
import {FaFacebookF,FaGoogle,FaLinkedin,FaRegEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-indigo-900'>
    <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
     <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
      <div className='text-black w-3/5 p-5'>
          <div className='text-left font-bold'>
            <span className='text-blue-500 text-xl'>Cred</span><span className='text-xl'>Hive</span>
          </div>
          <div className='py-10'>
            <h2 className='text-3xl font-bold text-blue-500 mb-2'>Sign in to your Account</h2>
            <div className='border-2 w-10 border-blue-500 inline-block mb-2'></div>
            <div className='flex justify-center my-2'>
              <Link href="a" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                <FaFacebookF className='text-sm'/>
              </Link>
              <Link href="a" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                <FaLinkedin className='text-sm'/>
              </Link>
              <Link href="a" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                <FaGoogle className='text-sm'/>
              </Link>
            </div> {/*QuickLogin*/}
            <p className='text-gray-400 my-3'>Or use your email</p>
            <div className='flex flex-col items-center '>
              <div className='bg-gray-200 w-64 p-2 flex items-center mb-3'>
                <FaRegEnvelope className='text-grey-200 m-2'/>
                <input type="email" name='email' placeholder='Email' className='bg-gray-200 outline-none text-sm flex-1' />
                </div>
            
            
              <div className='bg-gray-200 w-64 p-2 flex items-center mb-3'>
                <MdLockOutline className='text-grey-200 m-2'/>
                <input type="password" name='password' placeholder='Password' className='bg-gray-200 outline-none text-sm flex-1' />
                </div>
            
            <div className='flex w-64 mb-5 justify-between'>
              <label className='flex items-center text-xs'><input type="checkbox" name='remember' className='mr-1'/>
              Remember me</label>
              <Link href='a' className='text-xs'>Forgot Password</Link>
            </div>
            <Link href="a" className='border-2 border-blue-500 text-blue-500 rounded-full py-2 px-12 inline-block font-semibold
           hover:bg-blue-500 hover:text-white'>Sign In</Link>
            </div>
          </div>
      </div>

      {/* SignUp */}
      <div className='text-white w-2/5 bg-blue-500 rounded-tr-2xl rounded-br-2xl py-36 px-12'>
          <h2 className='text-3xl font-bold mb-2'>Hey, There!</h2>
          <div className='border-2 w-10 border-white inline-block mb-2'></div>
          <p className='mb-10'>Fill up your personal information and start journey with us</p>
          <Link href="a" className='border-2 border-white rounded-full py-2 px-12 inline-block font-semibold
           hover:bg-white hover:text-blue-500'>Sign Up</Link>
      </div>
     </div>
    </main>
    </div>
    // <>
    
    //   <div>Login Page --- Add the login comp here </div>
    //   <Link href="/dashboard">
    //     <button className='px-2 py-2 bg-blue-500 rounded-md mt-4'>
    //       Login
    //     </button>
    //   </Link>
    // </>
  )
}
