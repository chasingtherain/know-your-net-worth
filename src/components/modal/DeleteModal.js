import React from 'react'
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

function DeleteModal() {
  return (
    <div>
        {/* <!-- The button to open modal --> */}
        <label for="my-modal-4">
            <AiOutlineDelete className='text-2xl cursor-pointer'/>
        </label>
        
        {/* <!-- Put this part before </body> tag --> */}
        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
        <div class="modal bg-opacity-70">
            <div class="modal-box relative bg-gray-900 text-gray-50 border-gray-50 border-2">
                <label for="my-modal-4" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <p className='text-lg font-semibold mb-4 text-center'>This action is permanent and cannot be undone.</p>
                <p className='text-center text-md my-4'>Confirm?</p>
                <div className='flex justify-center content-center gap-4'>
                    <button className='px-12 py-2 rounded-sm shadow-sm dark:bg-red-400 font-semibold dark:text-gray-900'>Delete</button>
                    <button className='px-12 py-2 rounded-sm border-2 font-semibold' onClick={()=>{document.getElementById('my-modal-4').checked = false}}>Keep It</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteModal