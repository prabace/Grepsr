import React from 'react'
import { Rating } from '@mui/material';

async function getProduct(productdetail:number) {
  const res = await fetch(`https://dummyjson.com/products/${productdetail}`, {
    next: {
      revalidate: 60
    }
  })

  return res.json()
}

export default async function ProductDetail({ params }:{params:{productdetail:number}}) {
  const product = await getProduct(params.productdetail)
  console.log(product)

  return (
    <div className='md:bg-[#F4F4F4] sm:bg-none text-[#5F6B6E] sm:h-screen md:h-[100%] lg:h-screen grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-x-10 xl:gap-x-40 py-4 px-2 md:p-20 lg:p-10 xl:p-20 2xl:px-40'>
      <div className='flex justify-center items-center bg-[#E8E8E8] lg:h-[545px] xl:h-[560px] 2xl:h-[565px]  lg:mt-20 md:shadow-2xl rounded-2xl  '>
        <div className=' lg:mx-48 md:my-20 md:h-72 '>
        {product.thumbnail && (
        <>
          <img
            src={product.thumbnail}
            alt={`thumbnail ${product.id}`}
            className="rounded-xl w-100 md:h-72  md:max-w-80"
          />
        </>
      )}
        </div>

        {/* <div className='flex mx-48 sm:mx-10  gap-x-2'>
        {product.images.map((image, index) => (
                  <img className='rounded-xl w-20 h-20' key={index} src={image} alt={`Product ${index + 1}`}  />
                ))}
        </div> */}
      </div>
      <div className='mt-20'>
        <div className=''>
          <div>
            <h1 className='font-extrabold text-4xl text-black'>{product.title}</h1>
          </div>
          <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-3'>
            <div className='flex lg:gap-x-1 gap-x-5 font-bold text-black'>
              {product.rating}
              <div>
                <Rating
                  name="read-only"
                  precision={0.1}
                  value={parseFloat(product.rating)}
                  readOnly />

              </div>
            </div>
            
          </div>
          <div className='mt-3'>
            <p>{product.description}</p>
          </div>

          <div className=' mt-12 p-5 lg:py-8 lg:shadow-lg rounded-3xl'>
           
            <div className='grid grid-cols-2 xl:mt-4'>
              <div>
                <p className='font-semibold'>{product.discountPercentage}% off</p>
                <p className='text-xl line-through font-light text-slate-500'>${product.price}</p>
                <p className='text-2xl md:text-3xl font-bold text-black'>$ {Math.round(product.price - (product.discountPercentage/100)*product.price).toFixed(2)}</p>
                
              </div>
              <div>
              <div className='flex justify-end'>
                <button className='border-2 rounded-3xl px-4 py-2 bg-[#F9A76C] text-white'>Order Now</button>
              </div>
              </div>
              

            </div>
            <hr className='my-6 w-[100%]'/>
            
           <div>
            <h1 className='text-2xl text-black font-semibold'>Details:</h1>
            <p>Brand: {product.brand}</p>
            <p>Stock: {product.stock} products available</p>
            <p>Description: {product.description} </p>
            <p>Rating: {product.rating} </p>
           </div>

            

          </div>
        </div>
      </div>
    </div>
  )
}

