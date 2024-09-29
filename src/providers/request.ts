import axios from "axios";

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const API= axios.create({
    baseURL: NEXT_PUBLIC_BASE_URL,
    headers:{
        'Content-Type': 'application/json',
    }
})