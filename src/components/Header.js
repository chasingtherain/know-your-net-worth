import React from 'react'

function Header() {
  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex justify-between h-16">
            <p></p>
            {/* <div className='flex flex-row gap-16'>
                <p>pricing</p>
                <p>pricing</p>
                <p>pricing</p>
            </div> */}
            <div className="items-center flex-shrink-0 hidden lg:flex">
                <button className="self-center px-8 py-3 rounded">Sign in</button>
                <button className="self-center px-8 py-3 font-semibold rounded dark:bg-blue-400 dark:text-gray-900">Sign up</button>
            </div>
        </div>
    </header>
  )
}

export default Header