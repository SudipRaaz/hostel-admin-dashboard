"use client";

import { useRoomStore } from '@/api/rooms/roomStore';
import React from 'react';
import { MdBedroomChild } from "react-icons/md";
import { UseButtonStateStore } from '@/store/button-state-store';
import Drawer from 'react-modern-drawer';
import { HiDotsVertical } from "react-icons/hi";

interface SeatCardProps {
    open?: () => void;
    close?: () => void;
}

const SeatCard: React.FC<SeatCardProps> = ({ close }) => {
    const { roomDetails } = useRoomStore.getState();
    const setIsDrawerOpen = UseButtonStateStore((state) => state.setIsDrawerOpen);
    const { isDrawerOpen } = UseButtonStateStore();
    const [selectedSeatOption, setSelectedSeatOption] = React.useState<string | null>(null);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
        if (close) {
            close();
        }
    }

    const toggleOption = (seatNumber: string) => {
        setSelectedSeatOption(selectedSeatOption === seatNumber ? null : seatNumber);
    }

    return (
        <div className='grid grid-cols-3 gap-2'>
            {Array.isArray(roomDetails) && roomDetails.map((data, index) => (
                <div key={index} className="card w-full bg-base-100 shadow-xl cursor-pointer">
                    <div className='py-2 px-2 bg-white border-b border-t flex items-center justify-between w-full'>
                        <div></div>
                        <MdBedroomChild size={50} />
                        <div className='flex'>
                            <HiDotsVertical className='flex items-start align-bottom' size={20} onClick={() => toggleOption(data?.seatNumber)} />
                        </div>
                    </div>
                    <div className="card-body bg-white p-2 py-4 ">
                        <h2 className="card-title text-sm">
                            SEAT NUMBER: {data?.seatNumber}
                        </h2>
                        <p className='text-xs'> Price Rate: {data?.seatPriceRate}</p>
                    </div>
                    {selectedSeatOption === data?.seatNumber ? (
                        <div className="absolute right-[25px] top-[-30px] chat chat-end">
                            <div className="chat-bubble flex flex-col">
                                <p onClick={toggleDrawer}>Edit</p>
                                <p>Delete</p>
                            </div>
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    );
};

export default SeatCard;