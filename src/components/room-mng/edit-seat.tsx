"use client"

import { updateSeatInfo } from '@/api/rooms/rooms-api'
import React from 'react'
import { useState } from 'react'


const EditSeat = () => {
  const [seatNumber, setSeatNumber] = useState('')
  const [price, setPrice] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    
    const data = {
      seatNumber,
      price
    };

    var response = await updateSeatInfo('2', data)
    console.log(response)
    
  }

  
  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
      <h1 className='bg-primaryColor flex justify-center items-center text-white p-4'>Edit Seats</h1>
      <div className='flex flex-col p-4 gap-4'>
        <div>
          <label className=" block text-body-sm font-medium dark:text-dark text-white">
            Seat Number
          </label>
          <input
            type="text"
            placeholder="Seat Number"
            value = {seatNumber}
            onChange={(e) => setSeatNumber(e.target.value)}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>

        <div>
          <label className=" block text-body-sm font-medium dark:text-dark text-white">
            Price
          </label>
          <input
            type="text"
            placeholder="Price"
            value= {price}
            onChange={(e) => setPrice(e.target.value)}
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

export default EditSeat;