import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import AddAssetButton from '../buttons/AddAssetButton';
import BackToNetWorthBtn from '../buttons/BackToNetWorthBtn';

function AssetForm({submitBtnName}) {
    const [category, setCategory] = useState("")
    const [quantity, setQuantity] = useState("")
    const [name, setName] = useState("")
    const [value, setValue] = useState("")
    const validateForm = (e) => {
        e.preventDefault()
        // checks that all fields are filled
        if (category === "" || quantity === "" || name === "" || value === "") 
            return toast.warn("Please complete all fields!")
        // resetField()
        // pending logic to add new item to existing asset list
        return toast.success("Added to overall net worth!")
    }
    const resetField = () => {
        setCategory("")
        setQuantity("")
        setName("")
        setValue("")
    }
    return (
        <div className='dark:bg-gray-900 dark:text-gray-100'>
            <form onSubmit={validateForm} className="p-6 rounded-md">
                <h2 className="text-2xl font-semibold leading-tight tracking-wide">Add New Item</h2>
                <div className="grid gap-4 col-span-full">
                    <div className="space-y-2 col-span-full">
                        <label for="asset-type" className="text-sm">Select Asset</label>
                        <select name="asset-type"class="select w-full max-w-xs text-slate-700 py-2" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option disabled selected className='text-slate-300'></option>
                            <option value="Cryptocurrency">Cryptocurrency</option>
                            <option value="Stocks and Bonds">Stocks and Bonds</option>
                            <option value="Home">Home</option>
                            <option value="Vehicle">Vehicle</option>
                            <option value="Cash">Cash</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="space-y-2 col-span-full">
                        <label for="quantity" className="text-sm">How many do you own?</label>
                        <input id="quantity" type="number" value={quantity} step="0.01" placeholder="e.g. 100 (only digits, omit commas)" className="py-1 w-full dark:border-gray-700 dark:text-gray-900 text-slate-500" onChange={(e) => setQuantity(e.target.value)} />
                    </div>
                    <div className="col-span-full">
                        <label for="name" className="text-sm">Asset Name</label>
                        <input id="name" type="text" value={name} maxlength="30" placeholder="e.g. btc" className="py-1 w-full focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label for="value" className="text-sm">Asset value</label>
                        <div className="flex">
                            <span className="flex items-center px-3 py-2 pointer-events-none sm:text-sm dark:bg-gray-700">USD</span>
                            <input type="number" step="0.01" name="value" value={value} maxlength="9" id="value" placeholder="e.g. 999 (only digits, omit commas)" className="py-1 flex flex-1 text-left border sm:text-sm rounded-l-sm focus:ring-inset focus:ring-blue-400 text-slate-700" onChange={(e) => setValue(e.target.value)} />
                        </div>
                    </div>
                    <AddAssetButton submitBtnName={submitBtnName}/>
                </div>
            </form>
        </div>
    )
}

export default AssetForm