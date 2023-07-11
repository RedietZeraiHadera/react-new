import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
const Productdetails = () => {
  const { productId } = useParams();
  const [product, setProductDetails] = useState(null);
  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/product/${productId}`);
        const info= await response.json();
        setProductDetails(info);
      } catch (error) {
        console.error(error);
      }
    };
    getProductDetails();
  }, [productId]);
  if (!product) {
    return <p>Loading product details...</p>;
  }
  return (
    <div className='SingleProduct'>
      <h1>Product Details</h1>
      <div className='allproducts'>
        <img src={product.thumbnail} alt={product.title} className='images'/>
        <h2>{product.title}</h2>
        <p>{product.brand}</p>
        <p>Ksh {product.price}</p>
      </div>
    </div>
  );
};
export default Productdetails;
