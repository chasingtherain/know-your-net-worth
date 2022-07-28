import React from 'react'
import { Link } from 'react-router-dom'

function BackToNetWorthBtn() {
  return (
        <button type="button" className="px-8 py-3 font-semibold rounded-md dark:bg-red-400 text-gray-800 text-center">
            <Link to="/">Back to Net Worth page</Link> 
        </button>
  )
}

export default BackToNetWorthBtn