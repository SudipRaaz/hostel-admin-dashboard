import { API } from "@/providers/request"
import axios from 'axios';

export const getAllRooms = async () => {
    try {
        const response = await API.get('seatMng/room')
        return response.data
    } catch (error) {
        return error
    }
}

export const getParticularRoomDetails = async (roomId: number) => {
    try {
        const response = await API.get(`seatMng/room/${roomId}`)
        console.log(response, "response")
        if(response.status === 200){
        return response.data}else{
            throw new Error(`Failed to fetch room details: ${response.statusText}`);
        }
    } catch (error) {
        return error
    }
}

export const updateSeatInfo = async (seatNumber: string, data: { seatNumber: string, price: number }) => {
    try {
        const response = await API.put(`/seatMng/seat/${seatNumber}`, data);
        return response.data;
    } catch (error) {
        console.error('Error in updateSeatInfo:', error);
        throw error;
    }
};

export const createRoom = async (data: any) => {
    try {
        const response = await API.post('/seatMng/room', data)
        return (response.data, response.status)
    } catch (error) {
        return error
    }
}

export const updateRoom = async (roomId: string, data: any) => {
    try {
        const response = await API.put(`/rooms/${roomId}`, data)
        return response.data
    } catch (error) {
        return error
    }
}

export const deleteRoom = async (roomId: string) => {
    try {
        const response = await API.delete(`/rooms/${roomId}`)
        return response.data
    } catch (error) {
        return error
    }
}

