import React from 'react'
import '../styles/profile.css'

import { Input } from '@mui/material'

const Profile = () => {
  return (
    <div className='flex flex-col gap-y-3 py-5' style={{
      gridTemplateColumns: '1fr 3fr'
    }}>
      <div className='flex flex-row'>
        <label htmlFor="name" className='min-w-[200px] pLabel'>Name</label>
        <Input sx={{
          width: "400px"
        }}   />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="Logo" className='min-w-[200px] pLabel'>Logo</label>
        <input type="file" id="Logo" className="input pInput" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="Description" className='min-w-[200px] pLabel '>Description</label>
        <textarea type="text" id="Description" className="input pInput" rows={4}></textarea>
      </div>
      <div className='flex flex-row'>
        <label htmlFor="Country" className='min-w-[200px] pLabel'>Country</label>
        <input type="text" id="Country" className="input pInput" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="GoogleMap" className='min-w-[200px] pLabel'>Google Map</label>
        <input type="text" id="GoogleMap" className="input pInput" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="LicenceNumber" className='min-w-[200px] pLabel'>Licence Number</label>
        <input type="text" id="LicenceNumber" className="input pInput" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="LicenceNumberDoc" className='min-w-[200px] pLabel'>Licence Number Doc.</label>
        <input type="text" id="LicenceNumberDoc" className="input pInput" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="companyOwner" className='min-w-[200px] pLabel'>Company Owner</label>
        <input type="text" id="companyOwner" className="input pInput" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="username" className='min-w-[200px] pLabel'>User name</label>
        <input type="text" id="username" className="input pInput" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="userrole" className='min-w-[200px] pLabel'>User Role</label>
        <input type="text" id="userrole" className="input pInput" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="useremail" className='min-w-[200px] pLabel'>User Email</label>
        <input type="text" id="useremail" className="input pInput" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="usermobile" className='min-w-[200px] pLabel'>User Mobile</label>
        <input type="text" id="usermobile" className="input pInput" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="userSignature" className='min-w-[200px] pLabel'>User Signature</label>
        <input type="file" id="userSignature" className="input pInput" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="companyStamp" className='min-w-[200px] pLabel'>User Signature</label>
        <input type="file" id="companyStamp" className="input pInput" />
      </div>
      <div>
        <button className='btn bg-blue-400'>Save</button>
        <button className='button bg-red-400'>Cancle</button>
      </div>
    </div>
  )
}

export default Profile