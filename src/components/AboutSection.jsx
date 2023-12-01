import React from 'react'

function AboutSection({title,content}) {
  return (
    <div className='border-2 border-blue-950 md:w-1/6 flex flex-col justify-evenly items-center m-3 bg-gradient-to-b from-purple-600 to-pink-200 rounded-xl'>
        <h1 className='text-center text-xl font-semibold'>{title}</h1>
        <p className='text-lg text-gray-600 p-2 '>{content}</p>
    </div>
  )
}

export default AboutSection