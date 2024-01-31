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
            <div className='h-screen flex grid-cols-2 justify-between'>

                <div className='flex items-center justify-center w-[50%] m-[4]'>

                    <div className=''>

                        <form onSubmit={handleSubmit} className="border-1 shadow-2xl rounded-2xl p-24 space-y-4 md:space-y-6" action="#">
                            <div className='flex justify-center items-center'>

                                <img className="w-14 h-14 -mt-20" src="https://s3.amazonaws.com/assets.grepsr.com/static/logo.png" alt="logo" />

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
                            <button type="submit" className="w-full text-white rounded-3xl focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
                <div className='w-[50%] m-[4%] bg-red-800 '>
                    <div className='m-[4%]'>
                        fsjdgkjshfg
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login