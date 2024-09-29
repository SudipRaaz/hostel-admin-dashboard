
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import RegistrationMain from '@/components/user-mng/registration-main'
import React from 'react'

const Page = () => {
  return (
    <DefaultLayout>
      <RegistrationMain readOnly={false} />
    </DefaultLayout>
  )
}

export default Page