import React from 'react'
import { useNetWorthContext } from '../hooks/useNetWorthContext'
import CardCategoryTitle from './CardCategoryTitle'
import ItemContent from './ItemContent'


function NetWorthCategory({category, isLiability}) {
  
  const {assetList, liabilityList} = useNetWorthContext()

  const list = (category === "Loan" || category === "Credit Card" ? liabilityList : assetList)

  return (
    <div className='pt-4'>
      <CardCategoryTitle category={category} isLiability={isLiability}/>
      <ul>
          {list
            .filter(item => item.category === category)
            .map((item) => <li className=""> <ItemContent name={item.name} quantity={item.quantity} value={item.value}/></li>)}
      </ul>
    </div>
  )
}

export default NetWorthCategory