import React from 'react'
import { useNetWorthContext } from '../../hooks/useNetWorthContext'
import NetWorthCategory from './NetWorthCategory'

function NetWorthCard({cardTitle,titleColor}) {
  const {assetListTotal, formatter} = useNetWorthContext()

  return (
    <div className="flex flex-col w-1/2 max-w-lg p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 divide-y divide-gray-700">
        <div className='flex flex-row justify-between'>
          <h2 className={`text-2xl font-semibold ${titleColor}`}>{cardTitle}</h2>
          <h2 className={`text-2xl font-semibold ${titleColor}`}>{formatter.format(assetListTotal)}</h2>
        </div>
        <NetWorthCategory category="Cryptocurrency"/>
        <NetWorthCategory category="Investment"/>
        <NetWorthCategory category="Housing"/>
        <NetWorthCategory category="Vehicle"/>
    </div>
  )
}

export default NetWorthCard