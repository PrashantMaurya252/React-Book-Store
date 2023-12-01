import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'


function Book() {

    const [books,setBooks]=useState([]);

    React.useEffect(()=>{
        fetch('https://www.googleapis.com/books/v1/volumes?q=quilting').then(res=>res.json()).then(data=>setBooks(data.items));

    },[])

 

    const store=books && books.map((item)=>(
    <div key={item.id} className='flex flex-col justify-between items-center mx-auto border-1 border-black border solid w-5/6 md:w-1/4 rounded-lg p-11 bg-gradient-to-b from-purple-500 to-pink-500 shadow-2xl shadow-purple-900 hover:scale-105 hover:border-red-600'>
      <Link to={`/book/${item.id}`}>
      <img src={item.volumeInfo.imageLinks.thumbnail} />
      <h1 className='text-2xl font-medium text-gray-200'>Title :<span className='text-xl text-gray-800'>{item.volumeInfo.title}</span></h1>
      <h3 className='text-2xl text-gray-200'>Author:<span className='text-xl text-gray-800'>{item.volumeInfo.authors[0]}</span></h3>
      </Link>
      
    </div>))
  return (
    <>
    <div className='flex flex-col md:flex-row md:flex-wrap gap-10 justify-center items:center'>{store}</div>
    
    </>
    
    
    
  )
}

export default Book