import React from 'react'

function DashBoard() {
  return (
    <div className='mt-10'>
        <div className='flex md:flex-row md:9/12 w-9/1 justify-between items-center bg-gradient-to-r from-yellow-800 to-yellow-200 m-1 ml-8 mr-8 gap-10 rounded-lg p-5 h-1/4 '>
            <img className='rounded-lg' src="https://images.unsplash.com/photo-1431608660976-4fe5bcc2112c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJvb2slMjBzdG9yZSUyMHN5bWJvbHxlbnwwfHwwfHx8MA%3D%3D" />
            <p className='flex flex-wrap text-xl '>A reader lives a thousand lives before he dies. The man who never reads lives only one. -<span className='text-3xl'>George R.R. Martin</span> </p>
        </div>
        <div className='flex w-9/1 justify-between items-center bg-gradient-to-r from-yellow-800 to-yellow-200 m-1 rounded-lg p-5 flex-row-reverse ml-8 mr-8 '> 
            <img className='rounded-lg' src="https://images.unsplash.com/photo-1514894780887-121968d00567?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGJvb2slMjBzdG9yZSUyMHN5bWJvbHxlbnwwfHwwfHx8MA%3D%3D" />
            <p className='flex flex-wrap text-xl '>I have always imagined that Paradise will be a kind of library.-<span className='text-3xl font-medium'>Jorge Luis Borges </span> </p>
        </div>
    </div>
  )
}

export default DashBoard