import React from 'react'
import '../styles/profile.css'

import LocationOnIcon from '@mui/icons-material/LocationOn';

const Profile = () => {
  return (
    <div className='w-full flex flex-col items-center' >

      <div className='flex gap-x-4 my-4 w-[90%] h-[250px] p-4 mt-4'>
        <div className='h-[150px] w-[150px] rounded-[50%]'>
          <img src='https://picsum.photos/200/300' alt='profile' className='w-full h-full rounded-[50%]' />
        </div>

        <div className="flex flex-col items-start">
          <div className="flex items-center gap-x-4">
            <h2 className='text-4xl font-serif'>Harshaweb </h2>
            <h4 className='text-xl'>(Pvt Comp.)</h4>
          </div>
          <div className="flex items-center gap-x-2 mt-3">
            <LocationOnIcon />
            <p>New York , USA</p>
          </div>
          <div className='max-w-[600px]'>
            <p className='text-start text-[18px] mt-4'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Tenetur facere quae odio delectus numquam expedita omnis cumque error tempore.
            </p>
          </div>
          <div className='max-w-[600px] text-[18px] text-gray-400 mt-1'>
            <p>GDHJHFJ75689</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-[90%] gap-x-4 h-[400px]">
        <div className='w-[30%] flex flex-col h-full gap-y-2'>
          <div className='flex gap-x-2'>
            <p className='text-xl font-[500]'>Harsha Web Company</p>
          </div>
          <div className='flex gap-x-2'>
            <p className='text-[18px] font-400'>GH786U78564521FH</p>
          </div>
          <div className='flex gap-x-2'>
            <p className='text-[20px] font-500 text-gray-500'>harshaweb_ (admin)</p>
          </div>
        </div>
        <div className='w-[30%] flex flex-col h-full'>
          <div className='flex gap-x-2'>
            <p className='text-[20px]'>info@harshaweb.com (admin)</p>
          </div>
          <div className='flex gap-x-2'>
            <p className='text-[20px]'>9022489938</p>
          </div>
        </div>
        <div className='w-[30%] flex flex-col items-center gap-y-2 h-full'>
            <img src='https://picsum.photos/200/300' alt='profile' className='w-[100px] h-[100px] rounded-[5px]' />
            <p className='text-[18px]'>Company Stamp</p>
        </div>
        <div className='w-[30%] flex flex-col items-center gap-y-2 h-full'>
            <img src='https://picsum.photos/200/300' alt='profile' className='w-[100px] h-[100px] rounded-[5px]' />
            <p className='text-[18px]'>User Signature</p>
        </div>
      </div>

    </div>
  )
}

export default Profile