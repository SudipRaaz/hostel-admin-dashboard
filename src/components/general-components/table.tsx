
import React, { use, useState } from 'react'
import Avatar from './avatar'

import Model1 from './model1'
import RegistrationMain from '../user-mng/registration-main'
import { UserManagementUserListType } from '@/types/manageUser'


const Table = ({users}:{users: UserManagementUserListType[]}) => {  

    return (
        <div className="overflow-scroll">
            <table className="table">
                {/* head */}
                <thead className='sticky top-0 bg-white'>
                    <tr className='text-black text-sm'>
                        {/* <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th> */}
                        <th className='pl-8'>Id</th>
                        <th >Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Date Joined</th>
                        <th>Seat Id</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 users or tableData */}
                    {users?.map((data, index) => (
                        <tr key={index} className='hover:bg-[#eff0fe] border-color text-nowrap'>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <td className='pl-8'>{index+1}</td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <Avatar name={data?.name} />
                                    <div className='capitalize '>
                                        <div className="font-medium capitalize text-nowrap">{data.name}</div>
                                        <div className="text-sm text-nowrap ">{data.address}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {data.email}
                                <br />
                                {/* <span className="badge badge-ghost badge-sm">{data.id}</span> */}
                            </td>
                            <td>{data.phone_number}</td>
                            <td>{data?.admissionDate}</td>
                            <td>{data?.seatID}</td>
                            <th>
                                <Model1 buttonChildren={<UseDetailBtn />} email={data?.email} >
                                    <RegistrationMain readOnly={true} isUserDetailPage={true} />
                                </Model1>
                            </th>
                        </tr>
                    ))}
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Table


const UseDetailBtn = () => {
    return(
        <div className='flex items-center rounded-3xl font-normal text-nowrap justify-center text-white px-3 text-[10px] py-1 bg-primaryColor'>
            User Detail
        </div>
    )
}