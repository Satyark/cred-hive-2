import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div>Login Page --- Add the login comp here </div>
      <Link href="/dashboard">
        <button className='px-2 py-2 bg-blue-500 rounded-md mt-4'>
          Login
        </button>
      </Link>
    </>
  )
}
