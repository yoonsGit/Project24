import React from 'react'
import '../css/ProductPage.css'

const ProductPage = () => {
  // 간단한 제품 데이터
  const products = [
    {
      id: 1,
      name: '멀티비타민',
      price: '$10',
      imageUrl: 'supple1.jpg', 
    },
    {
      id: 2,
      name: '오메가-3',
      price: '$15',
      imageUrl: 'supple2.jpg', 
    },
    {
      id: 3,
      name: '칼슘+비타민 D',
      price: '$12',
      imageUrl: 'supple3.jpg', 
    },
  ];

  return (
    <div className="product-page">
      
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.imageUrl} alt={product.name}style={{ width: '100px', height: '100px' }} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;

