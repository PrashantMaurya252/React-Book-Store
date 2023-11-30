import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    
    <div className='flex justify-between p-5 items-center text-center bg-gradient-to-r from-purple-500 to-pink-500 m-1 rounded-lg'>
        <Link to='/'><div><img className='w-1/5 border-1 border-solid border-red-600 rounded-full hover:scale-150' src="https://images.pexels.com/photos/7381555/pexels-photo-7381555.jpeg?auto=compress&cs=tinysrgb&w=600" alt='out' /></div></Link>
        <div>
            <ul className='flex gap-10 text-2xl text-700 text-slate-200 cursor-pointer'>
                <Link className='hover:text-red-900 hover:scale-150 ' to='/'>Home</Link>
                <Link to='/book'><li className='hover:text-red-900 hover:scale-150'>Books</li></Link>
                <Link to='/about'><li  className='hover:text-red-900 hover:scale-150'>About</li></Link>
                <Link to='/login'><li className='hover:text-red-900 hover:scale-150'>Login</li></Link>
            </ul>
        </div>
    </div>
    <h1 className='text-center text-3xl font-extrabold text-pink-500 hover:text-purple-700 m-10'>The Novel Spot</h1>
    </>
    
    
  )
}

export default Header