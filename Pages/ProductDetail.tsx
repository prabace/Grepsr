import React from 'react';

const ProductDetail = () => {
    return (
        <div className='bg-[#E8E8E8] text-[#5F6B6E] h-screen  grid grid-cols-2 p-40'>
            <div className='bg-red-400'>
                <div className='border-2 m-20 p-72'>

                </div>
            </div>
            <div className=''>
                <div className='m-10 p-8'>
                    <div>
                        <h1 className='font-extrabold text-4xl text-black'>Product Title</h1>
                    </div>
                    <div className='grid grid-cols-3 mt-8'>
                        <div>
                            Rating
                        </div>
                        <div>
                            Rating
                        </div>
                        <div>
                            Rating
                        </div>
                    </div>
                    <div className='mt-8'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                    </div>

                    <div className=' mt-12 h-80 p-5 rounded-2xl shadow-2xl'>
                        <div className='grid grid-cols-2'> 
                            <div>
                            <p>Discounted price</p>
                            <p className='text-4xl text-black font-bold'>$264</p>
                            </div>
                            <div className='flex justify-end'>
                                <button className='border-2 rounded-3xl py-2 px-6 bg-[#F9A76C] text-white'>Order Now</button>
                            </div>
                            
                            
                        </div>
                        <hr className='my-8 w-[100%]'/>
                        
                        <div>
                                <p>Stock left</p>
                                <p>Brand Name</p>
                            </div>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;