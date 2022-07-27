import React, { createContext } from 'react'

export const NetWorthContext = createContext()

export const NetWorthContextProvider = ({children}) => {

    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    const assetList = [{
        "name": "btc",
        "quantity": 1.56,
        "value": 10000,
        "category": "Cryptocurrency"
      },{
        "name": "eth",
        "quantity": 1.56,
        "value": 10000,
        "category": "Cryptocurrency"
      },{
        "name": "bnb",
        "quantity": 1.56,
        "value": 500,
        "category": "Cryptocurrency"
      },{
        "name": "Tencent",
        "quantity": 100,
        "value": 500,
        "category": "Investment"
      },
      {
        "name": "HDB",
        "quantity": 1,
        "value": 500000,
        "category": "Housing"
      }
    ]

    const liabilityList = [{
        "name": "housing",
        "value": 100000,
        "category": "Loan"
      },
      {
        "name": "visa",
        "value": 100000,
        "category": "Credit Card"
      },
      {
        "name": "student",
        "value": 100000,
        "category": "Loan"
      }
    ]

    const assetListTotal = assetList
                        .map(item => item.value)
                        .reduce((c,v)=>c+v)

    const liabilityListTotal = liabilityList
                        .map(item => item.value)
                        .reduce((c,v)=>c+v)
    

    return (
        <NetWorthContext.Provider value={{
                assetList,
                liabilityList,
                assetListTotal,
                liabilityListTotal,
                formatter
            }}>
            {children}
        </NetWorthContext.Provider>
    )
}

export default NetWorthContext