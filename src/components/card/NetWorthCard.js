import React from 'react'
import NetWorthCategory from './NetWorthCategory'

function NetWorthCard({cardTitle,titleColor}) {
  return (
    <div className="flex flex-col w-1/2 max-w-lg p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 divide-y divide-gray-700">
        <h2 className={`text-2xl font-semibold ${titleColor}`}>{cardTitle}</h2>
        <NetWorthCategory itemName="BTC" itemQty={1.56} category="Cryptocurrency"/>
        <NetWorthCategory itemName="TENCENT" itemQty={100} category="Investment"/>
        <NetWorthCategory itemName="HDB" itemQty={1} category="Housing"/>
        <NetWorthCategory itemName="Lamborgini" itemQty={1} category="Vehicle"/>
    </div>
  )
}

export default NetWorthCard