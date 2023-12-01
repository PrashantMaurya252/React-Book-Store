import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-10 mx-2 md:mx-2">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-sm">
            The Novel Stop is dedicated to bringing you the best in literature. Explore our curated collection of books and join our vibrant reading community.
          </p>
        </div>

        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="text-sm">
            <li><a href="#home">Home</a></li>
            <li><a href="#catalog">Catalog</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-sm">123 Book Street, Cityville</p>
          <p className="text-sm">Email: info@yourbookstore.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm">&copy; 2023 The Novel Stop. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer