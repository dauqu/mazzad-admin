import React from 'react'

const Wallet = () => {
    return (
        <div className='w-full flex justify-center items-center p-4'>
            <div className='flex w-[70%]'>
                <div className='flex  flex-col items-start w-[200px]'>
                    <h2 className='text-2xl font-[500]'>Your Wallet</h2>
                    <h2 className='text-3xl mt-3'>$ 455.54 </h2>
                    <h3 className='text-base font-medium text-gray-500'>Balance</h3>
                </div>
                <div className='flex w-full '>
                    <div className='flex flex-col w-[50%]'>
                        <h2 className='text-xl font-[500]'>Withdraw</h2>
                        <h3 className='text-base font-medium text-gray-500'>Withdraw your balance to your bank account</h3>
                        <div className='flex w-full mt-4'>
                            <input type='text' className='w-[50%] h-10 border border-gray-300 rounded-md px-2' placeholder='Enter Amount' />

                            <button className='w-[50%] h-10 bg-teal-500 text-white rounded-md'>Withdraw</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wallet