import React from 'react'
import CardCategoryTitle from './CardCategoryTitle'
import ItemContent from './ItemContent'

function NetWorthCategory({itemName, itemQty, category}) {
  return (
    <div className='pt-4'>
      <CardCategoryTitle category={category}/>
      <ul>
          <li className="">
              <ItemContent itemName={itemName} itemQty={itemQty}/>
              <ItemContent itemName={itemName} itemQty={itemQty}/>
              <ItemContent itemName={itemName} itemQty={itemQty}/>
              <ItemContent itemName={itemName} itemQty={itemQty}/>
              <ItemContent itemName={itemName} itemQty={itemQty}/>
              <ItemContent itemName={itemName} itemQty={itemQty}/>
              <ItemContent itemName={itemName} itemQty={itemQty}/>
              <ItemContent itemName={itemName} itemQty={itemQty}/>
          </li>
      </ul>
    </div>
  )
}

export default NetWorthCategory