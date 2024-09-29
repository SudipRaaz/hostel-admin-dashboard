"use client";

import { useRoomStore } from '@/api/rooms/roomStore';
import Link from 'next/link';
import React from 'react';
import { MdBedroomChild } from "react-icons/md";
import RightDrawer from '../Drawer/right-drawer';

interface SeatCardProps {
    toggleDrawer?: () => void;
}

const SeatCard: React.FC<SeatCardProps> = ({ toggleDrawer }) => {
    const { roomDetails } = useRoomStore.getState();
    console.log(roomDetails, "seat Card");

    return (
        <div className='grid grid-cols-3 gap-2'>
            {Array.isArray(roomDetails) && roomDetails.map((data, index) => (
                <div key={index} className="card w-full bg-base-100 shadow-xl">
                    <figure className='py-2 bg-white border-b border-t '>
                        <MdBedroomChild size={50} />
                    </figure>
                    <div className="card-body bg-white p-2 py-4 ">
                        <h2 className="card-title text-sm">
                            SEAT NUMBER: {data?.seatNumber}
                        </h2>
                        <p className='text-xs'> Price Rate: {data?.seatPriceRate}</p>
                    </div>
                </div>
            ))}
            
        </div>
    );
};



export default SeatCard;