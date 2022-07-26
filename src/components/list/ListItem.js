import React from 'react'
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import DeleteModal from '../modal/DeleteModal';
import EditModal from '../modal/EditModal';

function ListItem({asset, name,category, quantity,value}) {
    return (
    <div className="w-full p-4 rounded-md bg-gray-900 text-gray-50 border-gray-50 border-2">
        <div className="flex flex-row justify-between mb-2">
            <span className="block font-medium tracking-widest uppercase dark:text-blue-400">{name}</span>
            <div className='flex gap-6'>
                <EditModal asset={asset}/>
                <DeleteModal/>
            </div>
        </div>
        <div className='flex flex-row'>
            <div className='w-1/3'>
                <p className="tracking-widest"> Category: </p>
                <p className="tracking-widest"> {category}</p>
            </div>
            <div className='w-1/3'>
                <p className="tracking-widest"> Quantity: </p>
                <p className="tracking-widest text-left"> {quantity}</p>
            </div>
            <div className='w-1/3'>
                <p className="tracking-widest"> Individual value: </p>
                <p className="tracking-widest"> {value}</p>
            </div>
        </div>
        {/* <DeleteModal/> */}
    </div>
    )
}

export default ListItem