import React from 'react'
import { AiOutlineEdit } from "react-icons/ai";
import AssetForm from '../form/AssetForm';
import UpdateForm from '../form/UpdateForm';

function EditModal({asset}) {
  return (
    <div>
        {/* <!-- The button to open modal --> */}
        <label for="my-modal-5">
            <AiOutlineEdit className='text-2xl cursor-pointer' onClick={(e)=> console.log(asset)}/>
        </label>
        
        {/* <!-- Put this part before </body> tag --> */}
        <input type="checkbox" id="my-modal-5" class="modal-toggle" />
        <div class="modal bg-opacity-70">
            <div class="modal-box relative bg-gray-900 text-gray-50 border-gray-50 border-2">
                <UpdateForm asset={asset}/>
                <button className='ml-6 my-0 py-1 px-44 rounded-sm border-2 font-semibold' onClick={()=>{document.getElementById('my-modal-5').checked = false}}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default EditModal