import React from 'react'
import NetWorthCard from '../components/card/NetWorthCard'

function HomePage() {
  return (
    <div>
        <h1 className="text-4xl text-center my-12 font-bold leading-none sm:text-5xl"> Net worth: $999,800 </h1>
        <div className='flex flex-row justify-center gap-8'>
            <NetWorthCard cardTitle="What you own" titleColor="text-green-500"/>
            <NetWorthCard cardTitle="What you owe" titleColor="text-red-500"/>
        </div>
    </div>
  )
}

export default HomePage