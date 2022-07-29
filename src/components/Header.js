import React from 'react'
import { Link } from 'react-router-dom'
import piggyBank from '../images/piggyBank.png'

function Header() {
  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex justify-between h-16">
             <Link to="/"> <img className='w-16' src={piggyBank} alt="logo"/></Link>
            <div className="items-center flex-shrink-0 hidden lg:flex gap-4">
                <button className="self-center px-8 py-3 rounded border-2">
                  <Link to="/login">Sign in</Link>
                </button>
                <button className="self-center px-8 py-3 font-semibold rounded dark:bg-blue-400 dark:text-gray-900"><Link to="/signup">Register</Link></button>
            </div>
        </div>
    </header>
  )
}

export default Header