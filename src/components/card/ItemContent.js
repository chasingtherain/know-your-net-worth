import React, { useState } from 'react'

function ItemContent({category, name, quantity, value}) {
  const [dataSet, setDataSet] = useState([])

  switch(category) {
    case "Cryptocurrency":

      break;
    case "Investment":

      break;
    case "Housing":

      break;
    default:
      break;
  }

  return (
    <div className="flex justify-around pb-1 my-2">
        <div className="w-1/3">
            <h3 className="font-semibold text-left leading-snug sm:pr-8">{name}</h3>
        </div>
        <div className='text-center w-1/3'>
            <p className="font-semibold">{quantity}</p>
        </div>
        <div className="text-right w-1/3">
            <p className="font-semibold">{value}</p>
        </div>
    </div>
  )
}

export default ItemContent