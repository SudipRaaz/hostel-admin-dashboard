"use client";
import { getAllRooms } from '@/api/rooms/rooms-api';
import RightDrawer from '@/components/Drawer/right-drawer';
import Model1 from '@/components/general-components/model1';
import RoomCard from '@/components/general-components/room-card'
import SeatCard from '@/components/general-components/seat-card';
import DefaultLayout from '@/components/Layouts/DefaultLaout';
import AddRoom from '@/components/room-mng/add-room';
import EditSeat from '@/components/room-mng/edit-seat';
import { UseButtonStateStore } from '@/store/button-state-store';
import { RoomType } from '@/types/rooms';
import React, { useEffect } from 'react'
import { BsFillHouseAddFill } from "react-icons/bs";

const RoomPage =  () => {
  const [roomsData, setRoomData] = React.useState<RoomType[]>([]);
  const { setIsDrawerOpen, isDrawerOpen } = UseButtonStateStore();
  const [isRoomEditOrSeatEdit, setIsRoomEditOrSeatEdit] = React.useState<boolean>(false);
  useEffect( ()=>{
    const fetchRooms = async () => {
    const roomsDatas = await getAllRooms();
    setRoomData(roomsDatas);}
    fetchRooms();
  },[])

  useEffect(()=>{
    console.log(isDrawerOpen, 'Drawer is open');
  },[isDrawerOpen])

  const handleAddRoomClick = () => {
    setIsDrawerOpen(true);
    setIsRoomEditOrSeatEdit(true);
  }
  
  
  return (
    <DefaultLayout>
      <div className='flex flex-col  h-full w-full '>
        <div className='flex justify-between items-center p-4 '>
          <h1 className='text-2xl font-bold  dark:text-white" : "text-dark-4'>Rooms</h1>
          <button onClick={handleAddRoomClick} className='btn btn-primary text-white'>+ Add Room <BsFillHouseAddFill size={18} /></button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 '>
          {Array.isArray(roomsData) && roomsData?.map((data: RoomType, index: number) => (
            <Model1 
              isAddRoomOrEditSeat={isRoomEditOrSeatEdit}
              setIsRoomEditOrSeatEdit={setIsRoomEditOrSeatEdit}
              key={index} 
              roomId={data?.roomID} 
              buttonChildren={<RoomCard room={data as RoomType} />} 
              dialogTitle='Seats In This Room'
            >
               <SeatCard  />
            </Model1>
          ))}
        </div>
        <RightDrawer isDrawerOpen={isDrawerOpen} children={!isRoomEditOrSeatEdit ? <EditSeat />: <AddRoom /> }  />
      </div>
     
    </DefaultLayout>
  )
}

export default RoomPage