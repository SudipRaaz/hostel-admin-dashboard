"use client";
import { getUserDetails } from '@/api/user-management/users/users-api';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { BsFillXCircleFill } from "react-icons/bs";

type childrenType = {
    children?: React.ReactNode
    buttonChildren?: React.ReactNode
    dialogTitle?: string,
    getUserDetails?: any,
    email?: string

}

export default function Model1(props: childrenType) {
    let [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)

    }

    const handleClick = async () => {
        if (props?.email) {
            const data = await getUserDetails(props?.email)
            if (data?.status === 200) {
                open()
            }
        } else {
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

            <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none " onClose={close} __demoMode>
                <div className="fixed trans inset-0 z-50 bg-red-300 overflow-y-auto ">
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
                            {props?.children}
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
