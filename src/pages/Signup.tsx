import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
    <div className="flex w-3/5">
      <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
    </div>
    <div className="flex flex-col w-2/5">
      <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
        <h1 className="flex justify-center w-full">
          <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
        </h1>


        <form onSubmit={()=>{}} method="POST">
          <input
            aria-label="Enter your username"
            type="text"
            placeholder="Username"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
            onChange={({ target }) => console.log(target.value)}
            
          />
          <input
            aria-label="Enter your full name"
            type="text"
            placeholder="Full name"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
            onChange={({ target }) => console.log(target.value)}
           
          />
          <input
            aria-label="Enter your email address"
            type="text"
            placeholder="Email address"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
            onChange={({ target }) => console.log(target.value)}
            
          />
          <input
            aria-label="Enter your password"
            type="password"
            placeholder="Password"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
            onChange={({ target }) => console.log(target.value)}
 
          />
          <button
        
            type="submit"
            className="bg-sky-600 text-white w-full rounded h-8 font-bold"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
        <p className="text-sm">
          Have an account?{` `}
          <Link to='/login' className="font-bold text-blue-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  </div>
  )
}

export default SignUp