"use client"

import { updateSeatInfo } from '@/api/rooms/rooms-api'
import React, { useState } from 'react'
import { AxiosError } from 'axios'

const EditSeat = () => {
  const [seatNumber, setSeatNumber] = useState('')
  const [price, setPrice] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setMessage('')
    setIsLoading(true)
    
    const data = {
      seatNumber,
      price: parseFloat(price)
    };

    try {
      const response = await updateSeatInfo(seatNumber, data)
      console.log('API Response:', response)
      
      setMessage('Seat updated successfully!')
      // Clear the form
      setSeatNumber('')
      setPrice('')
    } catch (error) {
      console.error('Error updating seat info:', error)
      if (error instanceof AxiosError) {
        setMessage(`Error: ${error.response?.data?.message || error.message}`)
      } else {
        setMessage('An unexpected error occurred. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
      <h1 className='bg-primaryColor flex justify-center items-center text-white p-4'>Edit Seats</h1>
      {message && <p className={`text-center mt-2 ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
      <div className='flex flex-col p-4 gap-4'>
        <div>
          <label className="block text-body-sm font-medium dark:text-dark text-white">
            Seat Number
          </label>
          <input
            type="text"
            placeholder="Seat Number"
            value={seatNumber}
            onChange={(e) => setSeatNumber(e.target.value)}
            className="w-full rounded-[7px] border-[1.5px] border-primary bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:bg-dark-2 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-body-sm font-medium dark:text-dark text-white">
            Price
          </label>
          <input
            type="number" // Change to number input
            step="0.01" // Allow decimal values if needed
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full rounded-[7px] border-[1.5px] border-primary bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:bg-dark-2 dark:text-white"
          />
        </div>
      </div>
      <div className='flex w-full justify-end p-4'>
        <button 
          className='btn btn-primary text-white w-fit'
          disabled={isLoading}
        >
          {isLoading ? 'Saving...' : 'Save Edit'}
        </button>
      </div>
    </form>
  )
}

export default EditSeat;