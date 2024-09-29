import { UseUserDetailStore } from "@/store/userDetail-store";

export const getAllUsers = async () => {
    try {
        const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/userMng/user/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return resp.json();
    } catch (error) {
        console.log(error);
    }
}


export const getUserDetails = async (email: string) => {
    try {
        const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/userMng/user/${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const { setUserDetail } = UseUserDetailStore.getState()
        const result = await resp.json();
        setUserDetail(result)
        return resp;
    } catch (error) {
        console.log(error);
    }
}



export const postEditUser = async (data: any, email: string, userActive: boolean) => {
    try {
        const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/userMng/user/${email}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "user": {
                    "email": data.email,
                    "name": data.name,
                    "gemder": data.gemder,
                    "phone_number": data.phone,
                    "address": data.address=== "" ? null : data.address, 
                    "date_of_birth": data?.dateOfBirth === "" ? null : data?.dateOfBirth,
                    "is_active": userActive,
                },
                "seat": {
                    "priceRate": data.priceRate,
                    "seatNumber": data.seatNumber,
                    "roomID": data.roomId
                }
            }),
        });
        return resp;
    } catch (error) {
        console.log(error);
    }
}