import { RoomType } from '@/types/rooms'
import Image from 'next/image'
import React from 'react'

const RoomCard = ({room}:{room?: RoomType}) => {
    return (
        <div className="card bg-base-100 w-full md:max-w-96 shadow-xl hover:scale-105 transition-all">
            <figure className='p-4'>
                <Image
                    className="rounded-t-lg "
                    height={200}
                    width={200}
                    src="/room.png"
                    alt="Shoes" />
            </figure>
            <div className="card-body bg-white">
                <h2 className="card-title">
                    {room?.roomNumber}
                    <div className="badge bg-red-400 text-white text-nowrap border-none p-3">{room?.roomType}</div>
                </h2>
                <p>{room?.roomName}</p>

            </div>
        </div>
    )
}

export default RoomCard