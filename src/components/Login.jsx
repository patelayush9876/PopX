import React from 'react'

const Login = () => {
    return (
        <>
            <div className='h-[100vh] max-w-[400px] relative px-5 py-5 mx-auto bg-gray-100'>

                <div className="flex flex-col gap-2">
                    <h2 className='font-bold w-[60%] text-left text-3xl'>Signin to your PopX Account</h2>
                    <p className='w-[75%] text-gray-400 font-semibold text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <form action="" className='my-5'>
                        <div className="relative flex flex-col">
                            <input type="email" id="email" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                            <label for="email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100 px-2 peer-focus:px-2 peer-focus:text-purple-600 peer-focus:dark:purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email Address</label>
                        </div>

                        <div className=" relative flex flex-col my-4">
                            <input type="password" id="password" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                            <label for="password" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100  px-2 peer-focus:px-2 peer-focus:text-purple-600 peer-focus:dark:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
                        </div>


                        <button className='bg-[#7B3FF6] w-full hover:bg-[#5b15e8] text-white font-semibold py-3 rounded-lg cursor-pointer'>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login