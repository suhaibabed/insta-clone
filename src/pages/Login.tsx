import React from 'react'
import { Link } from "react-router-dom";

const Login = () => {
 return (
    <div className='container flex mx-auto max-w-screen-md items-center h-screen'>
        <div className='flex w-3/5'>
        <img 
        className='max-w-full'
        src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
        </div>
        <div className='flex flex-col w-2/5'>
         <h1 className='flex justify-center w-full'>
          <img src='/images/logo.png' alt="instagram" className='mt-2 w-6/12 mb-4' />
         </h1>
         <form onSubmit={()=>{}} method='POST'>
            <input
             aria-label='Enter your email address'
             type='text'
             placeholder='Email Address'
             className='text-sm text-gray-base
              w-full mr-3 py-5 px-4 h-2
              border-gray-primary rounded mb-2'
              onChange={(event)=> console.log(event.target.value)}
            />
            <input
             aria-label='Enter your Password'
             type='Password'
             placeholder='Your Password'
             className='text-sm text-gray-base
              w-full mr-3 py-5 px-4 h-2
              border-gray-primary rounded mb-2'
              onChange={(event)=> console.log(event.target.value)}
            />
            <button type='submit' className='bg-sky-600 text-white w-full rounded h-8 font-bold'>Sign In</button>
         </form>
         <div className="flex justify-center items-center flex-col w-full bg-white p-4 mt-4 rounded border border-gray-primary">
          <p className="text-sm">
            Don't have an account?{` `}
            <Link to='/signup' className="font-bold text-blue-700">
              Sign up
            </Link>
          </p>
        </div>
        </div>
       
    </div>
  )
}

export default Login