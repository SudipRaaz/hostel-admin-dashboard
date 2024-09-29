import { RoomDetailsType, RoomType } from "@/types/rooms";
import { create } from "zustand";

interface RoomStoreType {
  roomDetails: RoomDetailsType[];
  setRoomDetails: (roomDetails: RoomDetailsType[]) => void; // Changed to accept an array
}

export const useRoomStore = create<RoomStoreType>((set) => ({
  roomDetails: [] as RoomDetailsType[],
  setRoomDetails: (roomDetails) => set({ roomDetails }),
}));