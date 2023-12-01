import React from 'react'
import AboutSection from '../components/AboutSection'

function About() {
  return (
    <>
    <div className='md:w-11/12  h-screen flex justify-center items-center m-auto'>
       <div className="flex flex-col justify-evenly items-center w-full h-1/2  bg-cover bg-center text-center rounded-xl " style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1535905496755-26ae35d0ae54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHdpZGUlMjBib29rcyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D')",
  }} >
        <h1 className=' text-5xl font-extrabold shadow-2xl shadow-slate-800 text-slate-200 hover:text-purple-700 '>Welcome to The Novel Spot</h1>
        <p className='text-slate-200 text-3xl font-semibold hover:text-purple-700'>Explore a vast collection of books that will transport you to different worlds</p>
       </div>
       
    </div>
    <div className='flex flex-col md:flex-row md:mx-auto flex-wrap md:flex-nowrap p-2 mx-auto'>
      <AboutSection title="Welcome to The Novel Spot  A Literary Haven for Bibliophiles" content="At The Novel Spot, we believe that every book has a story, and so does every reader. Nestled in the heart of [Your Location], our bookstore is more than just a collection of books; it's a celebration of the written word and a sanctuary for book lovers." />

      <AboutSection title="Our Story: A Tale of Passion and Pages" content="Founded in 2023, The Novel Stop was born out of a shared love for literature and the desire to create a space where book enthusiasts could explore, discover, and connect. Our journey began with a humble selection of titles and a vision to build a community around the magic of storytelling."/>
      <AboutSection title="A Curated Collection: Where Quality Meets Passion" content="Step into our store, and you'll find more than just shelves lined with books. Each title is carefully curated, reflecting our commitment to quality literature across genres. From timeless classics to contemporary gems, our collection is a testament to the diverse voices and narratives that make the world of literature so enchanting."/>
      <AboutSection title="Community Corner: Where Readers Become Friends" content="Beyond being a bookstore, The Novel Stop is a hub for bibliophiles to come together. Join us for book clubs, author events, and literary discussions that spark the imagination. We believe in fostering a sense of community where readers can share their love for books and forge lasting connections."/>
      <AboutSection title="Our Team: Passionate Advocates of the Written Word" content="Meet the faces behind The Novel Stop. Our team is comprised of avid readers, storytellers, and literary enthusiasts dedicated to helping you find the perfect book. Whether you're seeking a hidden gem or a familiar favorite, we're here to guide you on your literary journey."/>
      <AboutSection title="Visit Us: Immerse Yourself in the World of Books" content="We invite you to explore The Novel Stop both online and in-store. Immerse yourself in the enchanting world of books, where every page tells a story and every corner invites you to discover something new.

Thank you for being a part of our story. Let's embark on a literary adventure together!"/>
    </div>
    </>
  )
}

export default About