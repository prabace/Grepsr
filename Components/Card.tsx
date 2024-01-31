import React from 'react'

const Card = (props) => {
   
  return (
    
    <div className="border p-4 m-4 rounded shadow-md">
    
    <h3 className="text-xl font-bold">{props.title}</h3>
    <p>{props.description}</p>
    <p className="text-lg">Price: ${props.price}</p>
    <p className="text-lg">Rating: {props.rating}</p>
    <p className="text-lg">Brand: {props.brand}</p>
   
    {props.thumbnail && (
        <>
          <img
            src={props.thumbnail}
            alt={`thumbnail ${props.id}`}
            className="max-w-full h-auto my-2"
          />
        </>
      )}
      </div>
   

  )
}

export default Card