import React from 'react'

function AddAssetButton({submitBtnName}) {
  return (
    <button type="submit" className="px-8 py-2 font-semibold rounded-md dark:bg-blue-400 text-gray-800">{submitBtnName}</button>
  )
}

export default AddAssetButton