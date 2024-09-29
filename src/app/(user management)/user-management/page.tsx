import { getAllUsers } from '@/api/user-management/users/users-api'
import Table from '@/components/general-components/table'
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import { UserManagementUserListType } from '@/types/manageUser'

import React from 'react'

const UserManagement = async () => {
  const users = await getAllUsers()
  return (
    <DefaultLayout>
      <Table users={users as UserManagementUserListType[]} />
    </DefaultLayout>

  )
}

export default UserManagement