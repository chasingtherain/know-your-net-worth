import React from 'react'
import { useNetWorthContext } from '../hooks/useNetWorthContext'
import NetWorthCategory from './NetWorthCategory'

function NetWorthCard({cardTitle,titleColor}) {
  const {formatter} = useNetWorthContext()

  return (
    <div className="flex flex-col w-1/2 max-w-lg p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 divide-y divide-gray-700">
        <div className='flex flex-row justify-between'>
          <h2 className={`text-2xl font-semibold ${titleColor}`}>{cardTitle}</h2>
          <h2 className={`text-2xl font-semibold ${titleColor}`}>{formatter.format(380000)}</h2>
        </div>
        <NetWorthCategory itemName="BTC" itemQty={1.56} category="Cryptocurrency"/>
        <NetWorthCategory itemName="TENCENT" itemQty={100} category="Investment"/>
        <NetWorthCategory itemName="HDB" itemQty={1} category="Housing"/>
        <NetWorthCategory itemName="Lamborgini" itemQty={1} category="Vehicle"/>
    </div>
  )
}

export default NetWorthCard