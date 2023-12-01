import React from 'react'

function Login() {
  return (
    <div className='md:w-1/2 border-2 w-5/6 border-black border-solid flex flex-col justify-evenly p-10 mx-auto md:mx-auto bg-gradient-to-b from-purple-600 to-pink-600 rounded-lg'>
      <div>
        <div className='flex justify-between m-3'>
          <h2 className='text-2xl'>Email</h2>
          <input type="text" placeholder='Enter Your Email' className='border-2 border-black border-solid'/>
        </div>
        <div className='flex justify-between m-3'>
          <h2 className='text-2xl'>Password</h2>
          <input type="text" placeholder='Enter Your Password' className='border-2 border-black border-solid' />
        </div>
      </div>
      <button className='bg-purple-500 w-min m-auto border-2 border-black border-solid p-2 rounded-lg hover:bg-red-500 hover:text-white'>Submit</button>
      <div className='flex justify-between m-3'>
        <h4 className='cursor-pointer hover:text-blue-900 hover:scale-125'>Forgot Password ?</h4>
        <h4 className='cursor-pointer hover:text-blue-900 hover:scale-125'>Create New Account</h4>
      </div>

      
     
    </div>
  )
}

export default Login