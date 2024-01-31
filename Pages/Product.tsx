import React, { useState, useEffect } from 'react';
import Card from '@/Components/Card';

const Product = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <h1>Product List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>

          {products.map((product) => (

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
    </div>
  );
};

export default Product;