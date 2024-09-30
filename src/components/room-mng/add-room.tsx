"use client"

import React from 'react'

const AddRoom = () => {
  return (
    <form className='flex flex-col'>
      <h1 className='bg-primaryColor flex justify-center items-center text-white p-4'>Edit Seats</h1>
      <div className='flex flex-col p-4 gap-4'>
        <div>
          <label className=" block text-body-sm font-medium dark:text-dark text-white">
            Room Name
          </label>
          <input
            type="text"
            placeholder="Room Name "
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>

        <div>
          <label className=" block text-body-sm font-medium dark:text-dark text-white">
            Room Number
          </label>
          <input
            type="number"
            placeholder="Room Number"
            className="w-full rounded-[7px] border-[1.5px] border-primary bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:bg-dark-2 dark:text-white"
          />
        </div>
        <div>
          <label className=" block text-body-sm font-medium dark:text-dark text-white">
            Total Seats
          </label>
          <input
            type="number"
            placeholder="Total Seats"
            className="w-full rounded-[7px] border-[1.5px] border-primary bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:bg-dark-2 dark:text-white"
          />
        </div>
        <div>
          <label className=" block text-body-sm font-medium dark:text-dark text-white">
            Room Type
          </label>
          <input
            type="text"
            placeholder="Room Type"
            className="w-full rounded-[7px] border-[1.5px] border-primary bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:bg-dark-2 dark:text-white"
          />
        </div>
      </div>
      <div className='flex w-full justify-end p-4'>
        <button className='btn btn-primary text-white w-fit'>
          Save Edit
        </button>
      </div>
    </form>
  )
}

export default AddRoom;