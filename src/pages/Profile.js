import React from 'react'

const Profile = () => {
  return (
    <div className='flex flex-col gap-y-3 py-5 bg-blue-500' style={{
      gridTemplateColumns: '1fr 3fr'
    }}>
      <div className='flex flex-row'>
        <label htmlFor="name" className='min-w-[150px] text-start'>Name</label>
        <input type="text" id="name" className="input" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="Logo" className='min-w-[150px] text-start'>Logo</label>
        <input type="file" id="Logo" className="input" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="Description" className='min-w-[150px] text-start'>Description</label>
        <input type="text" id="Description" className="input" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="Country" className='min-w-[150px] text-start'>Country</label>
        <input type="text" id="Country" className="input" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="GoogleMap" className='min-w-[150px] text-start'>Google Map</label>
        <input type="text" id="GoogleMap" className="input" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="LicenceNumber" className='min-w-[150px] text-start'>Licence Number</label>
        <input type="text" id="LicenceNumber" className="input" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="LicenceNumberDoc" className='min-w-[150px] text-start'>Licence Number Doc.</label>
        <input type="text" id="LicenceNumberDoc" className="input" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="companyOwner" className='min-w-[150px] text-start'>Company Owner</label>
        <input type="text" id="companyOwner" className="input" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="username" className='min-w-[150px] text-start'>User name</label>
        <input type="text" id="username" className="input" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="userrole" className='min-w-[150px] text-start'>User Role</label>
        <input type="text" id="userrole" className="input" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="useremail" className='min-w-[150px] text-start'>User Email</label>
        <input type="text" id="useremail" className="input" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="usermobile" className='min-w-[150px] text-start'>User Mobile</label>
        <input type="text" id="usermobile" className="input" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="userSignature" className='min-w-[150px] text-start'>User Signature</label>
        <input type="file" id="userSignature" className="input" />
      </div>
      <div className='flex flex-row'>
        <label htmlFor="companyStamp" className='min-w-[150px] text-start'>User Signature</label>
        <input type="file" id="companyStamp" className="input" />
      </div>
      <div>
        <button className='btn bg-blue-400'>Save</button>
        <button className='button bg-red-400'>Cancle</button>
      </div>
    </div>
  )
}

export default Profile