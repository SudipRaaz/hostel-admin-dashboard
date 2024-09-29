
import {create} from "zustand";


export type userDetailType = {
    user: {
        name: string;
        email: string;
        gender: string;
        phone_number: string;
        address: string;
        date_of_birth: string;
        is_active: boolean;
        admissionDate: string;
        seatID: number;

    },
    seat: {
        priceRate: number;
        seatNumber: number;
        roomID: number;
        seatID: number;
        RoomNumber: number;
    },
    }

export type userDetailStoreType = {
    userDetail: userDetailType;
    setUserDetail: (userDetail: userDetailType) => void;
};



export const UseUserDetailStore = create<userDetailStoreType>((set) => ({
    userDetail: {} as userDetailType,
    setUserDetail: (userDetail: userDetailType) => set({userDetail}),
}));