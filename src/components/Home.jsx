import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom'; 

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, 'products');
      const productSnapshot = await getDocs(productsCollection);
      const productList = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={`/images/${product.image}`} 
              alt={product.name}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>SKU: {product.sku}</p>
            {/* Use Link for navigation */}
            <Link to={`/product/${product.id}`} className="see-more-btn">
              See More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
