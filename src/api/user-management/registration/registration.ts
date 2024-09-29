export async function PostRegistration (data: any, dateOfBirth: string) {
    
    try {
        const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/userMng/register/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "seat": {
                    "priceRate": data.priceRate,
                    "seatNumber": data.seatNumber,
                    "roomID": data.roomId // static value is given, change in later 
                },
                "user": {
                    "email": data.email,
                    "password": data.password,
                    "gender": data.Gender,
                    "phone_number": data.phone,
                    "address": data.address,
                    "date_of_birth": dateOfBirth,
                    "name": data.name
                }
            }),
        });
        return resp;
        
    } catch (error) {
        console.log(error)
        
    }
}