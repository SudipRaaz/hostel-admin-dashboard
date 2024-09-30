//@ts-nocheck

"use client";
import { getParticularRoomDetails } from '@/api/rooms/rooms-api';
import { useRoomStore } from '@/api/rooms/roomStore';
import { getUserDetails } from '@/api/user-management/users/users-api';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import React from 'react';
import { useState } from 'react'
import { BsFillXCircleFill } from "react-icons/bs";

type childrenType = {
    children?: React.ReactNode
    buttonChildren?: React.ReactNode
    dialogTitle?: string,
    getUserDetails?: any,
    email?: string,
    roomId?: number,
    isAddRoomOrEditSeat?: boolean,
    setIsRoomEditOrSeatEdit?: any
    

}

export default function Model1(props: childrenType) {
    let [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
        props?.isAddRoomOrEditSeat && props?.setIsRoomEditOrSeatEdit(false)

    }

    const handleClick = async () => {
        if (props?.email) {
            const data = await getUserDetails(props?.email)
            if (data?.status === 200) {
                open()
            }
        } else if (props?.roomId) { 
            const roomDetail= await getParticularRoomDetails(props?.roomId)
            const { setRoomDetails, roomDetails } = useRoomStore.getState();
            setRoomDetails(roomDetail);
            console.log(roomDetails, "roomDetails")
            open()
        }
        else {
            open()
        }
    }

    return (
        <>
            <Button
                onClick={handleClick}
            >
                {props?.buttonChildren}
            </Button>

            <Dialog open={isOpen} as="div" className="relative z-[10000] focus:outline-none " onClose={close} __demoMode>
                <div className="fixed trans inset-0 z-10 bg-black bg-opacity-50 overflow-y-auto ">
                    <div className="flex min-h-full items-center justify-center p-2">
                        <DialogPanel
                            transition
                            className="w-full lg:w-[60%] rounded-xl text-black bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <div className='flex w-full justify-between items-center'>
                                <DialogTitle as="h3" className="text-base/7 font-medium mb-2 ">
                                    {props?.dialogTitle}
                                </DialogTitle>
                                <BsFillXCircleFill onClick={close} size={24} color='gray' className='cursor-pointer' />

                            </div>

                            {React.Children.map(props.children, child => {
                                if (React.isValidElement(child)) {
                                    return React.cloneElement(child, { open, close });
                                }
                                return child;
                            })}
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
