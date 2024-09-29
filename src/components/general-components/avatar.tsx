import { getFirstAndLastLetter } from '@/utility/useful-function'
import React from 'react'

const Avatar = ({name}:{name:string}) => {

    const firstLetter = getFirstAndLastLetter(name)
    return (
        <div className=" min-h-10 min-w-10 rounded-full flex items-center justify-center bg-secondaryColor text-white">
            <span className="text-base">{firstLetter || "MC"}</span>
        </div>
    )
}

export default Avatar