"use client";
import React, { useState, useEffect } from 'react';
import Card from '@/Components/Card';
import Pagination from '@/Components/Pagination';
import Dropdown from '@/Components/Dropdown';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    // Fetch categories when the component mounts
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'https://dummyjson.com/products';

        //if category is selected append it to URL

        if (selectedCategory) {
          url += `/category/${selectedCategory}`;
        }

        const response = await fetch(url);
        const data = await response.json();


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
  }, [selectedCategory]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
    setCurrentPage(1); // Reset page when changing category
  };


  return (
    <div className='md:m-20 2xl:px-10'>

      <div >
        {loading?(
          <div>
          </div>
        ) : (
          <div className='grid grid-cols-2 justify-between'>
         <div className='mx-4 mb-4'>
          <p className='text-2xl font-light tracking-wide'>CHOOSE YOUR PRODUCT</p>
        </div>
        <div className='flex justify-end'>
          <Dropdown categories={categories} onSelectCategory={handleCategoryChange} />
        
        </div>
        </div>
      )}
      </div>
       
      <div className='flex justify-center items-center'>
      {loading ? (
        
        <img src="/loading.gif" alt="Loading" />
        
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
              images={product.images}  
              id={product.id}
            />
          ))
          }

        </div>


      )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />


    </div>
  );
};

export default Product;