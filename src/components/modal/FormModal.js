import React from 'react'

function FormModal() {
  return (
    <form novalidate="" action="" className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
        {/* button to close modal */}
        <button className="absolute top-2 right-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
            </svg>
        </button>

        <h2 className="text-2xl font-semibold leading-tight tracking-wide">Add Asset</h2>
        <div className="grid gap-4 col-span-full">
            <div className="space-y-2 col-span-full">
            <select class="select w-full max-w-xs text-slate-700">
                <option disabled selected>Select Asset</option>
                <option>Cryptocurrency</option>
                <option>Stocks and Bonds</option>
                <option>Home</option>
                <option>Vehicle</option>
            </select>
            </div>
            <div className="space-y-2 col-span-full">
                <label for="quantity" className="text-sm">Quantity</label>
                <input id="quantity" type="number" placeholder="How many do you own?" className="w-full dark:border-gray-700 dark:text-gray-900 text-slate-500" />
            </div>
            <div className="col-span-full">
                <label for="asset-name" className="text-sm">Asset Name</label>
                <input id="asset-name" type="text" placeholder="e.g. btc" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900" />
            </div>
            <div className="col-span-full">
                <label for="quantity" className="text-sm">Price</label>
                <input id="quantity" type="number" placeholder="How much is one unit worth?" className="w-full dark:border-gray-700 dark:text-gray-900 text-slate-500" />
            </div>

            <div className='flex flex-row gap-4'>
                <button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-blue-400 dark:text-gray-900">Add</button>
                <button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-red-400 dark:text-gray-900">Cancel</button>
            </div>
        </div>

    </form>
  )
}

export default FormModal