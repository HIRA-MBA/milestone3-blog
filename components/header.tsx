import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
    <header className=" mb-4 border-2 border-gray-400 bg-black text-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      
        
          <span className="ml-3 font-bold text-xl">My Blogs</span>
    
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link className="mr-5 hover:text-gray-200" href="/">Home</Link>
          <Link className="mr-5 hover:text-gray-200" href="/About">About </Link>
          <Link className="mr-5 hover:text-gray-200" href="/Contact">Contact</Link>
         
        </nav>
        
      </div>
    </header>
    </div>
  )
}

export default Header