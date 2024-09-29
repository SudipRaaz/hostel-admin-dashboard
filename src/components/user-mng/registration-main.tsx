'use client'

import React, { use, useEffect } from 'react';
import { Formik, FormikErrors } from 'formik';
import Input from '@/components/general-components/input';
import { PostRegistration } from '@/api/user-management/registration/registration';
import { userDetailType, UseUserDetailStore } from '@/store/userDetail-store';
import { postEditUser } from '@/api/user-management/users/users-api';
import { Switch } from '@headlessui/react'

interface FormValues {
  email?: string;
  name?: string;
  password?: string;
  dateOfBirth?: string;
  address?: string;
  phone?: string;
  seatNumber?: string;
  priceRate?: string;
  roomId?: string;
  Gender?: string;

}
const RegistrationMain = ({ readOnly, isUserDetailPage }: { readOnly?: boolean, userDetails?: userDetailType, isUserDetailPage?: boolean }) => {
  const [dateOfBirth, setDateOfBirth] = React.useState('');
  const { userDetail } = UseUserDetailStore()
  const handleDateofBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateOfBirth(e.target.value);
  }
  const [isReadOnly, setIsReadOnly] = React.useState(readOnly);
  const [isAutoFocus, setIsAutoFocus] = React.useState(false);
  const [enabled, setEnabled] = React.useState(userDetail?.user?.is_active);

  // console.log(userDetail)


  return (
    <div className='text-black flex flex-col justify-center p-4 gap-4'>

      <Formik<FormValues>
        initialValues={{
          email: userDetail?.user?.email,
          name: userDetail?.user?.name,
          password: "",
          dateOfBirth: userDetail?.user?.date_of_birth,
          address: userDetail?.user?.address,
          phone: userDetail?.user?.phone_number,
          seatNumber: String(userDetail?.seat?.seatID),
          priceRate: String(userDetail?.seat?.priceRate),
          roomId: String(userDetail?.seat?.RoomNumber),
          Gender: userDetail?.user?.gender

        }}
        validate={values => {
          const errors: FormikErrors<FormValues> = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(async () => {
            if (isUserDetailPage === true) {
              const results = await postEditUser(values, userDetail?.user?.email, enabled);
              if (results?.status === 200) {
                alert("User Details Updated")
                setSubmitting(false);
              } else {
                setSubmitting(false);
              }
            } else {
              const result = await PostRegistration(values, dateOfBirth);
              // alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              if (result?.status === 201) {
                resetForm();
              }
            }

          }, 400);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
            <div className='flex flex-col border border-color rounded-lg bg-white p-6 gap-6'>
              <span className='flex justify-between '>

              <h1 className='text-2xl font-bold'>Registration</h1>
              {isReadOnly === false ? <h3 className='text-red-400 btn bg-red-200 border-none rounded-2xl }'>Editing</ h3>: null}
              </span>
              <div className='grid grid-cols-2 gap-6'>
                <Input
                  id="name"
                  name="Name"
                  placeholder="Name"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  readOnly={isReadOnly}
                  autoFocus={isAutoFocus}
                />
                <Input
                  id="email"
                  name="Email"
                  placeholder="Email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  readOnly={isReadOnly}
                  autoFocus={false}
                />
                <Input
                  id="password"
                  name="Password"
                  placeholder="Password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  readOnly={isReadOnly}
                  autoFocus={false}
                />
                <Input
                  id="dob"
                  name="dateOfBirth"
                  placeholder="Date of Birth"
                  type="date"
                  onChange={handleDateofBirth}
                  onBlur={handleBlur}
                  value={values?.dateOfBirth}
                  readOnly={isReadOnly}
                  autoFocus={false}
                />
                <Input
                  id="address"
                  name="Address"
                  placeholder="Address"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  readOnly={isReadOnly}
                  autoFocus={false}
                />
                <Input
                  id="phone"
                  name="Phone"
                  placeholder="Phone"
                  type="tel"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  readOnly={isReadOnly}
                  autoFocus={false}
                />
                <Input
                  id="gender"
                  name="Gender"
                  placeholder="Gender"
                  type="radio"
                  radioName={["Male", "Female", "Other"]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Gender}
                  readOnly={isReadOnly}
                  autoFocus={false}
                />
                <label className='flex gap-2'>
                  <span className='text-gray-500'>{enabled ? "Active:" : "Inactive:"}</span>
                <Switch
                  disabled={isReadOnly}
                  checked={enabled}
                  onChange={setEnabled}
                  className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-green-600"
                >
                  <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                </Switch>
                </label>
              </div>
            </div>
            <div className='flex flex-col border border-color rounded-lg bg-white p-6 gap-6'>
              <h1 className='text-2xl font-bold'>Room Details</h1>
              <div className='grid grid-cols-2 gap-6'>
                <Input
                  id="priceRate"
                  name="Price Rate (NPR)"
                  placeholder="Price Rate"
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.priceRate}
                  readOnly={isReadOnly}
                  autoFocus={false}
                />
                <Input
                  id="roomId"
                  name="RoomId"
                  placeholder="Room Id"
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.roomId}
                  readOnly={isReadOnly}
                  autoFocus={false}
                />
                <Input
                  id="seatNumber"
                  name="Seat Number"
                  placeholder="Seat Number"
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.seatNumber}
                  readOnly={isReadOnly}
                  autoFocus={false}
                />
              </div>
            </div>
            <div className='flex justify-end w-full'>
              <div className='flex gap-2 '>
                {isUserDetailPage === true && <button onClick={() => { setIsReadOnly(false), setIsAutoFocus(true) }} className='btn border-none bg-red-400 text-white px-6 py-2' type="reset">
                  Edit
                </button>}
                <button className='btn btn-primary text-white px-6 py-2' type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationMain;