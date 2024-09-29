export type RoomType = {
    roomID: number,
    roomName: string,
    roomNumber: number,
    totalSeats: number,
    roomType: string,
}

export type RoomDetailsType = {

    occupiedStatus: boolean,
    roomNumber: number,
    seatNumber: string,
    seatPriceRate: number,
}