import React from 'react'

const Navbar = () => {
  return (
      <nav className='bg-gray-900 text-white flex justify-between items-center h-16 px-4'>
        <div className='logo font-bold text-lg'>GetMeChai</div>
        <ul className='flex justify-between items-center gap-10 font-light'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign up</li>
            <li>Login</li>
        </ul>
      </nav>
  )
}

export default Navbar
