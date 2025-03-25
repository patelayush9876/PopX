import React from 'react'
import { Link } from 'react-router-dom';


const Settings = () => {
    return (
        <>
            <div className='h-[100vh] max-w-[400px] relative  mx-auto bg-gray-100'>
                <div className="header flex justify-between items-center bg-white py-5 px-2">
                    <h2 className='font-bold text-xl'>Account Settings</h2>
                    <Link to='/' className='cursor-pointer'></Link>
                </div>

                <div className="info flex flex-col px-7 gap-3 my-8">
                    <div className="flex gap-3">
                        <div className="h-20 w-20  ">
                            <img className='rounded-full h-17 w-17' src="../../public/assets/Screenshot 2025-03-26 024411.png" alt="" />
                        </div>

                        <div className="info flex px-2 py-1 justify-self-auto-stretch  flex-col ">
                            <h4 className='font-semibold text-left text-lg m-px'>Marry Doe</h4>
                            <span className='text-gray-600 text-left font-semibold m-px hover:underline cursor-pointer'>Marry@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div>
                    <p className='px-3 text-gray-600 text-justify font-semibold pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde dolores numquam, voluptas omnis voluptate voluptates ipsum dolor sit.</p>
                </div>
            </div>
        </>
    )
}

export default Settings