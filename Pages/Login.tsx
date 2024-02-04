"use client"
import React from 'react'
import useForm from '@/Utils/useForm';

const Login = () => {

       

    //Submit Function
    const formLogin = () => {

        console.log("Callback function when form is submitted!")
        console.log("Form Values", values)
    }


    //Custom hook call
    const { handleChange, values, errors, handleSubmit } = useForm(formLogin);



    return (
        <div>
            <div className='h-screen flex flex-col sm:flex-row justify-between'>

                <div className='sm:w-1/2 flex items-center justify-center p-4'>

                    <div className='h-screen flex justify-center items-center'>

                        <form onSubmit={handleSubmit} className="border-1 max-w-[500px] sm:w-full  shadow-2xl rounded-2xl p-8 md:p-10 lg:p-20 justify justify-center items-center space-y-4 md:space-y-6" action="#">
                            <div className='flex justify-center items-center'>

                                <img className="w-14 h-14 -mt-40 md:-mt-80" src="https://s3.amazonaws.com/assets.grepsr.com/static/logo.png" alt="logo" />

                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium">Username</label>

                                <input
                                    type="username"
                                    name="username"
                                    id="username"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    placeholder="name@company.com"
                                    required={true}
                                    onChange={handleChange}
                                />
                                {
                                    errors.username && <h3 className='text-sm text-red-500'>{errors.username}</h3>
                                }

                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium">Password</label>

                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 00"
                                    required={true}
                                    onChange={handleChange}
                                />
                                {
                                    errors.password && <h3 className='text-sm text-red-500'>{errors.password}</h3>
                                }
                            </div>
                            <div className='flex justify-center items-center'>
                                <button type="submit" className="text-white rounded-full focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Sign in</button>
                            </div>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
                <div className='w-[50%] m-[4%] pt-24 hidden lg:block'>
                    <div className='m-[4%] lg:mt-28 xl:mt-16 2xl:-mt-2 flex justify-center items-center'>
                        <img src="/login.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login