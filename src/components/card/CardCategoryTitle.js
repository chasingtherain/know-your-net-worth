import React from 'react'

function CardCategoryTitle({category}) {
  return (
    <div>
        <p className="text-lg dark:text-gray-200 mb-4">{category}</p>
        <div className="flex justify-between w-full pb-2">
            <div className="text-center space-y-1 pl-2">
                <p className="text-sm dark:text-gray-400 w-1/3">Name</p>
            </div>
            <div className='text-center'>
                <p className="text-sm dark:text-gray-400 w-1/3">Quantity</p>
            </div>
            <div className="text-center">
                <p className="text-sm dark:text-gray-400 w-1/3">Value</p>
            </div>
        </div>
    </div>
  )
}

export default CardCategoryTitle