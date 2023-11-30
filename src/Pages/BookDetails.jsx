import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function BookDetails() {
    const param=useParams();
    const [details,setDetails]=useState(null);
    React.useEffect(()=>{
        fetch(`https://www.googleapis.com/books/v1/volumes/${param.id}`).then(res=>res.json()).then(data=>setDetails(data));

    },[param.id])

    return(
        <div className='bg-gradient-to-r from-purple-600 to-pink-200'>
            <h1 className='text-center text-2xl bg-purple-800'>Book Details Goes Here</h1>
            {details ?(
             <div className='flex flex-col items-start justify-between p-11'>
                 <img className='w-1/6' src={details.volumeInfo.imageLinks.thumbnail} />
                 <h1 className='text-3xl font-semibold'>{details.volumeInfo.title}</h1>
                 <h3 className='text-lg font-medium text-gray-700'><span className='text-xl text-gray-900 font-medium'>Author</span>:{details.volumeInfo.authors[0]}</h3>
                 <h4 className='text-lg font-medium text-gray-700'><span className='text-xl text-gray-900 font-medium'>Publisher</span>:{details.volumeInfo.publisher}</h4>
                 <h4 className='text-lg font-medium text-gray-700'><span className='text-xl text-gray-900 font-medium'>Publisher Date</span>:{details.volumeInfo.publishedDate}</h4>
                 <p className='text-lg font-medium text-gray-700'><span className='text-xl text-gray-900 font-medium'>Description</span> :{details.volumeInfo.description}</p>  
             </div>
            ):<h2>Loading</h2>}
        </div>
    )


    

}


export default BookDetails