"use client";
import React, { useState, useEffect } from 'react';
import Card from '@/Components/Card';
import Pagination from '@/Components/Pagination';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        //console.log('Fetched data:', data); 

        if (Array.isArray(data.products)) {
          setProducts(data.products);
          setLoading(false);
        } else {
          console.error('Invalid data format. Products should be an array.');
          setProducts([]);
          setLoading(false);
        }

      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='m-40'>
      <h1>Product List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

          {currentProducts.map((product) => (

            <Card
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              rating={product.rating}
              brand={product.brand}
              thumbnail={product.thumbnail}
            />

          ))
          }

        </div>
        
        
      )}
 <Pagination
         currentPage={currentPage}
         totalPages={totalPages}
         onPageChange={handlePageChange}
       />
    </div>
  );
};

export default Product;