import React from 'react'
import AssetForm from '../components/form/AssetForm'
import CurrentAssetList from '../components/list/CurrentAssetList'
import DeleteModal from '../components/modal/DeleteModal'

function AssetPage() {
  return (
    <div>
      {/* <p className='text-center text-2xl font-semibold'>Update assets</p> */}
      <div className='flex flex-row justify-center gap-8 my-12'>
          <AssetForm submitBtnName="Add"/>
          <CurrentAssetList/>
      </div>
      {/* <DeleteModal/> */}
    </div>
  )
}

export default AssetPage