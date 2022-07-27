import React from 'react'

function ItemContent({itemName,itemQty}) {
  return (
    <div className="flex justify-around pb-1 my-2">
        <div className="w-1/3">
            <h3 className="font-semibold text-left leading-snug sm:pr-8">{itemName}</h3>
        </div>
        <div className='text-center w-1/3'>
            <p className="font-semibold">{itemQty}</p>
        </div>
        <div className="text-right w-1/3">
            <p className="font-semibold">$40,900</p>
        </div>
    </div>
  )
}

export default ItemContent