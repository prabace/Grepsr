import React from 'react'
import { Rating } from '@mui/material';
import Link from 'next/link'
import { ProductType } from '@/types';

export interface PropsType
  extends Omit<ProductType, "discountPercentage" | "stock" | "category"> {}

const Card = (props:PropsType) => {

  return (
    <div>
      <div className="border p-4 m-4 rounded shadow-md transition duration-300 ease-in-out hover:scale-110 ">

        {props.thumbnail && (
          <Link href={`/Product/${props.id}`}>
            <>
              <img
                src={props.thumbnail}
                alt={`thumbnail ${props.id}`}
                className="w-full h-48 object-contain "
              />
            </>
          </Link>
        )}
      </div>
      <div className='p-4 m-4'>
        <div className='grid grid-cols-2 w-full justify-between'>
          <div>
            <Link href={`/Product/${props.id}`}>
              <h3 className='truncate font-bold text-lg'>{props.title}</h3>
            </Link>
          </div>
          <div className='flex justify-end'>
            <p className='font-bold text-lg'>${props.price}</p>
          </div>
        </div>
        <Rating
          name="read-only"
          precision={0.1}
          value={parseFloat(String(props.rating))}
          readOnly />

      </div>

    </div>



  )
}

export default Card