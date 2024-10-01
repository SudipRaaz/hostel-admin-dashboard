"use client";

import { createRoom } from "@/api/rooms/rooms-api";
import React, { useState } from "react";

const AddRoom = () => {
  const [roomData, setRoomData] = useState({
    roomName: "",
    roomNumber: "" as unknown as number,
    totalSeats: "" as unknown as number,
    roomType: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRoomData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await createRoom(roomData);
      resetForm();
      console.log("API Response:", response);
    } catch (error) {
      console.error("Error creating room:", error);
    }
  };

  const resetForm = () => {
    setRoomData({
      roomName: "",
      roomNumber: "" as unknown as number,
      totalSeats: "" as unknown as number,
      roomType: "",
    });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <h1 className="flex items-center justify-center bg-primaryColor p-4 text-white">
        Edit Seats
      </h1>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <label className=" block text-body-sm font-medium text-white dark:text-dark">
            Room Name
          </label>
          <input
            type="text"
            placeholder="Room Name "
            name="roomName"
            value={roomData.roomName}
            onChange={handleInputChange}
            className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>

        <div>
          <label className=" block text-body-sm font-medium text-white dark:text-dark">
            Room Number
          </label>
          <input
            type="number"
            placeholder="Room Number"
            name="roomNumber"
            value={roomData.roomNumber}
            onChange={handleInputChange}
            className="w-full rounded-[7px] border-[1.5px] border-primary bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:bg-dark-2 dark:text-white"
          />
        </div>
        <div>
          <label className=" block text-body-sm font-medium text-white dark:text-dark">
            Total Seats
          </label>
          <input
            type="number"
            placeholder="Total Seats"
            name="totalSeats"
            value={roomData.totalSeats}
            onChange={handleInputChange}
            className="w-full rounded-[7px] border-[1.5px] border-primary bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:bg-dark-2 dark:text-white"
          />
        </div>
        <div>
          <label className=" block text-body-sm font-medium text-white dark:text-dark">
            Room Type
          </label>
          <input
            type="text"
            placeholder="Room Type"
            name="roomType"
            value={roomData.roomType}
            onChange={handleInputChange}
            className="w-full rounded-[7px] border-[1.5px] border-primary bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:bg-dark-2 dark:text-white"
          />
        </div>
      </div>
      <div className="flex w-full justify-end p-4">
        <button className="btn btn-primary w-fit text-white">
          Create Room
        </button>
      </div>
    </form>
  );
};

export default AddRoom;
