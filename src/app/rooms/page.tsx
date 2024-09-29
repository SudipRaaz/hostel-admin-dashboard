import { getAllRooms } from '@/api/rooms/rooms-api';
import Model1 from '@/components/general-components/model1';
import RightDrawerToggle from '@/components/general-components/parent-component';
import RoomCard from '@/components/general-components/room-card'
import ParentComponent from '@/components/general-components/seat-card';
import SeatCard from '@/components/general-components/seat-card';
import DefaultLayout from '@/components/Layouts/DefaultLaout';
import { RoomType } from '@/types/rooms';
import React from 'react'
import { BsFillHouseAddFill } from "react-icons/bs";

const RoomPage = async () => {
  const roomsData = await getAllRooms();
  return (
    <DefaultLayout>
      <div className='flex flex-col  h-full w-full '>
        <div className='flex justify-between items-center p-4 '>
          <h1 className='text-2xl font-bold  dark:text-white" : "text-dark-4'>Rooms</h1>
          <button className='btn btn-primary text-white'>+ Add Room <BsFillHouseAddFill size={18} /></button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 '>
          {/* {Array.from({ length: 20 }).map((_, index) => (
            <Model1 key={index} buttonChildren={<RoomCard />} dialogTitle='Edit Room'>
              <SeatCard />
            </Model1>
          ))} */}
          {Array.isArray(roomsData) &&  roomsData?.map((data: RoomType, index: number) => (
            <Model1 key={index} roomId={data?.roomID} buttonChildren={<RoomCard room={data as RoomType}  />} dialogTitle='Edit Room'>
              <RightDrawerToggle/>
            </Model1>
          ))}
        </div>
      </div>
    </DefaultLayout>
  )
}

export default RoomPage