import React from 'react'

function Header() {
  return (
    <div className='flex justify-between p-5 items-center text-center bg-gradient-to-r from-purple-500 to-pink-500 m-1 rounded-lg'>
        <div><img className='w-1/5 border-1 border-solid border-red-600 rounded-full' src="https://images.pexels.com/photos/7381555/pexels-photo-7381555.jpeg?auto=compress&cs=tinysrgb&w=600" alt='out' /></div>
        <div>
            <ul className='flex gap-10 text-2xl text-700 text-slate-200 cursor-pointer'>
                <li className='hover:text-red-900'>Home</li>
                <li className='hover:text-red-900'>About</li>
                <li className='hover:text-red-900'>Login</li>
            </ul>
        </div>
    </div>
    
  )
}

export default Header