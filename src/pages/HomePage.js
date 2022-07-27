import React from 'react'
import LiabilityCard from '../components/card/LiabilityCard'
import NetWorthCard from '../components/card/NetWorthCard'
import { useNetWorthContext } from '../components/hooks/useNetWorthContext'

function HomePage() {
  const {assetListTotal, formatter, liabilityListTotal} = useNetWorthContext()
  return (
    <div>
        <h1 className="text-4xl text-center my-12 font-bold leading-none sm:text-5xl"> Net worth: {formatter.format(assetListTotal-liabilityListTotal)} </h1>
        <div className='flex flex-row justify-center gap-8'>
            <NetWorthCard cardTitle="What you own" titleColor="text-green-500"/>
            <LiabilityCard cardTitle="What you owe" titleColor="text-red-500"/>
        </div>
    </div>
  )
}

export default HomePage