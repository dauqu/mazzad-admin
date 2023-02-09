import React from 'react'

const Wallet = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center p-4'>
            <div className='flex w-[70%] p-5'>
                <div className='flex  flex-col items-start w-[200px]'>
                    <h2 className='text-2xl font-[500]'>Your Wallet</h2>
                    <h2 className='text-3xl mt-3'>$ 455.54 </h2>
                    <h3 className='text-lg font-medium text-gray-400'>Balance (USD)</h3>
                </div>
                <div className='flex flex-col w-[50%] items-start '>

                    <h2 className='text-xl font-[500]'>Withdraw</h2>
                    <h3 className='text-base font-medium text-gray-500'>Withdraw your balance to your bank account</h3>
                    <div className='flex w-full mt-4 gap-x-2'>
                        <input type='text' className='outline-none w-[75%] h-10 border border-gray-300 rounded-md px-2' placeholder='Enter Amount' />

                        <button className='w-[25%] h-10 bg-teal-500 text-white rounded-md'>Withdraw</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col h-[200px] w-[70%] p-5 gap-y-2'>
                <div className='transaction-item flex flex-row px-3 py-2 justify-between shadow-md bg-white rounded-[5px]' >
                    <div className='w-[60%] flex flex-col items-start '>
                        <h2 className='text-xl font-[500]'>Money added to wallet</h2>
                        <h2 className='text-lg font-[500] text-gray-400'>Lorem ipsum dolor sit amet consectetur.</h2>
                    </div>
                    <div className='w-[20%] flex flex-col items-end'>
                        <h2 className='text-xl font-[500]'>$ 20.80</h2>
                        <h2 className='text-xl font-[500] text-teal-500'>Credit</h2>
                    </div>
                </div>
                <div className='transaction-item flex flex-row px-3 py-2 justify-between shadow-md bg-white rounded-[5px]'>
                    <div className='w-[60%] flex flex-col items-start '>
                        <h2 className='text-xl font-[500]'>Money widthrawn from the wallet.</h2>
                        <h2 className='text-lg font-[500] text-gray-400'>Lorem ipsum dolor sit amet consectetur.</h2>
                    </div>
                    <div className='w-[20%] flex flex-col items-end'>
                        <h2 className='text-xl font-[500]'>$ 8.20</h2>
                        <h2 className='text-xl font-[500] text-red-500'>Debit</h2>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Wallet