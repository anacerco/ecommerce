import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, 'products', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;


  const productImage = `/images/${product.image}`;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>SKU: {product.sku}</p>
      
      {/* Display the product image */}
      <img 
        src={productImage} 
        alt={product.name} 
        style={{ width: '400px', height: '400px', objectFit: 'cover' }} 
      />
    </div>
  );
};

export default ProductDetail;
