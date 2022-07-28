import React from 'react'
import { Link } from 'react-router-dom'
import LiabilityCard from '../components/card/LiabilityCard'
import NetWorthCard from '../components/card/NetWorthCard'
import { useNetWorthContext } from '../hooks/useNetWorthContext'

function HomePage() {
  const {assetListTotal, formatter, liabilityListTotal} = useNetWorthContext()
  return (
    <div className='flex flex-col justify-center align-center'> 
        <h1 className="text-4xl text-center my-12 font-bold leading-none sm:text-5xl"> Net worth: {formatter.format(assetListTotal-liabilityListTotal)} </h1>
        <button type="button" className="py-3 font-semibold rounded-md dark:bg-slate-400 text-gray-800 w-1/2 ml-72">
          <Link to="/updateitem">update asset</Link> 
        </button>
        <div className='flex flex-row justify-center gap-8'>
            <NetWorthCard cardTitle="What you own" titleColor="text-green-500"/>
            <LiabilityCard cardTitle="What you owe" titleColor="text-red-500"/>
        </div>
    </div>
  )
}

export default HomePage