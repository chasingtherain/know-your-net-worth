import React from 'react'
import { useNetWorthContext } from '../../hooks/useNetWorthContext'
import ListItem from './ListItem'

function CurrentAssetList() {
    const {assetList} = useNetWorthContext()

  return (
    <div className="flex flex-col w-2/3 h-[48rem] p-6 space-y-6 overflow-hidden rounded-md bg-gray-900 text-gray-100 overflow-y-scroll">
        {assetList.map((asset) => <ListItem asset={asset} name={asset.name} quantity={asset.quantity} value={asset.value} category={asset.category} />)}
        <ListItem/>
    </div>
  )
}

export default CurrentAssetList